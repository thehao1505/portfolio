# Hao Nguyen The
**Backend Developer**

Ho Chi Minh City · 0373346086 · thehao155@gmail.com · github.com/thehao1505 · linkedin.com/in/haonguyenthe

---

## PROFILE

Mid-level Backend Developer with 2.5+ years building scalable systems across e-commerce, fintech, and government sectors. Strong in NestJS, PostgreSQL, Redis, and microservices architecture. Experienced with async pipelines, eKYC workflows, external identity-provider integrations, and automated data crawling. Targeting Mid-level roles in Vietnamese and international markets.

---

## EXPERIENCE

### Backend Developer — Trident Digital Tech
*Jul 2025 – Present · Ho Chi Minh City*

**RDC — National Citizen Management Platform (DR Congo, 100M+ population)**
- National-scale system needed a resilient backend; architected **NestJS microservices** separating core APIs, async eKYC workers, and cron jobs — designed for 100M+ citizens.
- Large citizen datasets caused DB bottlenecks; applied **Redis + Bloom Filter** caching and **BullMQ** async queues, cutting DB load and decoupling OCR/face recognition from the API cycle.
- Identity verification required a secure, auditable flow; built **eKYC workflow** with Tencent Cloud OCR & Face Recognition, JWT auth, RBAC, and AES encryption.
- Citizens had to be reconciled against national registries; built **verification-source linking** against external providers (ONIP, CENI) with auto/manual linking, duplicate-prevention, and a two-step manual enrollment flow.
- Fraud & abuse risks on lookups; added **rate-limiting** on national-ID enquiry and per-API permission configuration (RBAC).
- Records needed flexible search and full auditability; configured **Elasticsearch** full-text search, designed **PostgreSQL** schemas with migrations, and streamed user-event logs to **ClickHouse** for the analytics/audit trail.

**Trifood — Food Delivery & Surplus Marketplace**
- APIs needed to be reliable and well-tested; built the **Surplus Bag** module and merchant **order/product/payment** endpoints (NestJS) with cart & order validation, achieving **70%+ test coverage** via Jest.
- Surplus inventory and variant pricing had to stay consistent; implemented auto-sold-out status, variant price sync on markup changes, and a **BullMQ + Redis** processing pipeline.
- Product search was slow on large catalogs; indexed data in **Elasticsearch** to power fast full-text queries across the product catalog.

### Software Developer — Tego Global
*Dec 2023 – Jun 2025 · Ho Chi Minh City*

**Pfs — Automated Insurance Data Crawling**
- Manual collection took ~5 min/record, unscalable for thousands of entries; built **Scrapy + Selenium** crawlers (17 spiders) reducing time to **<30s/record (10x+ faster)**; API sources completed in <3s.
- Anti-bot protection blocked scraping; bypassed **Cloudflare** with cloudscraper/cfscrape and rotating user-agents, scaling to **tens of thousands of records/day** across motor, home, travel & pet insurance (AAMI, Allianz, QBE, CBA, NIB, Covermore…).
- Crawlers needed orchestration and delivery; built a **NestJS backend** driving the Python crawler over **gRPC**, with real-time scrape progress via **Server-Sent Events (SSE)**, TypeORM migrations, and JWT + OTP + login-attempt auth with RBAC.
- Needed production infra; used **AWS S3, Cognito, RDS**, managed ORM via TypeORM & SQLAlchemy (Alembic migrations), and Redis caching.

**Perkify — CRM & Loyalty System (Vivaleisure)**
- CRM lacked a rewards engine; built **loyalty point & redemption** features on **NestJS + MongoDB**, optimizing aggregation queries for faster reporting.
- Multiple user roles and channels; developed REST APIs for admin, staff & customers with JWT + Passport (**Facebook social login**), **WebSocket** real-time updates, rate-limiting (Throttler), and cron-driven **nodemailer** email campaigns.
- Deployment was manual and error-prone; provisioned cloud infrastructure as code with **AWS CDK** (EC2, ECR, ELB, IAM, Lambda, Route 53).

**Blog & Autosend News — Internal Platform**
- ~2 hrs/day lost to manual content curation; built automated **Slack integration** via cron jobs delivering tech news & crypto updates, saving ~2 hrs/day.
- Platform lacked real-time features; implemented WebSocket notifications, tree comments, content recommendations (Embeddings), Redis caching — deployed on NestJS + Prisma + PostgreSQL.

---

## SKILLS

| | |
|---|---|
| **Backend** | NestJS, Node.js, Next.js, gRPC, WebSocket/SSE |
| **Languages** | TypeScript, JavaScript, Python |
| **Databases** | PostgreSQL, MongoDB, Redis, Elasticsearch, ClickHouse |
| **Messaging** | BullMQ, Redis Queues |
| **Cloud** | AWS S3, EC2, RDS, Cognito, CDK (IaC) |
| **Infra** | Docker, GitHub Actions |
| **Testing** | Jest (Unit & E2E) |

---

## EDUCATION & LANGUAGES

**B.Eng. Software Engineering** — HCMUTE, Ho Chi Minh City · Aug 2021 – Jun 2026

Vietnamese — Native  ·  English — Intermediate (TOEIC 740)
