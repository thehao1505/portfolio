"use client";

import { useEffect } from "react";
import * as THREE from "three";

/**
 * Runs all the imperative page behavior from the original single-file build:
 * boot sequence, the Three.js WebGL scene, 3D tilt cards,
 * count-up metrics and scroll reveals. Renders nothing itself — it drives the
 * static markup in page.tsx by id/class, exactly like the original script.
 */
export default function Effects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // lighter scene on small screens — fewer particles, less battery drain
    const isMobile = innerWidth < 768;

    /* ================= BOOT ================= */
    const boot = document.getElementById("boot")!;
    const bootText = document.getElementById("bootText")!;
    const bootLines: [string, string][] = [
      ["b-dim", "$ ssh hao@production"],
      ["", 'authenticating... <span class="b-amber">ok</span>'],
      ["", 'mounting webgl renderer... <span class="b-amber">ok</span>'],
      ["b-dim", "> welcome to HAO.SYS v3.0 — 3D mode"],
    ];
    if (reduced) {
      boot.classList.add("done");
    } else {
      let bi = 0;
      const timers: ReturnType<typeof setTimeout>[] = [];
      (function next() {
        if (bi >= bootLines.length) {
          timers.push(setTimeout(() => boot.classList.add("done"), 260));
          return;
        }
        const [cls, html] = bootLines[bi++];
        bootText.innerHTML +=
          (cls ? `<span class="${cls}">` : "<span>") + html + "</span>\n";
        timers.push(setTimeout(next, 180));
      })();
      timers.push(setTimeout(() => boot.classList.add("done"), 2600));
      cleanups.push(() => timers.forEach(clearTimeout));
    }

    /* ================= THREE.JS SCENE ================= */
    const canvas = document.getElementById("gl") as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04070d, 0.028);
    const camera = new THREE.PerspectiveCamera(
      55,
      innerWidth / innerHeight,
      0.1,
      200,
    );
    camera.position.set(0, 0, 16);

    const AMBER = new THREE.Color(0xffb224);
    const CYAN = new THREE.Color(0x53c7f0);

    const world = new THREE.Group();
    scene.add(world);

    /* ---- data globe: points on a fibonacci sphere ---- */
    const R = 6.2;
    const NODE_N = isMobile ? 450 : 900;
    const nodePos = new Float32Array(NODE_N * 3);
    const nodeCol = new Float32Array(NODE_N * 3);
    const surface: THREE.Vector3[] = [];
    const PHI = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NODE_N; i++) {
      const y = 1 - (i / (NODE_N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = PHI * i;
      const p = new THREE.Vector3(
        Math.cos(th) * r,
        y,
        Math.sin(th) * r,
      ).multiplyScalar(R);
      surface.push(p);
      nodePos.set([p.x, p.y, p.z], i * 3);
      const c =
        Math.random() < 0.08
          ? AMBER
          : CYAN.clone().lerp(new THREE.Color(0x2a5b8f), Math.random() * 0.7);
      nodeCol.set([c.r, c.g, c.b], i * 3);
    }
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePos, 3));
    nodeGeo.setAttribute("color", new THREE.BufferAttribute(nodeCol, 3));
    const nodes = new THREE.Points(
      nodeGeo,
      new THREE.PointsMaterial({
        size: 0.09,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    world.add(nodes);

    /* faint wireframe cage */
    const cage = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(R * 1.001, 2)),
      new THREE.LineBasicMaterial({
        color: 0x1c2946,
        transparent: true,
        opacity: 0.5,
      }),
    );
    world.add(cage);

    /* inner core */
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.6, 1),
      new THREE.MeshBasicMaterial({
        color: 0xffb224,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
      }),
    );
    world.add(core);
    const coreGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 16, 16),
      new THREE.MeshBasicMaterial({
        color: 0xffb224,
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending,
      }),
    );
    world.add(coreGlow);

    /* ---- arcs + traveling packets (BullMQ jobs) ---- */
    const ARCS = isMobile ? 14 : 26;
    const packets: {
      curve: THREE.QuadraticBezierCurve3;
      dot: THREE.Mesh;
      t: number;
      speed: number;
    }[] = [];
    const arcGroup = new THREE.Group();
    world.add(arcGroup);
    function makeArc() {
      const a = surface[Math.floor(Math.random() * surface.length)];
      const b = surface[Math.floor(Math.random() * surface.length)];
      if (a.distanceTo(b) < R * 0.7) return null;
      const mid = a
        .clone()
        .add(b)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(R * (1.25 + Math.random() * 0.5));
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const pts = curve.getPoints(40);
      const g = new THREE.BufferGeometry().setFromPoints(pts);
      const isAmber = Math.random() < 0.3;
      const line = new THREE.Line(
        g,
        new THREE.LineBasicMaterial({
          color: isAmber ? 0xffb224 : 0x53c7f0,
          transparent: true,
          opacity: 0.14,
          blending: THREE.AdditiveBlending,
        }),
      );
      arcGroup.add(line);
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 8, 8),
        new THREE.MeshBasicMaterial({
          color: isAmber ? 0xffb224 : 0x53dc97,
          transparent: true,
          opacity: 0.95,
          blending: THREE.AdditiveBlending,
        }),
      );
      arcGroup.add(dot);
      packets.push({
        curve,
        dot,
        t: Math.random(),
        speed: 0.0018 + Math.random() * 0.003,
      });
      return line;
    }
    let made = 0,
      guard = 0;
    while (made < ARCS && guard++ < 200) {
      if (makeArc()) made++;
    }

    /* ---- ambient starfield ---- */
    const STAR_N = isMobile ? 300 : 700;
    const starPos = new Float32Array(STAR_N * 3);
    for (let i = 0; i < STAR_N; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 90;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 70 - 15;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        color: 0x3a4e75,
        size: 0.06,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      }),
    );
    scene.add(stars);

    /* ---- orbit ring ---- */
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(R * 1.55, 0.012, 8, 120),
      new THREE.MeshBasicMaterial({
        color: 0x31456f,
        transparent: true,
        opacity: 0.55,
      }),
    );
    ring.rotation.x = Math.PI / 2.4;
    world.add(ring);
    const ringDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0x3ddc97 }),
    );
    world.add(ringDot);

    /* ---- interaction state ---- */
    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0;
    const onPointerMove = (e: PointerEvent) => {
      tmx = (e.clientX / innerWidth - 0.5) * 2;
      tmy = (e.clientY / innerHeight - 0.5) * 2;
    };
    addEventListener("pointermove", onPointerMove, { passive: true });
    cleanups.push(() => removeEventListener("pointermove", onPointerMove));

    let scrollP = 0;
    function onScroll() {
      const max = document.documentElement.scrollHeight - innerHeight;
      scrollP = max > 0 ? scrollY / max : 0;
    }
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));
    onScroll();

    function resize() {
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      // push globe right on wide screens so hero text breathes
      world.position.x = innerWidth > 900 ? 4.5 : 0;
    }
    addEventListener("resize", resize);
    cleanups.push(() => removeEventListener("resize", resize));
    resize();

    /* ---- render loop ---- */
    const clock = new THREE.Clock();
    let rafId = 0;
    let running = true;
    function render() {
      const t = clock.getElapsedTime();

      // smooth mouse
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      // base rotation + mouse parallax
      world.rotation.y = t * 0.08 + mx * 0.35;
      world.rotation.x = Math.sin(t * 0.05) * 0.06 + my * 0.22;
      core.rotation.y = -t * 0.4;
      core.rotation.z = t * 0.18;
      coreGlow.scale.setScalar(1 + Math.sin(t * 2) * 0.08);
      ring.rotation.z = t * 0.1;

      // satellite on the tilted ring
      const ra = t * 0.5;
      const tilt = Math.PI / 2.4;
      ringDot.position.set(
        Math.cos(ra) * R * 1.55,
        Math.sin(ra) * R * 1.55 * Math.cos(tilt),
        Math.sin(ra) * R * 1.55 * Math.sin(tilt),
      );

      // packets along arcs
      for (const p of packets) {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        p.curve.getPoint(p.t, p.dot.position);
      }

      // scroll-driven camera: dolly out + drift down + slight orbit
      camera.position.z = 16 + scrollP * 10;
      camera.position.y = -scrollP * 5;
      camera.position.x = Math.sin(scrollP * Math.PI * 0.6) * 3;
      camera.lookAt(world.position.x * 0.6, -scrollP * 4, 0);

      stars.rotation.y = t * 0.008;

      renderer.render(scene, camera);
      if (!reduced && running) rafId = requestAnimationFrame(render);
    }
    render();
    if (reduced) {
      // render a couple frames so the scene is visible but static
      renderer.render(scene, camera);
    }
    cleanups.push(() => {
      running = false;
      cancelAnimationFrame(rafId);
      renderer.dispose();
    });

    // pause the render loop while the tab is hidden — no wasted battery
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else if (!reduced && running) {
        rafId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    cleanups.push(() =>
      document.removeEventListener("visibilitychange", onVisibility),
    );

    /* ================= 3D TILT CARDS ================= */
    if (!reduced && matchMedia("(pointer:fine)").matches) {
      document.querySelectorAll<HTMLElement>(".tiltwrap").forEach((wrap) => {
        const card = wrap.querySelector<HTMLElement>(".mission")!;
        const glare = wrap.querySelector<HTMLElement>(".m-glare")!;
        const move = (e: PointerEvent) => {
          const r = wrap.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width,
            py = (e.clientY - r.top) / r.height;
          card.style.transform = `rotateY(${(px - 0.5) * 7}deg) rotateX(${
            (py - 0.5) * -7
          }deg)`;
          glare.style.setProperty("--gx", px * 100 + "%");
          glare.style.setProperty("--gy", py * 100 + "%");
        };
        const leave = () => {
          card.style.transform = "rotateY(0) rotateX(0)";
        };
        wrap.addEventListener("pointermove", move);
        wrap.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          wrap.removeEventListener("pointermove", move);
          wrap.removeEventListener("pointerleave", leave);
        });
      });
    }

    /* ================= COUNT-UP + REVEALS ================= */
    function countUp(el: HTMLElement) {
      const target = +el.dataset.count!,
        suffix = el.dataset.suffix || "";
      if (reduced) {
        el.textContent = target + suffix;
        return;
      }
      const s0 = performance.now(),
        dur = 1400;
      (function frame(t: number) {
        const p = Math.min((t - s0) / dur, 1),
          e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      })(s0);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("in");
          en.target
            .querySelectorAll<HTMLElement>("[data-count]")
            .forEach(countUp);
          io.unobserve(en.target);
        });
      },
      { threshold: 0.15 },
    );
    document
      .querySelectorAll(".reveal, .h-metrics")
      .forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
