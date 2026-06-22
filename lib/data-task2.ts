import type { Card } from './types';

export const TASK2_CARDS: Card[] = [
  // ===== t2-types =====
  {
    id: 't2_1',
    module: 'task2',
    topic: 't2-types',
    band: 'b6',
    type: 'concept',
    tags: ['question-analysis', 'task-vs-topic', 'instruction-words'],
    title: 'Đọc đúng đề: Topic vs Task & từ chỉ dẫn',
    ans: {
      summary:
        'Trước khi viết phải tách đề thành 2 phần: TOPIC (chủ đề chung) và TASK (việc bạn được yêu cầu làm). Lạc đề (off-topic) hoặc trả lời sai yêu cầu là lỗi tụt band nặng nhất ở Task Response.',
      points: [
        'TOPIC = chủ đề (ví dụ: working from home, online education). TASK = câu lệnh (give your opinion / discuss both views / what problems...).',
        'Gạch chân instruction words để biết phải làm gì: "To what extent do you agree?", "Discuss both views", "advantages and disadvantages", "what problems... and solutions?", "why... and how?".',
        'Trả lời TẤT CẢ các phần của câu hỏi (address all parts) — đề 2 phần mà chỉ trả lời 1 phần thì TR tối đa band 5.',
        'Đừng đổi chủ đề: nếu đề nói về "young people", đừng viết chung chung về "people".',
        'Xác định position (quan điểm) ngay từ đầu và giữ nhất quán suốt bài.',
      ],
      phrases: [
        'To what extent do you agree or disagree?',
        'Discuss both views and give your own opinion.',
        'Do the advantages outweigh the disadvantages?',
        'What problems does this cause and what solutions can you suggest?',
      ],
      examples: [
        '✗ Đề hỏi về \"children\" nhưng viết về \"adults\" -> off-topic.',
        '✓ \"This essay will discuss both the benefits and drawbacks before giving my own view.\" (address all parts)',
      ],
    },
  },
  {
    id: 't2_2',
    module: 'task2',
    topic: 't2-types',
    band: 'b6',
    type: 'structure',
    tags: ['opinion-essay', 'agree-disagree', 'thesis'],
    title: 'Dạng 1: Opinion / Agree-Disagree',
    ans: {
      summary:
        'Đề yêu cầu nêu QUAN ĐIỂM cá nhân. Bạn phải chọn một lập trường rõ ràng và bảo vệ nó. Đừng ngồi trên hàng rào (no fence-sitting).',
      points: [
        'Nhận diện qua từ: "Do you agree or disagree?", "To what extent...?", "What is your opinion?".',
        'Cấu trúc 4 đoạn: Intro (paraphrase + thesis nêu rõ quan điểm) -> Body 1 (lý do 1) -> Body 2 (lý do 2) -> Conclusion (nhắc lại quan điểm).',
        'Có thể chọn: hoàn toàn đồng ý, hoàn toàn phản đối, hoặc đồng ý một phần (partly agree) — nhưng phải nhất quán.',
        'Nếu "To what extent", nên định lượng: "I completely agree" / "I largely agree" / "I partly agree".',
        'Mỗi body đưa 1 main idea, KHÔNG liệt kê nhiều ý hời hợt.',
      ],
      phrases: [
        'I completely agree with this statement because...',
        'In my view, the disadvantages far outweigh any benefits.',
        'While I accept that..., I firmly believe that...',
      ],
      examples: [
        '✓ Thesis: \"I strongly agree that governments should invest more in public transport, primarily because it reduces congestion and pollution.\"',
      ],
      sample:
        'Thesis (full agreement):\nI completely agree with this view, and this essay will explain why [reason 1] and [reason 2] support this position.',
    },
  },
  {
    id: 't2_3',
    module: 'task2',
    topic: 't2-types',
    band: 'b7',
    type: 'structure',
    tags: ['discussion-essay', 'both-views'],
    title: 'Dạng 2: Discussion (discuss both views & give opinion)',
    ans: {
      summary:
        'Đề yêu cầu thảo luận CẢ HAI quan điểm trái ngược VÀ nêu ý kiến của bạn. Bỏ quên ý kiến cá nhân là lỗi mất điểm rất phổ biến.',
      points: [
        'Nhận diện qua: "Discuss both these views and give your own opinion."',
        'Cấu trúc khuyến nghị: Intro (paraphrase + nêu sẽ bàn cả hai + hé lộ quan điểm) -> Body 1 (view A) -> Body 2 (view B + quan điểm của bạn) -> Conclusion.',
        'Phải trình bày khách quan cả hai phía (some people / others argue) RỒI mới chốt ý kiến.',
        'Đặt quan điểm cá nhân vào đoạn bàn về phía bạn ủng hộ, hoặc tách riêng trong conclusion — nhưng nêu rõ.',
        'Dùng đại từ "they/such people" khi trình bày ý của người khác, "I" khi nêu ý mình.',
      ],
      phrases: [
        'On the one hand, some people argue that...',
        'On the other hand, others contend that...',
        'Having considered both sides, I am of the opinion that...',
      ],
      examples: [
        '✗ Chỉ liệt kê 2 phía mà quên \"my own opinion\" -> mất điểm Task Response.',
        '✓ \"While both arguments have merit, I personally side with those who believe that...\"',
      ],
      sample:
        'Intro outline:\nThis essay will examine both the argument that [view A] and the opposing belief that [view B], before explaining why I lean towards [your side].',
    },
  },
  {
    id: 't2_4',
    module: 'task2',
    topic: 't2-types',
    band: 'b7',
    type: 'structure',
    tags: ['advantages-disadvantages', 'outweigh'],
    title: 'Dạng 3: Advantages vs Disadvantages',
    ans: {
      summary:
        'Đề yêu cầu cân nhắc lợi và hại. Đọc kỹ: nếu có chữ "outweigh" thì BẮT BUỘC phải đưa ra phán quyết bên nào nặng hơn.',
      points: [
        'Nhận diện qua: "advantages and disadvantages", "Do the advantages outweigh the disadvantages?".',
        'Loại A ("Discuss advantages and disadvantages"): trình bày cân bằng, có thể không cần kết luận bên nào nặng hơn.',
        'Loại B ("Do the advantages outweigh...?"): PHẢI chốt — đây thực chất là opinion essay, nêu rõ bên nào lớn hơn.',
        'Cấu trúc: Intro -> Body 1 (advantages) -> Body 2 (disadvantages) -> Conclusion (cân nặng).',
        'Đừng nhầm với problem-solution: ở đây bàn lợi/hại, không phải vấn đề/giải pháp.',
      ],
      phrases: [
        'The most significant benefit is that...',
        'However, this trend is not without its drawbacks.',
        'On balance, the benefits clearly outweigh the limited drawbacks.',
      ],
      examples: [
        '✓ \"In my opinion, the advantages of remote working significantly outweigh the disadvantages, as I will demonstrate.\"',
      ],
      sample:
        'Conclusion frame:\nIn conclusion, although [drawback] is a valid concern, the advantages of [topic] are far greater, which is why I believe they outweigh the disadvantages.',
    },
  },
  {
    id: 't2_5',
    module: 'task2',
    topic: 't2-types',
    band: 'b7',
    type: 'structure',
    tags: ['problem-solution', 'cause-effect'],
    title: 'Dạng 4: Problem / Cause - Solution',
    ans: {
      summary:
        'Đề nêu một tình huống tiêu cực và hỏi nguyên nhân/vấn đề cùng giải pháp. Phải ghép giải pháp ĂN KHỚP với vấn đề/nguyên nhân đã nêu.',
      points: [
        'Nhận diện qua: "What problems does this cause?", "What are the causes...?", "What solutions can you suggest?".',
        'Cấu trúc: Intro -> Body 1 (problems/causes) -> Body 2 (solutions tương ứng) -> Conclusion.',
        'Mỗi solution nên giải quyết trực tiếp một problem/cause đã nêu để bài có mạch lạc (coherence).',
        'Nêu rõ AI thực hiện giải pháp: "Governments should...", "Individuals can...".',
        'Đừng đưa quá nhiều vấn đề; 1-2 vấn đề được phát triển sâu tốt hơn liệt kê.',
      ],
      phrases: [
        'One of the main causes of this issue is...',
        'A practical solution to this problem would be to...',
        'This could be tackled by + V-ing...',
      ],
      examples: [
        '✓ Problem: traffic congestion -> Solution: invest in reliable public transport (giải pháp khớp vấn đề).',
        '✗ Problem: pollution -> Solution: build more schools (không liên quan).',
      ],
      sample:
        'Body link frame:\nThe most effective way to address [problem stated above] would be for [agent] to [action], which would directly reduce [the cause].',
    },
  },
  {
    id: 't2_6',
    module: 'task2',
    topic: 't2-types',
    band: 'b8',
    type: 'structure',
    tags: ['two-part-question', 'direct-question'],
    title: 'Dạng 5: Two-part / Direct question',
    ans: {
      summary:
        'Đề đưa ra HAI câu hỏi trực tiếp (thường không có "agree/disagree"). Phải trả lời cả hai câu, mỗi câu thường là một body paragraph.',
      points: [
        'Nhận diện: có hai câu hỏi riêng biệt, ví dụ "Why is this the case? Is it a positive or negative development?".',
        'Cấu trúc: Intro (paraphrase + trả lời ngắn cả hai/outline) -> Body 1 (câu hỏi 1) -> Body 2 (câu hỏi 2) -> Conclusion.',
        'Mỗi câu hỏi được trả lời trực tiếp và phát triển đầy đủ; đừng bỏ sót câu nào.',
        'Nếu một câu hỏi mời nêu ý kiến (positive/negative?), hãy chọn lập trường rõ ràng.',
        'Tránh viết chung chung — bám sát đúng câu được hỏi.',
      ],
      phrases: [
        'There are several reasons behind this phenomenon.',
        'In my view, this is a largely positive development because...',
        'To answer the second question...',
      ],
      examples: [
        '✓ Outline: \"This essay will first explore the reasons for this trend and then argue that it is, on balance, a positive change.\"',
      ],
      sample:
        'Intro outline (two-part):\nThis essay will first examine why [phenomenon] occurs and will then argue that it represents a [positive/negative] development overall.',
    },
  },

  // ===== t2-structure =====
  {
    id: 't2_7',
    module: 'task2',
    topic: 't2-structure',
    band: 'b6',
    type: 'structure',
    tags: ['4-paragraph', 'plan', 'overview'],
    title: 'Cấu trúc 4 đoạn chuẩn cho mọi dạng',
    ans: {
      summary:
        'Bài Task 2 an toàn nhất có 4 đoạn: Introduction, Body 1, Body 2, Conclusion. Cấu trúc rõ ràng giúp tăng điểm Coherence & Cohesion.',
      points: [
        'Introduction: paraphrase đề + thesis/outline (2-3 câu).',
        'Body 1 & Body 2: mỗi đoạn một main idea, theo PEEL.',
        'Conclusion: tóm tắt lại quan điểm, KHÔNG đưa ý mới.',
        'Tối thiểu 250 từ; viết dưới 250 từ bị trừ điểm Task Response.',
        'Mỗi đoạn xuống dòng rõ ràng (clear paragraphing) — không viết một khối liền.',
      ],
      phrases: [
        'This essay will argue that...',
        'The first reason is that...',
        'In conclusion, ...',
      ],
      examples: [
        '✓ Intro 2-3 câu, Body ~5-6 câu mỗi đoạn, Conclusion 2 câu.',
      ],
    },
  },
  {
    id: 't2_8',
    module: 'task2',
    topic: 't2-structure',
    band: 'b7',
    type: 'structure',
    tags: ['introduction', 'paraphrase', 'thesis'],
    title: 'Viết Introduction: paraphrase + thesis/outline',
    ans: {
      summary:
        'Mở bài gồm 2 phần: (1) câu paraphrase lại đề bằng từ của bạn, (2) câu thesis nêu quan điểm hoặc outline những gì sẽ bàn. Đừng copy nguyên đề.',
      points: [
        'Câu 1 (background/paraphrase): diễn đạt lại đề, đổi từ vựng và cấu trúc, KHÔNG sao chép.',
        'Câu 2 (thesis/outline): nêu rõ quan điểm (opinion essay) hoặc cho biết bài sẽ làm gì (discussion / problem-solution).',
        'Tránh mở bài quá dài dòng hoặc dùng câu sáo rỗng "Nowadays, in modern society...".',
        'Paraphrase bằng cách dùng từ đồng nghĩa + đổi word form + đổi chủ động/bị động.',
        'Thesis càng cụ thể (báo trước 2 lý do) thì coherence càng cao.',
      ],
      phrases: [
        'It is often argued that...',
        'This essay will discuss... and explain why...',
        'In my opinion, ... for two main reasons.',
      ],
      examples: [
        'Đề: \"Some people think children should start school at a very early age.\"',
        '✓ Paraphrase: \"There is a widespread belief that formal education should begin during the very early years of childhood.\"',
      ],
    },
  },
  {
    id: 't2_9',
    module: 'task2',
    topic: 't2-structure',
    band: 'b7',
    type: 'structure',
    tags: ['body', 'peel', 'topic-sentence'],
    title: 'Body paragraph theo PEEL',
    ans: {
      summary:
        'Mỗi body paragraph nên theo cấu trúc PEEL: Point (topic sentence) -> Explain (giải thích) -> Example (ví dụ) -> Link (chốt lại/nối). Mỗi đoạn chỉ một ý chính.',
      points: [
        'POINT: câu chủ đề nêu main idea của đoạn, đặt ngay đầu đoạn.',
        'EXPLAIN: giải thích TẠI SAO, mở rộng bằng lý do (because, this means that...).',
        'EXAMPLE: minh hoạ bằng ví dụ cụ thể (for instance, a clear example of this is...).',
        'LINK: chốt lại liên hệ với câu hỏi/thesis.',
        'Một ý phát triển sâu (depth) tốt hơn nhiều ý nông (breadth).',
      ],
      phrases: [
        'The main reason for this is that...',
        'This is because...',
        'A clear example of this can be seen in...',
        'This clearly demonstrates that...',
      ],
      examples: [
        'P: \"Public transport reduces traffic congestion.\"',
        'E: \"This is because fewer private cars are on the road...\"',
        'E.g.: \"For example, after Seoul expanded its metro, car use fell sharply.\"',
        'L: \"Hence, investment in transit directly eases congestion.\"',
      ],
    },
  },
  {
    id: 't2_10',
    module: 'task2',
    topic: 't2-structure',
    band: 'b6',
    type: 'structure',
    tags: ['conclusion', 'restate', 'no-new-ideas'],
    title: 'Viết Conclusion: tóm tắt, không thêm ý mới',
    ans: {
      summary:
        'Kết bài nhắc lại quan điểm/những ý chính bằng cách diễn đạt khác. Tuyệt đối KHÔNG đưa ý tưởng hay ví dụ mới ở conclusion.',
      points: [
        'Bắt đầu bằng signpost: "In conclusion", "To sum up", "In summary".',
        'Tóm tắt lại quan điểm (opinion essay) hoặc tổng hợp hai phía + ý mình (discussion).',
        'Có thể thêm một dự đoán/khuyến nghị ngắn nhưng KHÔNG mở ý tưởng mới cần giải thích.',
        'Giữ ngắn gọn 1-2 câu; conclusion không cần ví dụ.',
        'Đừng dùng lại nguyên văn câu thesis — paraphrase lại.',
      ],
      phrases: [
        'In conclusion, it is clear that...',
        'To sum up, the evidence suggests that...',
        'Overall, I firmly believe that...',
      ],
      examples: [
        '✗ \"In conclusion, another important point is that...\" (thêm ý mới — sai).',
        '✓ \"In conclusion, while there are some drawbacks, the benefits of... are undeniable.\"',
      ],
    },
  },
  {
    id: 't2_11',
    module: 'task2',
    topic: 't2-structure',
    band: 'b8',
    type: 'concept',
    tags: ['timing', 'word-count', 'planning'],
    title: 'Kế hoạch thời gian & phân bổ từ (40 phút)',
    ans: {
      summary:
        'Task 2 nên dành ~40 phút. Lập dàn ý trước khi viết giúp bài mạch lạc và tránh lạc đề — đừng viết ngay khi vừa đọc đề.',
      points: [
        'Phân bổ: ~5 phút phân tích đề + brainstorm + dàn ý; ~30 phút viết; ~5 phút kiểm tra lỗi.',
        '"13-minute plan" hiểu là: dành đủ thời gian lập kế hoạch (planning) trước khi viết, đừng nhảy thẳng vào viết.',
        'Phân bổ từ: Intro ~40-50 từ, mỗi Body ~90-100 từ, Conclusion ~30-40 từ -> ~270-290 từ tổng.',
        'Viết tối thiểu 250 từ; lý tưởng 260-290 (đừng viết quá dài dễ mắc lỗi và hết giờ).',
        '5 phút cuối: soát lỗi ngữ pháp, chính tả, mạo từ, số ít/số nhiều, dấu câu.',
      ],
      phrases: [],
      examples: [
        '✓ Dàn ý nhanh: position + 2 main ideas + 1 ví dụ mỗi ý, viết ra giấy nháp trước.',
      ],
    },
  },

  // ===== t2-ideas =====
  {
    id: 't2_12',
    module: 'task2',
    topic: 't2-ideas',
    band: 'b6',
    type: 'concept',
    tags: ['brainstorming', 'idea-generation'],
    title: 'Brainstorming: tạo ý nhanh',
    ans: {
      summary:
        'Trước khi viết, dành 3-4 phút nghĩ ý. Dùng các góc nhìn khác nhau để bật ý: cá nhân, xã hội, kinh tế, môi trường, giáo dục.',
      points: [
        'Kỹ thuật từ khoá: hỏi "Why?", "Who is affected?", "What are the consequences?".',
        'Áp các lăng kính: Economic, Social, Personal, Environmental, Educational, Health (E-S-P-E-E-H).',
        'Chọn 2 ý MẠNH NHẤT để phát triển sâu thay vì gom nhiều ý.',
        'Nghĩ luôn ví dụ cho từng ý ngay khi brainstorm.',
        'Không cần ý độc đáo — cần ý RÕ và phát triển tốt.',
      ],
      phrases: [
        'From an economic perspective, ...',
        'On a personal level, ...',
        'In terms of society as a whole, ...',
      ],
      examples: [
        'Topic remote work -> Economic: save commuting cost; Social: less office bonding; Personal: better work-life balance.',
      ],
    },
  },
  {
    id: 't2_13',
    module: 'task2',
    topic: 't2-ideas',
    band: 'b7',
    type: 'concept',
    tags: ['develop-idea', 'depth', 'extending'],
    title: 'Phát triển MỘT ý cho thật sâu',
    ans: {
      summary:
        'Band 7+ đòi hỏi "extended and supported ideas". Mỗi main idea cần được mở rộng bằng chuỗi lý do và hệ quả, không chỉ nêu rồi bỏ.',
      points: [
        'Đi từ Point -> Why -> So what (hệ quả) -> Example: chuỗi nhân quả làm ý sâu.',
        'Hỏi liên tục "Tại sao điều này quan trọng?" cho đến khi ý đủ đầy.',
        'Tránh "listing" — liệt kê nhiều ý mỗi ý một câu khiến điểm Coherence thấp.',
        'Depth over breadth: 2 ý phát triển kỹ > 5 ý nông.',
        'Liên kết hệ quả: this leads to..., as a result..., which in turn...',
      ],
      phrases: [
        'This means that...',
        'As a consequence, ...',
        'which in turn leads to...',
        'Ultimately, this results in...',
      ],
      examples: [
        '✗ Liệt kê: \"It saves money. It saves time. It is good for health.\" (nông)',
        '✓ Mở rộng: \"Cycling to work saves money on fuel, which means families have more disposable income, and this in turn can improve their quality of life.\"',
      ],
    },
  },
  {
    id: 't2_14',
    module: 'task2',
    topic: 't2-ideas',
    band: 'b7',
    type: 'concept',
    tags: ['examples', 'hypothetical', 'support'],
    title: 'Dùng ví dụ (kể cả ví dụ giả định)',
    ans: {
      summary:
        'Ví dụ làm cho lập luận thuyết phục. Không cần số liệu thật — ví dụ giả định hợp lý hoặc ví dụ chung vẫn được chấp nhận trong IELTS.',
      points: [
        'Ví dụ có thể là: trải nghiệm chung, một tình huống điển hình, hoặc ví dụ giả định (hypothetical).',
        'Đừng bịa số liệu chính xác ("75% of people...") nếu không chắc — dễ thiếu thuyết phục.',
        'Ví dụ giả định dùng cấu trúc điều kiện: "If a student were to..., they would...".',
        'Ví dụ phải MINH HOẠ đúng cho point vừa nêu, không lạc hướng.',
        'Một ví dụ tốt cho mỗi body là đủ.',
      ],
      phrases: [
        'For instance, ...',
        'A clear example of this is...',
        'To illustrate, imagine a situation where...',
        'Take... as an example.',
      ],
      examples: [
        '✓ Hypothetical: \"For example, if a child were given a smartphone too early, they might struggle to develop face-to-face communication skills.\"',
      ],
    },
  },

  // ===== t2-cohesion =====
  {
    id: 't2_15',
    module: 'task2',
    topic: 't2-cohesion',
    band: 'b6',
    type: 'concept',
    tags: ['linkers', 'addition', 'function'],
    title: 'Linkers theo chức năng: BỔ SUNG (Addition)',
    ans: {
      summary:
        'Nhóm từ nối dùng để THÊM ý. Hãy đa dạng hoá thay vì chỉ Firstly/Secondly.',
      points: [
        'Thêm ý: dùng linh hoạt, đặt đúng vị trí (đầu câu + dấu phẩy).',
        'Tránh lặp đi lặp lại một linker trong cả bài.',
        '"Moreover/Furthermore" trang trọng hơn "Also/Besides".',
        'Có thể thêm ý ngay trong câu bằng "in addition to + N/V-ing".',
      ],
      phrases: [
        'In addition, ...',
        'Moreover, ...',
        'Furthermore, ...',
        'What is more, ...',
        'Additionally, ...',
        'Besides this, ...',
        'In addition to + (noun/V-ing)',
      ],
      examples: [
        '✓ \"Moreover, remote work reduces commuting time, which lowers stress levels.\"',
      ],
    },
  },
  {
    id: 't2_16',
    module: 'task2',
    topic: 't2-cohesion',
    band: 'b7',
    type: 'concept',
    tags: ['linkers', 'contrast', 'function'],
    title: 'Linkers theo chức năng: TƯƠNG PHẢN (Contrast)',
    ans: {
      summary:
        'Nhóm từ nối thể hiện sự đối lập, nhượng bộ. Cực kỳ quan trọng cho discussion và để thể hiện nhượng bộ (concession).',
      points: [
        '"However" đứng đầu câu + phẩy; "but" nối hai mệnh đề trong một câu.',
        '"Although/Even though/While" + mệnh đề (concession): "Although X, Y".',
        '"Despite/In spite of" + danh từ/V-ing (KHÔNG đi với mệnh đề).',
        'Concession giúp bài cân bằng và đạt band cao: thừa nhận ý đối lập rồi phản bác.',
      ],
      phrases: [
        'However, ...',
        'On the other hand, ...',
        'In contrast, ...',
        'Although + (clause), ...',
        'Despite + (noun / V-ing), ...',
        'Nevertheless, ...',
        'While it is true that..., ...',
      ],
      examples: [
        '✗ \"Despite it was raining...\" (sai — Despite không đi với mệnh đề).',
        '✓ \"Despite the rain, ...\" / \"Although it was raining, ...\"',
      ],
    },
  },
  {
    id: 't2_17',
    module: 'task2',
    topic: 't2-cohesion',
    band: 'b7',
    type: 'concept',
    tags: ['linkers', 'cause-effect', 'example', 'conclusion'],
    title: 'Linkers: NGUYÊN NHÂN-KẾT QUẢ, VÍ DỤ, KẾT LUẬN',
    ans: {
      summary:
        'Ba nhóm chức năng thường dùng: chỉ nguyên nhân/kết quả, dẫn ví dụ, và kết luận. Chọn đúng chức năng và đa dạng hoá.',
      points: [
        'Nguyên nhân: because, since, as, due to + N, owing to + N.',
        'Kết quả: therefore, as a result, consequently, thus, hence, so.',
        'Ví dụ: for example, for instance, such as, namely, to illustrate.',
        'Kết luận: in conclusion, to sum up, in summary, overall, on the whole.',
        'Lưu ý: "due to / because of" + danh từ; "because / since" + mệnh đề.',
      ],
      phrases: [
        'as a result, ...',
        'consequently, ...',
        'therefore, ...',
        'due to + (noun)',
        'because + (clause)',
        'for instance, ...',
        'such as + (noun)',
        'on the whole, ...',
      ],
      examples: [
        '✗ \"because of the weather was bad\" (sai).',
        '✓ \"because of the bad weather\" / \"because the weather was bad\".',
      ],
    },
  },
  {
    id: 't2_18',
    module: 'task2',
    topic: 't2-cohesion',
    band: 'b8',
    type: 'concept',
    tags: ['referencing', 'pronouns', 'cohesion'],
    title: 'Referencing & đại từ thay thế',
    ans: {
      summary:
        'Liên kết không chỉ là từ nối. Dùng đại từ và từ thay thế (this, these, such, it, they) để tránh lặp từ và tạo mạch văn mượt — đặc trưng band 8.',
      points: [
        'Dùng "this/these/such + danh từ" để nhắc lại ý đã nêu: "this trend", "such measures", "these issues".',
        'Dùng đại từ "it / they / them" thay cho danh từ đã đề cập để tránh lặp.',
        'Dùng từ thay thế/đồng nghĩa: "young people" -> "this generation"; "the government" -> "the authorities".',
        'Tránh lặp lại một danh từ quá nhiều lần liên tiếp.',
        'Referencing rõ ràng làm tăng điểm Coherence & Cohesion mà không cần "thêm linker".',
      ],
      phrases: [
        'This issue...',
        'Such an approach...',
        'These benefits...',
        'The former... the latter...',
        'Doing so...',
      ],
      examples: [
        '✗ \"Pollution is bad. Pollution harms health. Pollution must be reduced.\" (lặp).',
        '✓ \"Pollution is a serious threat; it harms public health and must therefore be reduced.\"',
      ],
    },
  },
  {
    id: 't2_19',
    module: 'task2',
    topic: 't2-cohesion',
    band: 'b8',
    type: 'concept',
    tags: ['paragraphing', 'overuse', 'band7-warning'],
    title: 'CẢNH BÁO band 7: đừng lạm dụng từ nối máy móc',
    ans: {
      summary:
        'Tiêu chí band 7 ghi rõ: "uses a range of cohesive devices... although there may be some over-use". Dùng linker cơ học (Firstly, Secondly, In conclusion ở mọi câu) sẽ KHẸP điểm CC ở 6.',
      points: [
        'Đừng mở MỖI câu bằng một connector — nghe gượng và máy móc.',
        'Tránh chuỗi "Firstly... Secondly... Thirdly..." cứng nhắc; trộn với cohesion tự nhiên (referencing).',
        'Linker phải đúng chức năng: đừng dùng "Moreover" khi thực ra là tương phản.',
        'Band 8 = cohesion "mượt và không gây chú ý" (manages cohesion well), không phụ thuộc vào từ nối lộ liễu.',
        'Phân đoạn tốt (logical paragraphing) cũng là một dạng cohesion — mỗi đoạn một ý.',
      ],
      phrases: [],
      examples: [
        '✗ \"Firstly,... Secondly,... Moreover,... Furthermore,... In addition,...\" (nhồi nhét).',
        '✓ Trộn: \"The main reason is... This, however, creates a further problem because...\"',
      ],
    },
  },

  // ===== t2-samples =====
  {
    id: 't2_20',
    module: 'task2',
    topic: 't2-samples',
    band: 'b6',
    type: 'template',
    tags: ['intro-template', 'opinion-essay'],
    title: 'Template: Introduction cho Opinion essay',
    ans: {
      summary:
        'Khung mở bài điền-vào-chỗ-trống cho dạng Agree/Disagree. Câu 1 paraphrase, câu 2 nêu quan điểm.',
      points: [
        'Thay [topic] bằng chủ đề đã paraphrase, [your position] bằng quan điểm rõ ràng.',
        'Báo trước 2 lý do trong thesis để tăng coherence.',
        'Đừng copy nguyên đề — đổi từ và cấu trúc ở câu 1.',
      ],
      phrases: [
        'It is sometimes argued that...',
        'I completely/largely/partly agree with this view.',
      ],
      sample:
        'It is often argued that [paraphrased topic statement].\nWhile some people believe [opposing idea], I [completely / largely / partly] agree that [your position], primarily because [reason 1] and [reason 2].',
    },
  },
  {
    id: 't2_21',
    module: 'task2',
    topic: 't2-samples',
    band: 'b7',
    type: 'template',
    tags: ['intro-template', 'discussion-essay'],
    title: 'Template: Introduction cho Discussion essay',
    ans: {
      summary:
        'Khung mở bài cho dạng "discuss both views and give your opinion". Nêu rõ sẽ bàn cả hai phía và hé lộ quan điểm.',
      points: [
        'Câu 1 paraphrase chủ đề và nêu có hai luồng ý kiến.',
        'Câu 2 cho biết bài sẽ bàn cả hai và nghiêng về phía nào.',
        'Giữ giọng khách quan ở phần trình bày hai phía.',
      ],
      phrases: [
        'Opinions are divided on whether...',
        'This essay will discuss both perspectives before...',
      ],
      sample:
        'Opinions are divided on the issue of [paraphrased topic].\nWhile some argue that [view A], others maintain that [view B]. This essay will examine both standpoints before explaining why I personally believe that [your side].',
    },
  },
  {
    id: 't2_22',
    module: 'task2',
    topic: 't2-samples',
    band: 'b7',
    type: 'template',
    tags: ['body-template', 'peel'],
    title: 'Template: Body paragraph (PEEL)',
    ans: {
      summary:
        'Khung body theo PEEL điền-vào-chỗ-trống, dùng được cho mọi dạng đề.',
      points: [
        'POINT: topic sentence ngay đầu.',
        'EXPLAIN: giải thích lý do/cơ chế.',
        'EXAMPLE: một ví dụ minh hoạ.',
        'LINK: chốt lại liên hệ với câu hỏi/quan điểm.',
      ],
      phrases: [
        'The primary reason for this is that...',
        'A case in point is...',
      ],
      sample:
        'The first/main reason for this is that [point].\nThis is because [explanation of why], which means that [consequence].\nA clear example of this can be seen in [example].\nTherefore, it is evident that [link back to the question/thesis].',
    },
  },
  {
    id: 't2_23',
    module: 'task2',
    topic: 't2-samples',
    band: 'b7',
    type: 'sample',
    tags: ['opinion-phrases', 'ready-to-use'],
    title: 'Câu mẫu: nêu quan điểm (Opinion phrases)',
    ans: {
      summary:
        'Bộ cụm từ nêu ý kiến cá nhân từ chắc chắn đến dè dặt. Dùng để mở thesis hoặc chốt body.',
      points: [
        'Dùng cụm mạnh (firmly believe) khi hoàn toàn đồng ý.',
        'Dùng cụm dè dặt (tend to think) khi đồng ý một phần.',
        'Tránh lặp "I think" nhiều lần — đa dạng hoá.',
      ],
      phrases: [
        'In my view, ...',
        'I firmly believe that...',
        'It seems to me that...',
        'I am convinced that...',
        'From my perspective, ...',
        'I tend to think that...',
        'There is no doubt in my mind that...',
      ],
      examples: [
        '✓ \"From my perspective, the benefits of bilingual education clearly justify the extra cost.\"',
      ],
    },
  },
  {
    id: 't2_24',
    module: 'task2',
    topic: 't2-samples',
    band: 'b8',
    type: 'sample',
    tags: ['concession-phrases', 'counter-argument'],
    title: 'Câu mẫu: nhượng bộ & phản bác (Concession)',
    ans: {
      summary:
        'Cụm nhượng bộ giúp thừa nhận ý đối lập rồi phản bác — kỹ thuật quan trọng để đạt band 8 ở Coherence và Task Response.',
      points: [
        'Công thức: thừa nhận (admittedly) -> phản bác (however/nonetheless).',
        'Thể hiện tư duy cân bằng, không một chiều.',
        'Dùng ở đầu body hoặc trước khi chốt quan điểm.',
      ],
      phrases: [
        'Admittedly, ... However, ...',
        'It could be argued that..., yet...',
        'While it is true that..., this does not mean that...',
        'Although there is some merit to..., the reality is that...',
        'Granted, ...; nonetheless, ...',
      ],
      examples: [
        '✓ \"Admittedly, technology can be distracting. However, when used wisely, it remains a powerful learning tool.\"',
      ],
    },
  },
  {
    id: 't2_25',
    module: 'task2',
    topic: 't2-samples',
    band: 'b8',
    type: 'sample',
    tags: ['model-paragraph', 'full-example'],
    title: 'Đoạn mẫu hoàn chỉnh (full model body)',
    ans: {
      summary:
        'Một body paragraph mẫu band 8 hoàn chỉnh theo PEEL, có concession, referencing và cohesion tự nhiên. Đề: lợi ích của giao thông công cộng.',
      points: [
        'Để ý cách mở bằng topic sentence rõ ràng.',
        'Để ý concession ("Admittedly...") và referencing ("such investment").',
        'Cohesion tự nhiên thay vì nhồi Firstly/Secondly.',
      ],
      phrases: [],
      sample:
        'The most compelling argument in favour of investing in public transport is that it significantly reduces traffic congestion. When efficient bus and rail networks are available, commuters are far more likely to leave their cars at home, which means fewer vehicles clog the roads during peak hours. A clear example of this can be seen in cities such as Singapore, where a reliable metro system has kept private car use remarkably low. Admittedly, such investment is initially expensive; nonetheless, the long-term gains in reduced congestion and pollution far outweigh these upfront costs. For this reason, prioritising public transport is, in my view, a sound and necessary policy.',
    },
  },
  {
    id: 't2_26',
    module: 'task2',
    topic: 't2-samples',
    band: 'b8',
    type: 'sample',
    tags: ['academic-phrases', 'high-level', 'paraphrase'],
    title: 'Câu mẫu: cụm học thuật cao cấp (High-level phrases)',
    ans: {
      summary:
        'Bộ cụm học thuật nâng cao giúp diễn đạt sang và chính xác — dùng để paraphrase, nêu xu hướng, đưa khuyến nghị.',
      points: [
        'Dùng đúng ngữ cảnh, đừng nhồi cho có.',
        'Các cụm này nâng Lexical Resource nếu dùng tự nhiên.',
        'Kết hợp với referencing để mạch văn mượt.',
      ],
      phrases: [
        'A growing number of people...',
        'There is a widespread belief that...',
        'play a pivotal/crucial role in...',
        'has a profound impact on...',
        'It is widely acknowledged that...',
        'measures should be taken to...',
        'strike a balance between... and...',
        'in the long run / in the long term',
      ],
      examples: [
        '✓ \"Governments should strike a balance between economic growth and environmental protection.\"',
        '✓ \"Access to clean water plays a pivotal role in public health.\"',
      ],
    },
  },
];
