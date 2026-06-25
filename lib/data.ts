import type { Card, Module, Topic } from './types';
import { FOUNDATION_CARDS } from './data-foundation';
import { TASK2_CARDS } from './data-task2';
import { TASK1_CARDS } from './data-task1';
import { SENTENCE_CARDS } from './data-sentences';
import { SENTENCE2_CARDS } from './data-sentences2';
import { VOCAB_CARDS } from './data-vocab';
import { GRAMMAR_CARDS } from './data-grammar';

export const MODULES: Module[] = [
  { id: 'foundation', label: 'Nền tảng & Tiêu chí', color: '#0d9488' },
  { id: 'task2', label: 'Task 2 — Essay', color: '#2563eb' },
  { id: 'task1', label: 'Task 1 — Academic', color: '#7c3aed' },
  { id: 'sentences', label: 'Mẫu câu nâng band', color: '#4f46e5' },
  { id: 'vocab', label: 'Từ vựng theo chủ đề', color: '#b45309' },
  { id: 'grammar', label: 'Ngữ pháp & Câu', color: '#be123c' },
];

export const TOPICS: Topic[] = [
  // Foundation
  { id: 'f-criteria', module: 'foundation', label: '4 tiêu chí chấm điểm' },
  { id: 'f-overview', module: 'foundation', label: 'Tổng quan & quản lý thời gian' },
  { id: 'f-paraphrase', module: 'foundation', label: 'Paraphrase' },
  // Task 2
  { id: 't2-types', module: 'task2', label: 'Nhận diện 5 dạng đề' },
  { id: 't2-structure', module: 'task2', label: 'Cấu trúc & dàn ý' },
  { id: 't2-ideas', module: 'task2', label: 'Phát triển ý & lập luận' },
  { id: 't2-cohesion', module: 'task2', label: 'Liên kết & mạch lạc' },
  { id: 't2-samples', module: 'task2', label: 'Câu mẫu & đoạn mẫu' },
  // Task 1
  { id: 't1-overview', module: 'task1', label: 'Tổng quan & Overview' },
  { id: 't1-trends', module: 'task1', label: 'Mô tả xu hướng (line/bar)' },
  { id: 't1-compare', module: 'task1', label: 'So sánh & số liệu (pie/table)' },
  { id: 't1-process', module: 'task1', label: 'Process & Map' },
  // Sentence structures
  { id: 's-opinion', module: 'sentences', label: 'Nêu & bảo vệ quan điểm' },
  { id: 's-cause', module: 'sentences', label: 'Nguyên nhân & kết quả' },
  { id: 's-concession', module: 'sentences', label: 'Nhượng bộ & phản biện' },
  { id: 's-comparison', module: 'sentences', label: 'So sánh & tương phản' },
  { id: 's-example', module: 'sentences', label: 'Đưa ví dụ & dẫn chứng' },
  { id: 's-conditional', module: 'sentences', label: 'Điều kiện & giả định' },
  { id: 's-emphasis', module: 'sentences', label: 'Nhấn mạnh (cleft/inversion)' },
  { id: 's-solution', module: 'sentences', label: 'Đề xuất giải pháp' },
  { id: 's-define', module: 'sentences', label: 'Định nghĩa & nêu vấn đề' },
  { id: 's-cohesion', module: 'sentences', label: 'Mở đoạn, chuyển ý & kết bài' },
  // Vocab
  { id: 'v-education', module: 'vocab', label: 'Giáo dục' },
  { id: 'v-environment', module: 'vocab', label: 'Môi trường' },
  { id: 'v-technology', module: 'vocab', label: 'Công nghệ' },
  { id: 'v-health', module: 'vocab', label: 'Sức khỏe' },
  { id: 'v-crime', module: 'vocab', label: 'Tội phạm & Pháp luật' },
  { id: 'v-work', module: 'vocab', label: 'Việc làm & Kinh tế' },
  { id: 'v-society', module: 'vocab', label: 'Xã hội & Gia đình' },
  { id: 'v-government', module: 'vocab', label: 'Chính phủ & Toàn cầu hóa' },
  // Grammar
  { id: 'g-complex', module: 'grammar', label: 'Câu phức & mệnh đề' },
  { id: 'g-conditional', module: 'grammar', label: 'Điều kiện & giả định' },
  { id: 'g-passive', module: 'grammar', label: 'Bị động & danh từ hóa' },
  { id: 'g-advanced', module: 'grammar', label: 'Cấu trúc nâng cao' },
  { id: 'g-errors', module: 'grammar', label: 'Lỗi thường gặp & cách sửa' },
];

export const CARDS: Card[] = [
  ...FOUNDATION_CARDS,
  ...TASK2_CARDS,
  ...TASK1_CARDS,
  ...SENTENCE_CARDS,
  ...SENTENCE2_CARDS,
  ...VOCAB_CARDS,
  ...GRAMMAR_CARDS,
];
