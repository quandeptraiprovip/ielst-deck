// Band mục tiêu của thẻ (target band band the card helps you reach)
export type Band = 'b6' | 'b7' | 'b8';

// Loại thẻ học
export type CardType = 'concept' | 'vocab' | 'structure' | 'template' | 'sample';

// Module lớn
export type ModuleId = 'foundation' | 'task2' | 'task1' | 'vocab' | 'grammar';

// Chủ đề con
export type TopicId =
  // foundation
  | 'f-criteria' | 'f-overview' | 'f-paraphrase'
  // task 2
  | 't2-types' | 't2-structure' | 't2-ideas' | 't2-cohesion' | 't2-samples'
  // task 1
  | 't1-overview' | 't1-trends' | 't1-compare' | 't1-process'
  // vocab by topic
  | 'v-education' | 'v-environment' | 'v-technology' | 'v-health'
  | 'v-crime' | 'v-work' | 'v-society' | 'v-government'
  // grammar
  | 'g-complex' | 'g-conditional' | 'g-passive' | 'g-advanced' | 'g-errors';

export type MasteryStatus = 'new' | 'learning' | 'mastered';

export interface CardAnswer {
  // Giải thích chính (tiếng Việt, có thể chèn thuật ngữ tiếng Anh)
  summary: string;
  // Các gạch đầu dòng: quy tắc, mẹo, lưu ý
  points: string[];
  // Cụm từ / collocation / sentence frame tiếng Anh dùng được ngay ("band booster")
  phrases?: string[];
  // Câu ví dụ tiếng Anh (có thể dùng ✗ … / ✓ … để so sánh sai–đúng)
  examples?: string[];
  // Đoạn văn mẫu / template dài (hiển thị trong khối nổi bật)
  sample?: string;
}

export interface Card {
  id: string;
  module: ModuleId;
  topic: TopicId;
  band: Band;
  type: CardType;
  tags: string[];
  // Mặt trước thẻ: tên khái niệm / câu hỏi gợi nhớ
  title: string;
  ans: CardAnswer;
}

export interface Module {
  id: ModuleId;
  label: string;
  color: string;
}

export interface Topic {
  id: TopicId;
  module: ModuleId;
  label: string;
}

export type View = 'home' | 'browse' | 'study';

export interface AppState {
  view: View;
  module: ModuleId | 'all';
  topic: TopicId | null;
  bands: Band[];
  types: CardType[];
  search: string;
  expanded: Record<string, boolean>;
  mastery: Record<string, MasteryStatus>;
  darkLocal: boolean;
  studyIds: string[];
  studyIdx: number;
  studyFlipped: boolean;
}
