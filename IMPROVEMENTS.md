# Portfolio — Ý tưởng cải thiện (backlog)

> Ghi chú các ý tưởng đã bàn nhưng chưa làm. Ràng buộc quan trọng: **repo và demo live
> của dự án công ty KHÔNG được lộ ra ngoài (NDA)** — mọi ý tưởng showcase phải ở mức
> khái niệm/ẩn danh, không code, không data, không endpoint thật.

## 1. Blueprint tương tác (thay thế cho link repo/demo) — ưu tiên cao nhất

Mỗi mission thêm nút `[ view blueprint ]` mở modal/trang case study kiến trúc:

- Sơ đồ kiến trúc **generic**: API gateway → services → BullMQ workers → Redis/PG/ES.
  Không lộ tên bảng, endpoint, business logic cụ thể.
- **Trade-off đã cân nhắc** (thứ interviewer muốn nghe):
  - Tại sao Bloom Filter đặt trước Redis?
  - Tại sao tách OCR/face-recognition ra worker thay vì xử lý sync?
- Con số kết quả đã có sẵn trên portfolio (10× faster, 70% coverage…).

Nâng cấp: làm diagram **động bằng Three.js** — các node (API, Worker, Redis, PG, ES)
nối nhau, packet chạy giữa các node giống quả cầu hiện tại. On-brand với HAO.SYS,
không có dòng code công ty nào bị lộ.

## 2. Side project nhỏ (khi có thời gian)

Không clone dự án công ty — **trích pattern** thành thư viện generic, viết lại từ đầu:

- `nestjs-bloom-cache` — module cache Redis + Bloom Filter cho NestJS.
- Demo BullMQ pipeline xử lý ảnh + dashboard theo dõi queue.

Repo ~300 dòng sạch + README tốt là đủ.

## 3. Blog kỹ thuật ngắn

2–3 bài dạng "Những gì tôi học được khi thiết kế hệ thống cho 100M người dùng"
(không nêu chi tiết mật). Chứng minh khả năng diễn đạt cho team quốc tế.

## 4. Terminal tương tác (wow-factor)

Nhấn `~` hoặc click status bar → mở terminal overlay gõ lệnh thật:

```
$ help          → list commands
$ missions      → scroll tới section
$ stack --list  → in stack
$ contact       → mở mailto
$ whoami        → bio ngắn
```

Easter eggs: click core quả cầu → burst packet; gõ `sudo` → "permission granted".

## 5. Globe phản ứng theo section

Dùng `scrollP` có sẵn: tới "Loadout" thì node sáng theo cluster, tới footer thì
arc bắn dồn dập.

## 6. Rà soát nội dung theo NDA

Portfolio đang nêu tên khách hàng/dự án cụ thể (RDC Congo, Trifood, Pfs, Perkify)
và stack chi tiết (Tencent Cloud OCR…). Mức "tên dự án + mô tả chung" thường chấp
nhận được trên CV, nhưng cần tự kiểm tra hợp đồng. Nếu cần, đổi thành mô tả ẩn danh
("National-scale citizen identity platform").

## 7. Nội dung

- "designed for 100M+ citizens" → nên bổ sung 1 metric **đã đo được thật**
  (p95 latency, req/s chịu tải, số record đã xử lý). Số "designed for" dễ bị hỏi
  vặn khi phỏng vấn; số "measured" thì không.
- TOEIC 740 → cân nhắc đổi thành "English — professional working proficiency".

## 8. Deploy checklist

- [ ] Thay `public/resume.pdf` placeholder bằng CV thật.
- [ ] Deploy lên Vercel (`vercel` hoặc import repo từ GitHub).
- [ ] Chọn domain (domain riêng hay subdomain `tribox.me`?).
- [ ] Set env `NEXT_PUBLIC_SITE_URL=https://<domain>` trên Vercel
      (metadata/sitemap/robots/JSON-LD đều đọc từ biến này — xem `lib/site.ts`).
- [ ] Bật Vercel Analytics (`npm i @vercel/analytics` + `<Analytics />` trong layout).
