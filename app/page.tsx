import type { CSSProperties } from "react";
import Effects from "./Effects";

/** CSS custom property helper for the skill-bar fill widths. */
const w = (value: number): CSSProperties =>
  ({ ["--w" as string]: value }) as CSSProperties;

export default function Home() {
  return (
    <>
      <canvas id="gl" aria-hidden="true"></canvas>
      <div className="vignette" aria-hidden="true"></div>

      <div id="boot" aria-hidden="true">
        <pre id="bootText"></pre>
      </div>

      <header className="statusbar">
        <div className="wrap">
          <a className="sb-id" href="#top">
            HAO<em>.</em>SYS
          </a>
          <span className="sb-live">
            <i></i>PROD · UPTIME <span id="uptime">00:00:00</span>
          </span>
          <nav className="sb-nav" aria-label="Sections">
            <a href="#missions">missions</a>
            <a href="#stack">stack</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="wrap">
          <section className="hero" aria-label="Introduction">
            <div>
              <p className="h-eyebrow">
                Backend Developer / Ho Chi Minh City / UTC+7
              </p>
              <h1 aria-label="Built for one hundred million users">
                <span className="row">
                  <span>BUILT FOR</span>
                </span>
                <span className="row">
                  <span>100 MILLION</span>
                </span>
                <span className="row">
                  <span>USERS.</span>
                </span>
              </h1>
              <p className="h-sub">
                I&apos;m <strong>Hao Nguyen The</strong>. I design the invisible
                half of software — queues, caches and pipelines in{" "}
                <strong>NestJS, PostgreSQL, Redis, Elasticsearch</strong> — for
                systems that can&apos;t afford to go down. Like a national
                identity platform for an entire country.
              </p>
              <div className="h-cta">
                <a className="btn solid" href="#missions">
                  View missions
                </a>
                <a className="btn" href="mailto:thehao155@gmail.com">
                  Open channel
                </a>
                <a
                  className="btn"
                  href="/resume.pdf"
                  download="HaoNguyenThe-CV.pdf"
                >
                  Download CV
                </a>
              </div>
              <div className="h-metrics" aria-label="Key metrics">
                <div className="hm">
                  <b data-count="100" data-suffix="M+">
                    0
                  </b>
                  <span>citizens designed for</span>
                </div>
                <div className="hm">
                  <b data-count="10" data-suffix="×">
                    0
                  </b>
                  <span>faster pipeline</span>
                </div>
                <div className="hm">
                  <b data-count="70" data-suffix="%+">
                    0
                  </b>
                  <span>test coverage</span>
                </div>
              </div>
            </div>
            <div className="h-scroll">scroll ▾</div>
          </section>

          <section id="missions" aria-label="Experience">
            <div className="sec-head reveal">
              <span className="idx">[01]</span>
              <h2>Mission Log</h2>
              <div className="rule"></div>
            </div>

            <div className="tiltwrap reveal">
              <article className="mission">
                <div className="m-glare"></div>
                <div className="m-head">
                  <h3>
                    Trident Digital Tech <small>{"// Backend Developer"}</small>
                  </h3>
                  <span className="m-when">JUL 2025 → PRESENT · HCMC</span>
                </div>
                <div className="m-body">
                  <div className="deploy">
                    <h4>RDC — Citizen Management Platform</h4>
                    <div className="d-tag">
                      gov-tech · congo · national scale
                    </div>
                    <ul>
                      <li>
                        <strong>Architected NestJS microservices</strong> — core
                        APIs, async eKYC workers, cron jobs — designed for{" "}
                        <span className="chip">100M+ citizens</span>
                      </li>
                      <li>
                        <strong>Redis + Bloom Filter</strong> caching &amp;{" "}
                        <strong>BullMQ</strong> queues: cut DB load, moved
                        OCR/face-recognition off the request cycle
                      </li>
                      <li>
                        Secure <strong>eKYC workflow</strong>: Tencent Cloud OCR
                        &amp; Face Recognition, JWT, RBAC,{" "}
                        <span className="chip g">AES encrypted</span>
                      </li>
                      <li>
                        <strong>Elasticsearch</strong> full-text search +
                        PostgreSQL schemas with migrations &amp; full audit
                        trail
                      </li>
                    </ul>
                  </div>
                  <div className="deploy">
                    <h4>Trifood — Food Delivery Platform</h4>
                    <div className="d-tag">e-commerce · high traffic</div>
                    <ul>
                      <li>
                        Order, product &amp; payment APIs on a{" "}
                        <strong>BullMQ + Redis</strong> pipeline —{" "}
                        <span className="chip g">70%+ coverage</span> via Jest
                      </li>
                      <li>
                        Product catalog indexed in{" "}
                        <strong>Elasticsearch</strong> for fast full-text search
                        at scale
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            <div className="tiltwrap reveal">
              <article className="mission">
                <div className="m-glare"></div>
                <div className="m-head">
                  <h3>
                    Tego Global <small>{"// Software Developer"}</small>
                  </h3>
                  <span className="m-when">DEC 2023 → JUN 2025 · HCMC</span>
                </div>
                <div className="m-body">
                  <div className="deploy">
                    <h4>Pfs — Insurance Data Crawling</h4>
                    <div className="d-tag">automation · scrapy · selenium</div>
                    <ul>
                      <li>
                        Cut collection from ~5 min to{" "}
                        <span className="chip">
                          &lt;30s/record — 10× faster
                        </span>
                        ; API sources in &lt;3s
                      </li>
                      <li>
                        Scaled to{" "}
                        <span className="chip">10,000s records/day</span> across
                        10 insurance sites
                      </li>
                      <li>
                        Production infra: NestJS on{" "}
                        <strong>AWS S3, Cognito, RDS</strong> — TypeORM &amp;
                        SQLAlchemy
                      </li>
                    </ul>
                  </div>
                  <div className="deploy">
                    <h4>Perkify + Internal Platform</h4>
                    <div className="d-tag">crm · loyalty · realtime</div>
                    <ul>
                      <li>
                        <strong>Loyalty &amp; redemption engine</strong> for
                        multi-tenant CRM; optimized MongoDB aggregations
                      </li>
                      <li>
                        Cron-driven <strong>Slack news bot</strong> —{" "}
                        <span className="chip g">~2 hrs/day saved</span>
                      </li>
                      <li>
                        WebSocket notifications, tree comments, embedding
                        recommendations, Redis caching
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="stack" aria-label="Skills">
            <div className="sec-head reveal">
              <span className="idx">[02]</span>
              <h2>Loadout</h2>
              <div className="rule"></div>
            </div>
            <div className="stack-grid reveal">
              <div className="st">
                <div className="st-k">Backend</div>
                <div className="st-v">NestJS · Node.js · Next.js</div>
                <div className="bar">
                  <i style={w(0.95)}></i>
                </div>
              </div>
              <div className="st">
                <div className="st-k">Databases</div>
                <div className="st-v">
                  PostgreSQL · MongoDB · Redis · Elasticsearch
                </div>
                <div className="bar">
                  <i style={w(0.9)}></i>
                </div>
              </div>
              <div className="st">
                <div className="st-k">Languages</div>
                <div className="st-v">TypeScript · JavaScript · Python</div>
                <div className="bar">
                  <i style={w(0.9)}></i>
                </div>
              </div>
              <div className="st">
                <div className="st-k">Messaging</div>
                <div className="st-v">BullMQ · Redis Queues</div>
                <div className="bar">
                  <i style={w(0.85)}></i>
                </div>
              </div>
              <div className="st">
                <div className="st-k">Cloud</div>
                <div className="st-v">AWS S3 · EC2 · RDS · Cognito</div>
                <div className="bar">
                  <i style={w(0.75)}></i>
                </div>
              </div>
              <div className="st">
                <div className="st-k">Infra &amp; Testing</div>
                <div className="st-v">Docker · GitHub Actions · Jest</div>
                <div className="bar">
                  <i style={w(0.8)}></i>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Education and languages">
            <div className="sec-head reveal">
              <span className="idx">[03]</span>
              <h2>Credentials</h2>
              <div className="rule"></div>
            </div>
            <div className="edu reveal">
              <div>
                <div className="e-k">Degree</div>
                <h3>B.Eng. Software Engineering</h3>
                <p>
                  HCMUTE — Ho Chi Minh City
                  <br />
                  Aug 2021 → Jun 2026
                </p>
              </div>
              <div>
                <div className="e-k">Languages</div>
                <h3>VI native · EN intermediate</h3>
                <p>
                  English — TOEIC 740
                  <br />
                  Comfortable in international teams
                </p>
              </div>
            </div>
          </section>
        </div>

        <footer id="contact">
          <div className="wrap">
            <p className="h-eyebrow">Incoming transmission</p>
            <p className="f-big">
              <a href="mailto:thehao155@gmail.com">
                LET&apos;S SHIP
                <br />
                SOMETHING BIG.
              </a>
            </p>
            <p className="f-sub">
              Open to mid-level backend roles — Vietnamese and international
              teams. If your system needs to scale without drama, my inbox is
              up.
            </p>
            <div className="f-links">
              <a href="mailto:thehao155@gmail.com">thehao155@gmail.com</a>
              <a href="tel:+84373346086">+84 373 346 086</a>
              <a
                href="https://github.com/thehao1505"
                target="_blank"
                rel="noopener"
              >
                github/thehao1505
              </a>
              <a
                href="https://www.linkedin.com/in/haonguyenthe/"
                target="_blank"
                rel="noopener"
              >
                linkedin/haonguyenthe
              </a>
            </div>
            <div className="f-note">
              <span>© 2026 HAO NGUYEN THE — ALL SYSTEMS NOMINAL</span>
              <span>NEXT.JS · THREE.JS · WEBGL</span>
            </div>
          </div>
        </footer>
      </main>

      <Effects />
    </>
  );
}
