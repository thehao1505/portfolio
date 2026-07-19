import type { CSSProperties } from "react";
import Image from "next/image";
import CopyEmail from "./CopyEmail";
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
            <div className="h-grid">
              <div className="h-text">
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
                  I&apos;m <strong>Hao Nguyen The</strong>. I design the
                  invisible half of software — queues, caches and pipelines in{" "}
                  <strong>NestJS, PostgreSQL, Redis, Elasticsearch</strong> —
                  for systems that can&apos;t afford to go down. Like a
                  national identity platform for an entire country.
                </p>
                <div className="h-cta">
                  <a className="btn solid" href="#missions">
                    View missions
                  </a>
                  <CopyEmail email="thehao155@gmail.com" className="btn">
                    Email
                  </CopyEmail>
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

              <div className="h-photo">
                <div className="h-photo-ringwrap">
                  <div className="h-photo-frame">
                    <Image
                      src="/avatar-square.jpg"
                      alt="Hao Nguyen The"
                      width={700}
                      height={700}
                      priority
                    />
                    <div className="h-photo-scan" aria-hidden="true"></div>
                  </div>
                </div>
                <div className="h-photo-tag">// operator.jpg — verified</div>
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
                    <h4>RDC — National Citizen Management Platform</h4>
                    <div className="d-tag">
                      gov-tech · congo · national scale
                    </div>
                    <ul>
                      <li>
                        National-scale system needed a resilient backend;{" "}
                        <strong>architected NestJS microservices</strong>{" "}
                        separating core APIs, async eKYC workers and cron jobs —
                        designed for{" "}
                        <span className="chip">100M+ citizens</span>
                      </li>
                      <li>
                        Large citizen datasets caused DB bottlenecks; applied{" "}
                        <strong>Redis + Bloom Filter</strong> caching and{" "}
                        <strong>BullMQ</strong> async queues, cutting DB load and
                        decoupling OCR/face recognition from the API cycle
                      </li>
                      <li>
                        Identity verification required a secure, auditable flow;
                        built an <strong>eKYC workflow</strong> with Tencent
                        Cloud OCR &amp; Face Recognition, JWT auth, RBAC and{" "}
                        <span className="chip g">AES encryption</span>
                      </li>
                      <li>
                        Citizens had to be reconciled against national
                        registries; built{" "}
                        <strong>verification-source linking</strong> against
                        external providers (ONIP, CENI) with auto/manual linking,
                        duplicate-prevention and a two-step manual enrollment
                        flow
                      </li>
                      <li>
                        Fraud &amp; abuse risks on lookups; added{" "}
                        <span className="chip">rate-limiting</span> on
                        national-ID enquiry and per-API permission configuration
                        (RBAC)
                      </li>
                      <li>
                        Records needed flexible search and full auditability;
                        configured <strong>Elasticsearch</strong> full-text
                        search, designed <strong>PostgreSQL</strong> schemas with
                        migrations, and streamed user-event logs to{" "}
                        <strong>ClickHouse</strong> for the analytics/audit trail
                      </li>
                    </ul>
                  </div>
                  <div className="deploy">
                    <h4>Trifood — Food Delivery &amp; Surplus Marketplace</h4>
                    <div className="d-tag">e-commerce · high traffic</div>
                    <ul>
                      <li>
                        APIs needed to be reliable and well-tested; built the{" "}
                        <strong>Surplus Bag</strong> module and merchant
                        order/product/payment endpoints (NestJS) with cart &amp;
                        order validation —{" "}
                        <span className="chip g">70%+ test coverage</span> via
                        Jest
                      </li>
                      <li>
                        Surplus inventory and variant pricing had to stay
                        consistent; implemented auto-sold-out status, variant
                        price sync on markup changes and a{" "}
                        <strong>BullMQ + Redis</strong> processing pipeline
                      </li>
                      <li>
                        Product search was slow on large catalogs; indexed data
                        in <strong>Elasticsearch</strong> to power fast full-text
                        queries across the product catalog
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
                    <div className="d-tag">scrapy · selenium · grpc</div>
                    <ul>
                      <li>
                        Manual collection took ~5 min/record, unscalable for
                        thousands of entries; built{" "}
                        <strong>Scrapy + Selenium</strong> crawlers (17 spiders)
                        cutting it to{" "}
                        <span className="chip">
                          &lt;30s/record — 10×+ faster
                        </span>{" "}
                        (API sources &lt;3s)
                      </li>
                      <li>
                        Anti-bot protection blocked scraping; bypassed{" "}
                        <strong>Cloudflare</strong> (cloudscraper/cfscrape,
                        rotating user-agents), scaling to{" "}
                        <span className="chip">10,000s records/day</span> across
                        motor, home, travel &amp; pet insurance (AAMI, Allianz,
                        QBE, CBA, NIB, Covermore…)
                      </li>
                      <li>
                        Crawlers needed orchestration and delivery; built a{" "}
                        <strong>NestJS</strong> backend driving the Python
                        crawler over <strong>gRPC</strong>, real-time progress
                        via <strong>SSE</strong>, TypeORM migrations, and JWT +
                        OTP + login-attempt auth with RBAC
                      </li>
                      <li>
                        Needed production infra; used{" "}
                        <strong>AWS S3, Cognito, RDS</strong>, ORM via TypeORM
                        &amp; SQLAlchemy (Alembic migrations) and Redis caching
                      </li>
                    </ul>
                  </div>
                  <div className="deploy">
                    <h4>Perkify — CRM &amp; Loyalty (Vivaleisure)</h4>
                    <div className="d-tag">crm · loyalty · aws-cdk</div>
                    <ul>
                      <li>
                        CRM lacked a rewards engine; built{" "}
                        <strong>loyalty point &amp; redemption</strong> features
                        on <strong>NestJS + MongoDB</strong>, optimizing
                        aggregation queries for faster reporting
                      </li>
                      <li>
                        Multiple roles and channels; developed REST APIs for
                        admin, staff &amp; customers with JWT + Passport (
                        <strong>Facebook social login</strong>), WebSocket
                        real-time updates, rate-limiting (Throttler) and
                        cron-driven nodemailer email campaigns
                      </li>
                      <li>
                        Deployment was manual and error-prone; provisioned cloud
                        infrastructure as code with <strong>AWS CDK</strong> —
                        EC2, ECR, ELB, IAM, Lambda, Route 53
                      </li>
                    </ul>
                  </div>
                  <div className="deploy">
                    <h4>Blog &amp; Autosend News — Internal Platform</h4>
                    <div className="d-tag">automation · slack · realtime</div>
                    <ul>
                      <li>
                        ~2 hrs/day lost to manual content curation; built an
                        automated <strong>Slack</strong> integration via cron
                        jobs delivering tech news &amp; crypto updates —{" "}
                        <span className="chip g">saved ~2 hrs/day</span>
                      </li>
                      <li>
                        Platform lacked real-time features; implemented WebSocket
                        notifications, tree comments and content recommendations
                        via <strong>Embeddings</strong>, with Redis caching
                      </li>
                      <li>
                        Deployed on <strong>NestJS + Prisma + PostgreSQL</strong>
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
                <div className="st-v">
                  NestJS · Node.js · Next.js · gRPC · WebSocket/SSE
                </div>
                <div className="bar">
                  <i style={w(0.95)}></i>
                </div>
              </div>
              <div className="st">
                <div className="st-k">Databases</div>
                <div className="st-v">
                  PostgreSQL · MongoDB · Redis · Elasticsearch · ClickHouse
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
                <div className="st-v">AWS S3 · EC2 · RDS · Cognito · CDK (IaC)</div>
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
              <CopyEmail email="thehao155@gmail.com">
                thehao155@gmail.com
              </CopyEmail>
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
