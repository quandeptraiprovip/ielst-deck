import type { Card } from './types';

export const FOUNDATION_CARDS: Card[] = [
  // ===================== f-criteria =====================
  {
    id: 'f1',
    module: 'foundation',
    topic: 'f-criteria',
    band: 'b6',
    type: 'concept',
    tags: ['task-response', 'criteria', 'task2'],
    title: 'Task Response (TR) - Band 6 vs 7 vs 8 trông như thế nào?',
    ans: {
      summary:
        "Task Response (chỉ áp dụng cho Task 2; ở Task 1 gọi là Task Achievement) đo mức độ bạn trả lời ĐÚNG và ĐỦ câu hỏi đề bài, đưa ra position rõ ràng và phát triển ý có chiều sâu. Đây là tiêu chí dễ bị mất điểm nhất vì nhiều thí sinh viết hay nhưng lạc đề.",
      points: [
        "Band 6: trả lời được tất cả phần của đề nhưng một số ý phát triển hời hợt (underdeveloped) hoặc thiếu cụ thể; position có nhưng đôi lúc chưa rõ.",
        "Band 7: trả lời đầy đủ mọi phần, position rõ ràng xuyên suốt bài, các main idea được mở rộng và hỗ trợ tốt — dù đôi khi ý phụ còn lan man.",
        "Band 8: trả lời đầy đủ với câu trả lời được phát triển kỹ (well-developed), ý tưởng liên quan chặt chẽ, mở rộng hợp lý và có hỗ trợ thuyết phục.",
        "Examiner thưởng: position nhất quán, ý chính rõ ràng + ví dụ/giải thích cụ thể, đủ tất cả các phần của câu hỏi (ví dụ đề 2 vế phải trả lời cả 2 vế).",
        "Mất điểm vì: lạc đề (off-topic), thiếu vế của câu hỏi, ý chung chung không có ví dụ, hoặc viết dưới 250 từ.",
      ],
      phrases: [
        "I firmly believe that ...",
        "There are several compelling reasons for this view.",
        "A clear example of this can be seen in ...",
      ],
      examples: [
        "✗ Technology is good and bad for everyone. (chung chung, không phát triển)",
        "✓ While technology has automated many manual jobs, it has simultaneously created roles in data analysis and software development, suggesting the net effect on employment is positive.",
      ],
    },
  },
  {
    id: 'f2',
    module: 'foundation',
    topic: 'f-criteria',
    band: 'b7',
    type: 'concept',
    tags: ['coherence', 'cohesion', 'criteria'],
    title: 'Coherence & Cohesion (CC) - cách lên band cho mạch lạc & liên kết',
    ans: {
      summary:
        "Coherence là mạch lạc về Ý (bài có logic, dễ theo dõi, mỗi đoạn một ý chính); Cohesion là liên kết về Từ ngữ (linking words, đại từ, từ nối). Tiêu chí này thưởng cho việc PHÂN ĐOẠN (paragraphing) tốt và dùng cohesive devices tự nhiên, không lạm dụng.",
      points: [
        "Band 6: thông tin sắp xếp mạch lạc nhưng linking words đôi khi dùng sai hoặc lặp/quá máy móc; paragraphing có nhưng chưa luôn hợp lý.",
        "Band 7: ý tưởng được sắp xếp logic, mỗi đoạn có một central topic rõ ràng (topic sentence), dùng linking devices linh hoạt — đôi khi hơi thừa hoặc thiếu.",
        "Band 8: thông tin và ý tưởng được tổ chức mượt mà; cohesion được dùng khéo léo gần như không gây chú ý; paragraphing luôn hợp lý.",
        "Examiner thưởng: mỗi đoạn 1 ý chính + topic sentence, liên kết bằng đại từ/từ đồng nghĩa (reference) chứ không chỉ Firstly/Secondly, và chuyển ý tự nhiên.",
        "Mất điểm vì: nhồi nhét linking words (Moreover, Furthermore, In addition liên tiếp), không xuống đoạn, hoặc một đoạn chứa nhiều ý rời rạc.",
      ],
      phrases: [
        "This is largely because ...",
        "As a result / Consequently, ...",
        "A further point worth considering is that ...",
      ],
      examples: [
        "✗ Firstly. Secondly. Moreover. Furthermore. In addition. (liệt kê máy móc)",
        "✓ The most pressing concern, however, is cost. This expense, in turn, deters lower-income families from participating.",
      ],
    },
  },
  {
    id: 'f3',
    module: 'foundation',
    topic: 'f-criteria',
    band: 'b8',
    type: 'concept',
    tags: ['lexical-resource', 'vocabulary', 'criteria'],
    title: 'Lexical Resource (LR) - từ vựng: band 6 đến band 8 khác gì?',
    ans: {
      summary:
        "Lexical Resource đánh giá ĐỘ RỘNG, ĐỘ CHÍNH XÁC và sự TỰ NHIÊN của từ vựng — gồm collocation, less common words và word formation. Quan trọng: dùng từ khó SAI còn tệ hơn dùng từ vừa sức nhưng đúng.",
      points: [
        "Band 6: vốn từ đủ cho chủ đề nhưng còn lặp; có lỗi spelling/word choice nhưng chưa gây cản trở hiểu.",
        "Band 7: dùng được một số less common vocabulary và collocation, có style awareness; thi thoảng lỗi word choice/collocation/spelling.",
        "Band 8: dùng từ vựng rộng, truyền đạt nghĩa tinh tế (precise meaning); dùng thành thạo less common và idiomatic vocabulary với rất ít lỗi.",
        "Examiner thưởng: collocation chính xác (heavy traffic chứ không phải strong traffic), paraphrase tự nhiên, dùng đúng sắc thái nghĩa.",
        "Mất điểm vì: nhồi 'từ học thuộc' không hợp ngữ cảnh, lặp từ đề bài, hoặc dùng idiom sai (idiom dùng sai bị trừ nặng).",
      ],
      phrases: [
        "a growing body of evidence",
        "place a strain on (public services)",
        "to a considerable extent",
      ],
      examples: [
        "✗ The government must do a big effort to solve the problem. (do an effort - sai collocation)",
        "✓ The government must make a concerted effort to tackle the problem.",
      ],
    },
  },
  {
    id: 'f4',
    module: 'foundation',
    topic: 'f-criteria',
    band: 'b8',
    type: 'concept',
    tags: ['grammar', 'gra', 'criteria'],
    title: 'Grammatical Range & Accuracy (GRA) - ngữ pháp đa dạng & chính xác',
    ans: {
      summary:
        "Grammatical Range & Accuracy đánh giá sự ĐA DẠNG cấu trúc câu (range) và mức độ ĐÚNG (accuracy). Chìa khóa lên band là dùng được câu phức (complex sentences) và phải có tỉ lệ 'error-free sentences' cao.",
      points: [
        "Band 6: kết hợp câu đơn và câu phức nhưng độ linh hoạt còn hạn chế; có lỗi nhưng hiếm khi gây khó hiểu.",
        "Band 7: dùng nhiều cấu trúc phức tạp, tạo ra nhiều câu không lỗi (frequent error-free sentences); lỗi còn nhưng không nhiều.",
        "Band 8: đa dạng cấu trúc, phần lớn câu không có lỗi; lỗi chỉ là 'slips' rất hiếm.",
        "Examiner thưởng: relative clause, conditional, passive, mệnh đề trạng ngữ — dùng đúng và đúng dấu câu (punctuation).",
        "Mất điểm vì: chỉ viết câu đơn, sai thì/số ít-số nhiều/mạo từ liên tục, hoặc câu phức nhưng sai khiến người đọc khó hiểu.",
      ],
      phrases: [
        "Not only does X ..., but it also ...",
        "Had governments acted sooner, the crisis could have been avoided.",
        "What makes this issue so pressing is that ...",
      ],
      examples: [
        "✗ Many people they thinks pollution is increase every year. (lỗi chủ-vị, thì)",
        "✓ Many people believe that pollution, which has risen steadily, now threatens public health.",
      ],
    },
  },
  {
    id: 'f5',
    module: 'foundation',
    topic: 'f-criteria',
    band: 'b7',
    type: 'concept',
    tags: ['scoring', 'band-math', 'criteria'],
    title: 'Cách tính điểm Writing - 4 tiêu chí ghép lại thành band như thế nào?',
    ans: {
      summary:
        "Điểm Writing của bạn là trung bình của 4 tiêu chí (TR, CC, LR, GRA), mỗi tiêu chí chiếm 25%. Nhưng điểm tổng Writing được tính theo TRỌNG SỐ: Task 2 quan trọng GẤP ĐÔI Task 1.",
      points: [
        "Mỗi task được chấm theo 4 tiêu chí (mỗi cái 25%), lấy trung bình ra band của task đó.",
        "Điểm Writing tổng = (Task 1 x 1 + Task 2 x 2) / 3 — tức Task 2 nặng gấp đôi Task 1.",
        "Band cuối được làm tròn về 0.5 gần nhất (ví dụ 6.25 -> 6.5; 6.125 -> 6.0).",
        "Hệ quả: nên dành nhiều thời gian và công sức hơn cho Task 2, nhưng tuyệt đối không bỏ Task 1.",
        "Vì là trung bình 4 tiêu chí, một tiêu chí quá yếu sẽ kéo cả band xuống — hãy cân bằng, đừng để GRA hay LR tụt hẳn.",
      ],
      examples: [
        "Ví dụ: Task 1 đạt band 6.0, Task 2 đạt band 7.0 -> (6.0 + 7.0 x 2) / 3 = 20/3 = 6.67 -> làm tròn thành 6.5.",
        "Ví dụ: cả 4 tiêu chí Task 2 là TR7 CC6 LR7 GRA6 -> (7+6+7+6)/4 = 6.5.",
      ],
    },
  },

  // ===================== f-overview =====================
  {
    id: 'f6',
    module: 'foundation',
    topic: 'f-overview',
    band: 'b6',
    type: 'concept',
    tags: ['format', 'task1', 'task2', 'overview'],
    title: 'Task 1 vs Task 2 - khác nhau về độ dài, thời gian, trọng số',
    ans: {
      summary:
        "Bài thi Writing Academic gồm 2 task làm trong 60 phút. Task 1 là mô tả số liệu/quy trình (tối thiểu 150 từ); Task 2 là bài luận nêu quan điểm (tối thiểu 250 từ). Hiểu đúng format giúp tránh mất điểm oan.",
      points: [
        "Task 1: tối thiểu 150 từ, nên dành ~20 phút. Mô tả biểu đồ, bảng, bản đồ hoặc quy trình một cách KHÁCH QUAN (không nêu ý kiến cá nhân).",
        "Task 2: tối thiểu 250 từ, nên dành ~40 phút. Viết essay trả lời câu hỏi, BẮT BUỘC nêu quan điểm/lập luận của bạn.",
        "Trọng số: Task 2 tính gấp đôi Task 1 trong điểm tổng, nên chiến lược thời gian phải ưu tiên Task 2.",
        "Viết DƯỚI số từ tối thiểu bị trừ điểm Task Response; nhưng viết quá dài cũng không cộng điểm và dễ mắc lỗi.",
        "Task 1 General Training là viết thư (letter) thay vì mô tả số liệu — bộ thẻ này tập trung vào Academic.",
      ],
      examples: [
        "Task 1 (Academic): The chart compares the percentage of households owning a car in four countries between 2000 and 2020.",
        "Task 2: Some people think university education should be free. To what extent do you agree or disagree?",
      ],
    },
  },
  {
    id: 'f7',
    module: 'foundation',
    topic: 'f-overview',
    band: 'b7',
    type: 'template',
    tags: ['time-management', 'plan', 'overview'],
    title: 'Kế hoạch quản lý thời gian 60 phút cho Writing',
    ans: {
      summary:
        "Quản lý thời gian là kỹ năng tách band 6 và band 7. Kế hoạch chuẩn: làm Task 1 trong 20 phút, Task 2 trong 40 phút, luôn chừa thời gian lập dàn ý và kiểm tra lỗi.",
      points: [
        "Nên làm Task 2 TRƯỚC nếu bạn dễ bị cháy giờ, vì Task 2 đáng gấp đôi điểm.",
        "Luôn dành 3-5 phút lập dàn ý (planning) — bài có dàn ý ghi điểm Coherence cao hơn hẳn.",
        "Chừa 2-3 phút cuối mỗi task để soát lỗi (proofreading): thì, số ít/nhiều, mạo từ, chính tả, dấu câu.",
        "Đừng đếm từng từ — hãy ước lượng độ dài câu để không phải đếm thủ công và mất thời gian.",
      ],
      sample:
        "GỢI Ý PHÂN BỔ 60 PHÚT\n\nTask 1 (20 phút):\n- 3 phút: đọc đề + chọn key features, lập dàn ý\n- 15 phút: viết (intro paraphrase + overview + 2 body)\n- 2 phút: soát lỗi\n\nTask 2 (40 phút):\n- 5 phút: phân tích đề + brainstorm ý + dàn ý\n- 32 phút: viết (intro + 2 body + conclusion)\n- 3 phút: soát lỗi",
    },
  },
  {
    id: 'f8',
    module: 'foundation',
    topic: 'f-overview',
    band: 'b6',
    type: 'concept',
    tags: ['mistakes', 'band-cap', 'overview'],
    title: 'Những lỗi PHỔ BIẾN khóa trần band điểm của bạn',
    ans: {
      summary:
        "Có một số lỗi 'chí mạng' khiến band bị giới hạn (capped) dù các phần khác tốt. Biết để tránh là cách nhanh nhất nâng band.",
      points: [
        "Lạc đề (off-topic): không trả lời đúng câu hỏi -> Task Response bị giới hạn ở band 5 hoặc thấp hơn.",
        "Viết thiếu số từ (under length): dưới 150/250 từ -> bị phạt Task Response.",
        "Học thuộc câu mẫu (memorised phrases): examiner nhận ra và sẽ KHÔNG tính những câu đó vào bài.",
        "Task 1 không có overview (câu tóm tắt xu hướng chính): gần như không thể đạt quá band 5 ở Task Achievement.",
        "Task 2 không có position rõ ràng / nhất quán: bị giới hạn Task Response, dù lập luận hay.",
        "Bê nguyên (copy) chữ từ đề bài: phần copy không được tính là từ của bạn.",
      ],
      examples: [
        "✗ (Task 2 dạng agree/disagree mà không nói rõ mình đồng ý hay không) -> mất điểm position.",
        "✗ (Task 1 chỉ liệt kê số liệu, không có câu 'Overall, ...') -> thiếu overview.",
      ],
    },
  },

  // ===================== f-paraphrase =====================
  {
    id: 'f9',
    module: 'foundation',
    topic: 'f-paraphrase',
    band: 'b6',
    type: 'concept',
    tags: ['paraphrase', 'synonym', 'intro'],
    title: 'Paraphrase bằng từ đồng nghĩa (synonym) - kỹ thuật cơ bản',
    ans: {
      summary:
        "Paraphrase là viết lại đề bài bằng từ ngữ của bạn ở câu mở bài — tránh copy đề. Cách dễ nhất là thay từ khóa bằng synonym, nhưng phải giữ ĐÚNG nghĩa và collocation tự nhiên.",
      points: [
        "Chỉ thay những từ CÓ synonym tự nhiên; không cần (và không nên) thay 100% từ.",
        "ĐỪNG thay synonym một cách máy móc khiến câu sai nghĩa hoặc lố (ví dụ thay 'children' thành 'offspring').",
        "Giữ nguyên những từ không có synonym tốt (tên riêng, thuật ngữ như 'the internet').",
        "Kết hợp synonym với đổi cấu trúc (xem các thẻ sau) để paraphrase mạnh hơn.",
      ],
      phrases: [
        "children -> young people / the younger generation",
        "important -> crucial / vital / essential",
        "think that -> believe / argue / be of the opinion that",
      ],
      examples: [
        "Đề: Some people believe that children should learn a foreign language at primary school.",
        "✓ Paraphrase: It is argued by many that young learners ought to be taught a second language during their early years of education.",
      ],
    },
  },
  {
    id: 'f10',
    module: 'foundation',
    topic: 'f-paraphrase',
    band: 'b7',
    type: 'concept',
    tags: ['paraphrase', 'word-form', 'grammar'],
    title: 'Paraphrase bằng đổi từ loại (word form)',
    ans: {
      summary:
        "Một kỹ thuật mạnh hơn synonym đơn thuần là đổi TỪ LOẠI (word form): biến động từ thành danh từ, tính từ thành danh từ... Điều này buộc bạn đổi cấu trúc câu, ghi điểm cả LR lẫn GRA.",
      points: [
        "Verb <-> Noun: 'pollutes the air' -> 'causes air pollution'.",
        "Adjective <-> Noun: 'is very important' -> 'is of great importance'.",
        "Verb <-> Adjective: 'children develop' -> 'the development of children' hoặc 'developing children'.",
        "Đổi từ loại thường kéo theo đổi cấu trúc câu — đó là điểm cộng cho ngữ pháp đa dạng.",
      ],
      phrases: [
        "X is increasing -> there has been an increase in X",
        "It is necessary to -> there is a need for",
        "people are addicted to -> addiction to ... is common",
      ],
      examples: [
        "Đề: Governments should spend money on public transport.",
        "✓ Paraphrase: Public spending on transportation systems is something many believe should be prioritised.",
      ],
    },
  },
  {
    id: 'f11',
    module: 'foundation',
    topic: 'f-paraphrase',
    band: 'b7',
    type: 'concept',
    tags: ['paraphrase', 'voice', 'clause-order'],
    title: 'Paraphrase bằng đổi voice (chủ động/bị động) & thứ tự mệnh đề',
    ans: {
      summary:
        "Ngoài thay từ, bạn có thể đổi STRUCTURE: chuyển câu chủ động thành bị động (hoặc ngược lại), và đổi thứ tự mệnh đề (đưa mệnh đề phụ lên trước). Cách này thay đổi câu rõ rệt mà không cần nhiều synonym.",
      points: [
        "Active -> Passive: 'The government funds schools' -> 'Schools are funded by the government'.",
        "Đổi thứ tự mệnh đề: 'Many people travel abroad because flights are cheap' -> 'Because flights are now affordable, many people travel abroad'.",
        "Đổi mệnh đề if/although ra trước/sau để câu mới mẻ và đa dạng cấu trúc.",
        "Kết hợp đổi voice + đổi thứ tự + một vài synonym = paraphrase tự nhiên và mạnh nhất.",
      ],
      phrases: [
        "X causes Y -> Y is caused by X",
        "Although X, Y -> Y, despite the fact that X",
        "If we do X, Y happens -> Y will occur should we do X",
      ],
      examples: [
        "Đề: Tourism damages the environment in many countries.",
        "✓ Paraphrase: In numerous nations, the environment is being harmed as a result of the tourism industry.",
      ],
    },
  },
  {
    id: 'f12',
    module: 'foundation',
    topic: 'f-paraphrase',
    band: 'b8',
    type: 'template',
    tags: ['paraphrase', 'combine', 'intro', 'template'],
    title: 'Kết hợp mọi kỹ thuật paraphrase trong 1 câu mở bài',
    ans: {
      summary:
        "Paraphrase đỉnh cao là kết hợp đồng thời: synonym + đổi từ loại + đổi voice/thứ tự mệnh đề. Mục tiêu là câu mở bài truyền đạt CÙNG ý nghĩa nhưng nghe hoàn toàn tự nhiên và khác đề.",
      points: [
        "Bước 1: gạch chân các keyword trong đề.",
        "Bước 2: thay keyword bằng synonym/đổi từ loại ở những chỗ tự nhiên.",
        "Bước 3: đổi cấu trúc (voice hoặc thứ tự mệnh đề) cho cả câu.",
        "Bước 4: đọc lại — nghĩa có còn đúng không? Có nghe gượng không? Nếu gượng thì bớt synonym lại.",
        "Cảnh báo: paraphrase quá đà làm sai nghĩa còn tệ hơn copy nhẹ — ưu tiên ĐÚNG nghĩa.",
      ],
      sample:
        "QUY TRÌNH PARAPHRASE (ví dụ đầy đủ)\n\nĐề: Many people think that the best way to reduce crime is to give longer prison sentences.\n\nBước 1 - Keywords: many people think / best way / reduce crime / longer prison sentences.\n\nBước 2 - Synonym + word form:\nmany people think -> it is widely believed\nbest way -> most effective method\nreduce crime -> tackle / curb criminal behaviour\nlonger prison sentences -> lengthier jail terms / harsher custodial sentences\n\nBước 3 - Đổi cấu trúc (đưa mệnh đề lên trước):\n\nKết quả: \"It is widely believed that the most effective method of curbing criminal behaviour is to impose lengthier prison sentences on offenders.\"",
    },
  },
];
