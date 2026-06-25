# IELTS Writing Deck

Ứng dụng học **IELTS Writing** dạng flashcard, xây trên Next.js 16 + React 19 + Tailwind 4.
Cùng kiến trúc với `interviewdeck` nhưng nội dung tập trung 100% vào việc đạt band cao cho phần **Writing Task 1 & Task 2**: từ vựng theo chủ đề, cấu trúc câu, dàn ý, câu/đoạn mẫu và tiêu chí chấm điểm.

## Nội dung (179 thẻ học)

| Module | Mô tả | Chủ đề con |
|---|---|---|
| **Nền tảng & Tiêu chí** | 4 tiêu chí chấm (TR, CC, LR, GRA), cách tính band, quản lý thời gian, paraphrase | 3 |
| **Task 2 — Essay** | 5 dạng đề, cấu trúc 4 đoạn (intro/PEEL/conclusion), phát triển ý, liên kết, câu & đoạn mẫu | 5 |
| **Task 1 — Academic** | Overview, mô tả xu hướng (line/bar), so sánh số liệu (pie/table), process & map | 4 |
| **Mẫu câu nâng band** | ~50 cấu trúc câu nên học, mỗi cấu trúc 8–14 ví dụ đa dạng theo nhiều chủ đề | 10 |
| **Từ vựng theo chủ đề** | Collocation band 7–8 cho 8 chủ đề thi phổ biến | 8 |
| **Ngữ pháp & Câu** | Câu phức, điều kiện, bị động/nominalisation, cleft/inversion, lỗi thường gặp của người Việt | 5 |

**Mẫu câu nâng band** gồm: nêu/bảo vệ quan điểm, nguyên nhân–kết quả, nhượng bộ & phản biện, so sánh & tương phản, đưa ví dụ, điều kiện & giả định, nhấn mạnh (cleft/inversion), đề xuất giải pháp, định nghĩa & nêu vấn đề, mở đoạn/chuyển ý/kết bài.

Mỗi thẻ gồm: giải thích (tiếng Việt) · gạch đầu dòng mẹo · **cụm từ/câu dùng được ngay** · ví dụ ✓/✗ · đoạn mẫu áp dụng. Mỗi thẻ gắn band mục tiêu (6+/7+/8+).

## Tính năng

- **Dashboard** — tiến độ theo module & chủ đề, gợi ý chủ đề còn yếu.
- **Duyệt** — lọc theo band và loại thẻ, mở/đóng nội dung, đánh dấu *Đang ôn* / *Đã thuộc*.
- **Học thẻ (flashcard)** — lật thẻ, ưu tiên thẻ chưa thuộc.
- Lưu tiến độ vào `localStorage`, hỗ trợ giao diện sáng/tối.

## Chạy thử

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start   # bản production
```

## Cấu trúc mã

```
app/                 layout, page, globals.css (design tokens + dark theme)
components/          AppShell, Sidebar, TopBar, CardBody
components/views/    HomeView, BrowseView, StudyView
lib/types.ts         mô hình dữ liệu (Card, Module, Topic, AppState)
lib/store.tsx        reducer + context, lọc & phiên học, persist localStorage
lib/data.ts          định nghĩa MODULES, TOPICS và gộp các file thẻ
lib/data-*.ts        nội dung thẻ theo từng module
```

Thêm/sửa nội dung: chỉnh các file `lib/data-*.ts` theo interface `Card` trong `lib/types.ts`.
