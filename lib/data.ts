import type { Card, Module, Topic } from './types';
import { FOUNDATION_CARDS } from './data-foundation';
import { TASK2_CARDS } from './data-task2';
import { TASK1_CARDS } from './data-task1';
import { VOCAB_CARDS } from './data-vocab';
import { GRAMMAR_CARDS } from './data-grammar';

export const MODULES: Module[] = [
  { id: 'foundation', label: 'Nền tảng & Tiêu chí', color: '#0d9488' },
  { id: 'task2', label: 'Task 2 — Essay', color: '#2563eb' },
  { id: 'task1', label: 'Task 1 — Academic', color: '#7c3aed' },
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
  ...VOCAB_CARDS,
  ...GRAMMAR_CARDS,
];
