import type { Card } from './types';

export const GRAMMAR_CARDS: Card[] = [
  // ============================================================
  // g-complex : Câu phức & mệnh đề
  // ============================================================
  {
    id: 'g_01',
    module: 'grammar',
    topic: 'g-complex',
    band: 'b6',
    type: 'concept',
    tags: ['simple', 'compound', 'complex', 'sentence variety'],
    title: 'Simple vs Compound vs Complex sentence',
    ans: {
      summary:
        "Band 7+ yêu cầu \"a variety of complex structures\". Bạn cần trộn 3 loại câu: simple (1 mệnh đề độc lập), compound (2 mệnh đề độc lập nối bằng and/but/so), và complex (1 mệnh đề chính + ít nhất 1 mệnh đề phụ). Đừng viết toàn câu đơn ngắn.",
      points: [
        "Simple sentence = 1 independent clause: subject + verb. Dùng để nhấn mạnh ý ngắn gọn.",
        "Compound sentence = independent + (and / but / or / so / yet) + independent.",
        "Complex sentence = independent clause + dependent clause (because, although, when, which...).",
        "Mẹo band 7: phần lớn câu nên là complex, nhưng thỉnh thoảng chèn 1 câu simple để tạo nhịp điệu.",
        "Lỗi thường gặp: viết câu phức quá dài rồi sai dấu phẩy hoặc mất chủ ngữ.",
      ],
      examples: [
        "Simple: Pollution is a serious problem.",
        "Compound: Cars cause pollution, so many cities now restrict them.",
        "Complex: Although electric cars are expensive, they help reduce urban pollution.",
        "✗ Pollution is bad. It harms people. It costs money. (toàn câu đơn rời rạc)",
        "✓ Pollution, which harms both public health and the economy, is a problem that governments can no longer ignore.",
      ],
    },
  },
  {
    id: 'g_02',
    module: 'grammar',
    topic: 'g-complex',
    band: 'b7',
    type: 'structure',
    tags: ['subordinating conjunction', 'contrast', 'although', 'whereas'],
    title: 'Subordinating conjunctions: although / while / whereas',
    ans: {
      summary:
        "Đây là cách nhanh nhất biến câu đơn thành câu phức. although/though = nhượng bộ (concession); while/whereas = đối lập (contrast) giữa hai sự việc song song.",
      points: [
        "FORM (concession): Although + S + V, S + V. (KHÔNG dùng but ở mệnh đề chính).",
        "FORM (contrast): Whereas / While + S + V, S + V. So sánh hai nhóm/sự vật khác nhau.",
        "since / as = vì (lý do); cũng có thể dùng đầu câu, theo sau là dấu phẩy.",
        "Lỗi kinh điển của người Việt: \"Although... but...\" — chỉ được dùng MỘT trong hai.",
      ],
      phrases: [
        "Although [trở ngại], [kết quả tích cực vẫn xảy ra].",
        "Whereas [nhóm A + đặc điểm], [nhóm B + đặc điểm trái ngược].",
        "Since [lý do], it is clear that [kết luận].",
      ],
      examples: [
        "✗ Although technology is convenient, but it can be addictive.",
        "✓ Although technology is convenient, it can be addictive.",
        "✓ Whereas older people prefer face-to-face contact, younger generations rely heavily on social media.",
        "✓ Since the population is ageing rapidly, the government must invest more in healthcare.",
      ],
    },
  },
  {
    id: 'g_03',
    module: 'grammar',
    topic: 'g-complex',
    band: 'b7',
    type: 'structure',
    tags: ['relative clause', 'defining', 'who', 'which', 'that'],
    title: 'Defining relative clauses (who / which / that)',
    ans: {
      summary:
        "Mệnh đề quan hệ xác định cung cấp thông tin THIẾT YẾU để hiểu danh từ, không có dấu phẩy. Đây là công cụ chính để gộp hai câu đơn thành một câu phức gọn gàng.",
      points: [
        "who = người; which = vật/ý tưởng; that = người hoặc vật (informal hơn).",
        "FORM: noun + [who/which/that] + V... (không có dấu phẩy với defining clause).",
        "Có thể lược bỏ đại từ quan hệ khi nó là tân ngữ: the book (that) I read.",
        "Dùng để tránh lặp chủ ngữ và nâng độ phức tạp của câu.",
      ],
      phrases: [
        "Students who [hành động] tend to [kết quả].",
        "A policy which [đặc điểm] is more likely to succeed.",
        "People who grow up in cities often [xu hướng].",
      ],
      examples: [
        "✗ Many students use smartphones. The smartphones distract them in class.",
        "✓ Many students use smartphones that distract them in class.",
        "✓ Governments which invest in renewable energy will benefit in the long term.",
      ],
    },
  },
  {
    id: 'g_04',
    module: 'grammar',
    topic: 'g-complex',
    band: 'b7',
    type: 'structure',
    tags: ['relative clause', 'non-defining', 'comma', 'which'],
    title: 'Non-defining relative clauses (, which ...)',
    ans: {
      summary:
        "Mệnh đề quan hệ KHÔNG xác định thêm thông tin phụ (có thể bỏ đi vẫn hiểu), luôn nằm trong dấu phẩy. Tuyệt vời để bình luận về một ý vừa nêu — kỹ thuật \"which\" toàn câu rất ăn điểm.",
      points: [
        "FORM: noun, who/which + V... , (luôn có dấu phẩy hai đầu).",
        "KHÔNG dùng \"that\" cho non-defining clause.",
        "Mẹo band 7-8: \", which\" có thể chỉ về CẢ MỆNH ĐỀ đứng trước để bình luận.",
        "whose = chỉ sự sở hữu (của ai/của cái gì).",
      ],
      phrases: [
        "[Cả một sự việc], which [hệ quả/bình luận].",
        "X, whose [đặc điểm sở hữu], [động từ].",
        "..., which in turn leads to [kết quả tiếp theo].",
      ],
      examples: [
        "✓ The government raised taxes on fuel, which discouraged unnecessary car use.",
        "✓ Online learning, which became widespread during the pandemic, is now a permanent option.",
        "✓ Many cities suffer from air pollution, whose effects on public health are severe.",
      ],
    },
  },
  {
    id: 'g_05',
    module: 'grammar',
    topic: 'g-complex',
    band: 'b8',
    type: 'structure',
    tags: ['reduced relative clause', 'participle', 'conciseness'],
    title: 'Reduced relative clauses (rút gọn mệnh đề quan hệ)',
    ans: {
      summary:
        "Rút gọn mệnh đề quan hệ giúp câu ngắn gọn và \"academic\" hơn. Bỏ who/which + be, giữ lại V-ing (chủ động) hoặc V3/ed (bị động).",
      points: [
        "Active: ...the people who live in cities -> ...the people living in cities.",
        "Passive: ...the policy which was introduced last year -> ...the policy introduced last year.",
        "Chỉ rút gọn được khi đại từ quan hệ là CHỦ NGỮ của mệnh đề.",
        "Hiệu quả ở mặt cohesion: câu ngắn nhưng vẫn giàu thông tin.",
      ],
      phrases: [
        "People living in [nơi chốn] tend to [xu hướng].",
        "Measures taken by the government [động từ + kết quả].",
        "Factors contributing to [vấn đề] include ...",
      ],
      examples: [
        "✗ The students who are studying abroad face many challenges.",
        "✓ Students studying abroad face many challenges.",
        "✓ The report published by the WHO highlights the risks of air pollution.",
      ],
    },
  },

  // ============================================================
  // g-conditional : Câu điều kiện & giả định
  // ============================================================
  {
    id: 'g_06',
    module: 'grammar',
    topic: 'g-conditional',
    band: 'b6',
    type: 'concept',
    tags: ['conditional', 'overview', 'if'],
    title: 'Tổng quan 3 loại câu điều kiện',
    ans: {
      summary:
        "Câu điều kiện rất hữu ích để bàn về nguyên nhân-hệ quả và giải pháp giả định trong Task 2. Nắm chắc form là tránh được lỗi thì (tense) chết người.",
      points: [
        "1st (có thật, tương lai): If + S + V(present), S + will + V.",
        "2nd (giả định hiện tại/không thật): If + S + V(past), S + would + V.",
        "3rd (giả định quá khứ): If + S + had + V3, S + would have + V3.",
        "Mệnh đề if đứng trước thì có dấu phẩy; đứng sau thì không.",
      ],
      examples: [
        "1st: If governments invest in public transport, traffic will decrease.",
        "2nd: If education were free, more people would attend university.",
        "3rd: If the city had built more roads, the congestion would not have become so severe.",
      ],
    },
  },
  {
    id: 'g_07',
    module: 'grammar',
    topic: 'g-conditional',
    band: 'b7',
    type: 'structure',
    tags: ['second conditional', 'hypothetical solution', 'task2'],
    title: '2nd conditional để bàn giải pháp giả định (Task 2)',
    ans: {
      summary:
        "Câu điều kiện loại 2 là vũ khí mạnh để đề xuất và đánh giá giải pháp trong Task 2: \"Nếu chính phủ làm X, thì Y sẽ xảy ra\". Nó thể hiện tư duy phản biện.",
      points: [
        "FORM: If + S + V(past simple), S + would / could / might + V(bare).",
        "Dùng \"were\" cho mọi ngôi trong văn trang trọng: If I were..., If the government were...",
        "would = kết quả chắc chắn; could = khả năng; might = ít chắc chắn hơn.",
        "Đặt ở phần solution hoặc opinion để câu sắc bén hơn.",
      ],
      phrases: [
        "If the government invested in [X], it would [kết quả tích cực].",
        "If schools introduced [X], students could [lợi ích].",
        "Were this policy implemented, it might [hệ quả].",
      ],
      examples: [
        "✗ If the government will ban plastic bags, pollution would decrease.",
        "✓ If the government banned plastic bags, pollution would decrease significantly.",
        "✓ If companies offered remote work, traffic congestion in city centres could be eased.",
      ],
    },
  },
  {
    id: 'g_08',
    module: 'grammar',
    topic: 'g-conditional',
    band: 'b8',
    type: 'structure',
    tags: ['mixed conditional', 'were to', 'inversion'],
    title: 'Mixed conditional & "Were to" (nâng cao)',
    ans: {
      summary:
        "Mixed conditional nối điều kiện quá khứ với kết quả hiện tại (hoặc ngược lại). \"Were to\" và đảo ngữ điều kiện là dấu hiệu band 8 rõ rệt.",
      points: [
        "Mixed (past condition -> present result): If + S + had + V3, S + would + V(now).",
        "FORM trang trọng: Were S to + V, S + would + V. (giả định ít khả năng xảy ra).",
        "Inversion bỏ \"if\": Had + S + V3, S + would have + V3.",
        "Dùng tiết kiệm — 1 câu loại này đủ gây ấn tượng, đừng lạm dụng.",
      ],
      phrases: [
        "If we had acted earlier, the situation would be far less serious today.",
        "Were the government to invest more, the problem could be solved.",
        "Had this issue been addressed sooner, the crisis would not have escalated.",
      ],
      examples: [
        "✓ If countries had reduced emissions decades ago, the climate would be more stable now.",
        "✓ Were stricter laws to be introduced, road accidents would fall sharply.",
        "✓ Had policymakers listened to experts, the damage would have been avoided.",
      ],
    },
  },
  {
    id: 'g_09',
    module: 'grammar',
    topic: 'g-conditional',
    band: 'b7',
    type: 'structure',
    tags: ['unless', 'provided that', 'as long as'],
    title: 'Conditional connectors: unless / provided that / as long as',
    ans: {
      summary:
        "Thay vì luôn dùng \"if\", hãy đa dạng hoá với unless (= if not), provided that / as long as (= miễn là). Điều này nâng điểm Grammatical Range.",
      points: [
        "unless = if ... not. FORM: Unless + S + V(present), S + will + V.",
        "provided that / providing that = chỉ với điều kiện rằng (trang trọng).",
        "as long as / so long as = miễn là.",
        "Không kết hợp unless với \"not\" (tránh phủ định kép).",
      ],
      phrases: [
        "Unless governments act now, the problem will worsen.",
        "Provided that funding is available, the project can proceed.",
        "As long as people are educated about recycling, waste can be reduced.",
      ],
      examples: [
        "✗ Unless the government does not act, pollution will increase.",
        "✓ Unless the government acts, pollution will increase.",
        "✓ Tourism benefits the economy, provided that it is managed sustainably.",
      ],
    },
  },

  // ============================================================
  // g-passive : Bị động & danh từ hóa
  // ============================================================
  {
    id: 'g_10',
    module: 'grammar',
    topic: 'g-passive',
    band: 'b6',
    type: 'concept',
    tags: ['passive', 'when to use', 'agent'],
    title: 'Khi nào và vì sao dùng bị động (passive voice)',
    ans: {
      summary:
        "Bị động giúp văn trang trọng, khách quan và tập trung vào hành động/kết quả thay vì người thực hiện. Rất quan trọng trong Task 1 (mô tả quy trình) và câu academic Task 2.",
      points: [
        "FORM: be (đúng thì) + V3/ed. The data was collected. / Taxes are increased.",
        "Dùng khi tác nhân không quan trọng hoặc đã rõ: \"Crime should be punished.\"",
        "Dùng để khách quan hoá: \"It is widely believed that...\"",
        "ĐỪNG lạm dụng — câu chủ động vẫn cần để văn tự nhiên.",
      ],
      phrases: [
        "It is widely believed that [quan điểm chung].",
        "Measures should be taken to [mục tiêu].",
        "[Vấn đề] can be addressed by [giải pháp].",
      ],
      examples: [
        "Active: The government should reduce taxes.",
        "Passive: Taxes should be reduced (by the government).",
        "✓ It is often argued that technology has made people less sociable.",
      ],
    },
  },
  {
    id: 'g_11',
    module: 'grammar',
    topic: 'g-passive',
    band: 'b7',
    type: 'structure',
    tags: ['passive', 'task1', 'process'],
    title: 'Bị động trong mô tả quy trình (Task 1 process)',
    ans: {
      summary:
        "Khi mô tả một quy trình (process) ở Task 1, người thực hiện thường không quan trọng, nên bị động là dạng chủ đạo. Kết hợp với từ nối trình tự để mượt mà.",
      points: [
        "Mỗi bước: The [material] is + V3. Sau đó: ...is then + V3...",
        "Từ nối trình tự: First, Next, After that, Subsequently, Finally.",
        "Dùng \"Once X has been done, Y is...\" để nối hai bước.",
        "Giữ thì present simple passive cho quy trình tổng quát.",
      ],
      phrases: [
        "First, the [raw material] is collected and transported to the factory.",
        "The mixture is then heated until it [kết quả].",
        "Once the product has been packaged, it is distributed to retailers.",
      ],
      examples: [
        "✗ In the first stage, workers collect the clay and they put it in machine.",
        "✓ In the first stage, the clay is collected and placed in a machine.",
        "✓ The bottles are washed, filled with liquid and finally sealed before being shipped.",
      ],
    },
  },
  {
    id: 'g_12',
    module: 'grammar',
    topic: 'g-passive',
    band: 'b8',
    type: 'structure',
    tags: ['nominalisation', 'academic', 'noun phrase'],
    title: 'Nominalisation (danh từ hoá) để nghe academic',
    ans: {
      summary:
        "Danh từ hoá biến động từ/tính từ thành danh từ, làm câu cô đọng và mang phong cách học thuật. Đây là dấu hiệu band 8 mà ít thí sinh dùng tốt.",
      points: [
        "Verb -> noun: invest -> investment; reduce -> reduction; pollute -> pollution.",
        "\"The government invested heavily\" -> \"Government investment was substantial.\"",
        "Biến mệnh đề thành cụm danh từ làm chủ ngữ: \"The fact that crime is rising\" -> \"The rise in crime\".",
        "Đừng nhồi quá nhiều danh từ liền nhau khiến câu khó đọc.",
      ],
      phrases: [
        "The introduction of [chính sách] led to [kết quả].",
        "A significant reduction in [X] was observed.",
        "The rapid growth of [hiện tượng] has raised concerns about [hệ quả].",
      ],
      examples: [
        "✗ Because the government invested in railways, people travel more.",
        "✓ Government investment in railways has boosted travel.",
        "✓ The widespread adoption of renewable energy has reduced carbon emissions.",
      ],
    },
  },

  // ============================================================
  // g-advanced : Cấu trúc nâng cao để gây ấn tượng
  // ============================================================
  {
    id: 'g_13',
    module: 'grammar',
    topic: 'g-advanced',
    band: 'b8',
    type: 'structure',
    tags: ['cleft sentence', 'emphasis', 'it is that'],
    title: 'Cleft sentences: It is ... that / What ... is',
    ans: {
      summary:
        "Câu chẻ (cleft) tách câu để nhấn mạnh một thành phần. Cực kỳ hiệu quả để làm nổi bật ý chính trong opinion hoặc conclusion.",
      points: [
        "It-cleft: It is + [phần nhấn mạnh] + that + [phần còn lại].",
        "What-cleft: What + S + V + is/are + [phần nhấn mạnh].",
        "Dùng để hướng sự chú ý vào nguyên nhân, giải pháp hay tác nhân then chốt.",
        "Một câu cleft trong cả bài là đủ để ghi điểm — không lạm dụng.",
      ],
      phrases: [
        "It is [yếu tố] that ultimately determines [kết quả].",
        "What governments should prioritise is [giải pháp].",
        "It is not [X] but [Y] that lies at the heart of the problem.",
      ],
      examples: [
        "Plain: Education reduces crime.",
        "✓ It is education, rather than punishment, that truly reduces crime.",
        "✓ What many young people lack today is the ability to focus for long periods.",
      ],
    },
  },
  {
    id: 'g_14',
    module: 'grammar',
    topic: 'g-advanced',
    band: 'b8',
    type: 'structure',
    tags: ['inversion', 'not only', 'rarely', 'emphasis'],
    title: 'Inversion: Not only ... / Rarely ... / Never ...',
    ans: {
      summary:
        "Đảo ngữ đưa trạng từ phủ định lên đầu câu rồi đảo trợ động từ ra trước chủ ngữ. Đây là cấu trúc \"khoe\" ngữ pháp band 8, nhưng phải đúng form tuyệt đối.",
      points: [
        "FORM: Negative adverb + auxiliary + S + V. (giống câu hỏi).",
        "Not only + aux + S + V, but S + also + V.",
        "Rarely / Seldom / Never + aux + S + V...",
        "No sooner ... than ...; Hardly ... when ...",
        "Sai form đảo ngữ còn tệ hơn không dùng — kiểm tra kỹ.",
      ],
      phrases: [
        "Not only does social media spread news quickly, but it also fuels misinformation.",
        "Rarely do governments solve such problems without public support.",
        "Never before has technology changed our lives so rapidly.",
      ],
      examples: [
        "✗ Not only social media spreads news, but it also spreads lies.",
        "✓ Not only does social media spread news, but it also spreads lies.",
        "✓ Seldom do we consider the long-term effects of our consumption habits.",
      ],
    },
  },
  {
    id: 'g_15',
    module: 'grammar',
    topic: 'g-advanced',
    band: 'b8',
    type: 'structure',
    tags: ['fronting', 'participle clause', 'cohesion'],
    title: 'Fronting & participle clauses (đưa thành phần lên đầu)',
    ans: {
      summary:
        "Fronting đưa một cụm (trạng ngữ, participle) lên đầu câu để tạo nhịp điệu và liên kết. Participle clause (V-ing / V3 đầu câu) thể hiện quan hệ nguyên nhân hoặc thời gian gọn gàng.",
      points: [
        "Present participle (chủ động): Having + V3, S + V... / V-ing, S + V...",
        "Past participle (bị động): Faced with X, S + V...",
        "Chủ ngữ của participle clause PHẢI cùng chủ ngữ mệnh đề chính (tránh dangling modifier).",
        "Fronting trạng ngữ: \"In recent years, ...\", \"By investing in education, ...\"",
      ],
      phrases: [
        "Having considered both views, I believe that [quan điểm].",
        "Faced with rising costs, many families [hành động].",
        "By improving public transport, cities can [kết quả].",
      ],
      examples: [
        "✗ Walking to school, the rain started to fall. (dangling: ai đi bộ?)",
        "✓ Walking to school, the children were caught in the rain.",
        "✓ Driven by economic pressure, more graduates are choosing to work abroad.",
      ],
    },
  },
  {
    id: 'g_16',
    module: 'grammar',
    topic: 'g-advanced',
    band: 'b7',
    type: 'structure',
    tags: ['not only but also', 'correlative', 'parallelism'],
    title: '"Not only ... but also" & cấu trúc song song (parallelism)',
    ans: {
      summary:
        "Các cặp tương liên (correlative conjunctions) như not only...but also, both...and, either...or đòi hỏi hai vế phải SONG SONG về dạng từ. Đây là điểm dễ mất band do thiếu cân đối.",
      points: [
        "not only + X but also + Y (X và Y cùng loại: verb-verb, noun-noun).",
        "both A and B; either A or B; neither A nor B.",
        "Parallelism: cùng cấu trúc ngữ pháp ở các vế liệt kê.",
        "Khi \"not only\" đứng đầu câu, phải đảo ngữ (xem thẻ inversion).",
      ],
      phrases: [
        "X is not only [adj] but also [adj].",
        "This policy would benefit both [nhóm A] and [nhóm B].",
        "Education improves [noun], boosts [noun] and reduces [noun].",
      ],
      examples: [
        "✗ Exercise not only improves health but also it makes you happy.",
        "✓ Exercise not only improves health but also boosts happiness.",
        "✓ The plan would create jobs, reduce poverty and strengthen the economy. (song song)",
      ],
    },
  },

  // ============================================================
  // g-errors : Lỗi ngữ pháp thường gặp của người Việt
  // ============================================================
  {
    id: 'g_17',
    module: 'grammar',
    topic: 'g-errors',
    band: 'b6',
    type: 'structure',
    tags: ['subject-verb agreement', 'common error'],
    title: 'Lỗi: Subject-verb agreement (hoà hợp chủ ngữ - động từ)',
    ans: {
      summary:
        "Người Việt hay quên thêm \"s\" cho động từ ngôi thứ ba số ít, hoặc bị danh từ đứng giữa làm rối. RULE: động từ chia theo CHỦ NGỮ thật, không theo danh từ gần nhất.",
      points: [
        "He/She/It + V-s. They/We + V (không s).",
        "Cụm \"of\" không đổi số: The number of cars IS rising (chủ ngữ là number).",
        "each / every / one of + danh từ số nhiều -> động từ SỐ ÍT.",
        "Danh từ không đếm được (information, advice) -> động từ số ít.",
      ],
      examples: [
        "✗ The government have to act quickly. (trong văn US/academic chọn số ít)",
        "✓ The government has to act quickly.",
        "✗ One of the students are absent.",
        "✓ One of the students is absent.",
        "✗ The number of accidents have increased.",
        "✓ The number of accidents has increased.",
      ],
    },
  },
  {
    id: 'g_18',
    module: 'grammar',
    topic: 'g-errors',
    band: 'b6',
    type: 'structure',
    tags: ['articles', 'a', 'an', 'the', 'common error'],
    title: 'Lỗi: Mạo từ a / an / the',
    ans: {
      summary:
        "Tiếng Việt không có mạo từ nên đây là lỗi cực phổ biến. RULE ngắn: dùng a/an cho danh từ đếm được số ít lần đầu nhắc; the khi cụ thể/đã biết; không mạo từ khi nói chung số nhiều/không đếm được.",
      points: [
        "a + phụ âm (a university - đọc /j/), an + nguyên âm (an hour - h câm).",
        "the = đã xác định / duy nhất (the government, the environment, the Internet).",
        "Nói chung chung: danh từ số nhiều / không đếm được KHÔNG mạo từ.",
        "Danh từ đếm được số ít KHÔNG được đứng trần (phải có a/the/this...).",
      ],
      examples: [
        "✗ Government should protect environment.",
        "✓ The government should protect the environment.",
        "✗ Children should go to the school. (nói chung -> bỏ the)",
        "✓ Children should go to school.",
        "✗ He is engineer.",
        "✓ He is an engineer.",
      ],
    },
  },
  {
    id: 'g_19',
    module: 'grammar',
    topic: 'g-errors',
    band: 'b6',
    type: 'structure',
    tags: ['countable', 'uncountable', 'plural', 'common error'],
    title: 'Lỗi: Danh từ đếm được / không đếm được & số nhiều',
    ans: {
      summary:
        "Nhiều danh từ tiếng Anh không đếm được dù tiếng Việt coi là số nhiều: information, advice, knowledge, equipment, research, traffic. Không thêm \"s\", không dùng \"a\".",
      points: [
        "Uncountable phổ biến: information, advice, knowledge, equipment, furniture, research, traffic, money, news.",
        "Dùng \"much / a great deal of / a piece of\" cho uncountable; \"many / a number of\" cho countable.",
        "people đã là số nhiều (không có \"peoples\" theo nghĩa người).",
        "Đừng quên \"s\" ở danh từ đếm được số nhiều.",
      ],
      examples: [
        "✗ I have many informations and advices.",
        "✓ I have a lot of information and advice.",
        "✗ There are much benefit from exercise.",
        "✓ There are many benefits from exercise.",
        "✗ The research show that...",
        "✓ The research shows that... / Studies show that...",
      ],
    },
  },
  {
    id: 'g_20',
    module: 'grammar',
    topic: 'g-errors',
    band: 'b7',
    type: 'structure',
    tags: ['run-on', 'comma splice', 'punctuation', 'common error'],
    title: 'Lỗi: Run-on sentences & comma splice',
    ans: {
      summary:
        "Comma splice = nối hai mệnh đề độc lập chỉ bằng dấu phẩy. Run-on = dính hai câu không có dấu/từ nối. Cả hai làm tụt điểm Grammar. RULE: hai mệnh đề độc lập cần dấu chấm, dấu chấm phẩy, hoặc liên từ.",
      points: [
        "Sửa 1: tách thành hai câu bằng dấu chấm.",
        "Sửa 2: dùng dấu chấm phẩy ( ; ) nếu hai ý liên quan chặt.",
        "Sửa 3: thêm liên từ (and / but / so) hoặc biến một vế thành mệnh đề phụ.",
        "Trạng từ nối (however, therefore) KHÔNG nối được hai mệnh đề chỉ bằng phẩy.",
      ],
      examples: [
        "✗ Pollution is rising, the government must act. (comma splice)",
        "✓ Pollution is rising, so the government must act.",
        "✓ Pollution is rising; the government must act.",
        "✗ Many people drive cars this causes traffic. (run-on)",
        "✓ Many people drive cars, which causes traffic.",
        "✗ Cars cause pollution, however, people still use them.",
        "✓ Cars cause pollution; however, people still use them.",
      ],
    },
  },
  {
    id: 'g_21',
    module: 'grammar',
    topic: 'g-errors',
    band: 'b7',
    type: 'structure',
    tags: ['tense consistency', 'common error'],
    title: 'Lỗi: Tense consistency (nhất quán thì)',
    ans: {
      summary:
        "Đừng nhảy thì vô cớ. Task 2 chủ yếu dùng present simple cho ý kiến/sự thật chung; chỉ đổi thì khi mốc thời gian thực sự đổi. Task 1 mô tả số liệu quá khứ thì dùng past.",
      points: [
        "Task 2 (quan điểm, sự thật chung): present simple là thì chủ đạo.",
        "Past perfect chỉ dùng khi cần thể hiện hành động xảy ra TRƯỚC một mốc quá khứ.",
        "Trong cùng một ý, giữ nguyên một thì trừ khi mốc thời gian đổi.",
        "Câu điều kiện: chú ý phối hợp thì giữa hai mệnh đề (xem thẻ conditional).",
      ],
      examples: [
        "✗ Technology improves our lives and made communication faster.",
        "✓ Technology improves our lives and makes communication faster.",
        "✗ In the past, people walked a lot, so they are healthier.",
        "✓ In the past, people walked a lot, so they were healthier.",
      ],
    },
  },
  {
    id: 'g_22',
    module: 'grammar',
    topic: 'g-errors',
    band: 'b7',
    type: 'structure',
    tags: ['word form', 'part of speech', 'common error'],
    title: 'Lỗi: Word form (sai loại từ)',
    ans: {
      summary:
        "Dùng đúng nghĩa nhưng sai dạng từ (noun/verb/adjective/adverb) là lỗi rất hay gặp. RULE: nhận diện vị trí trong câu để chọn dạng từ phù hợp.",
      points: [
        "Sau động từ thường cần trạng từ (adverb): work effectively.",
        "Trước danh từ cần tính từ (adjective): a significant increase.",
        "Sau giới từ cần danh từ hoặc V-ing: good at writing.",
        "Học từ theo bộ: pollute (v) - pollution (n) - polluted (adj).",
      ],
      examples: [
        "✗ This problem affects the society serious.",
        "✓ This problem affects society seriously.",
        "✗ The increasing of crime worries people.",
        "✓ The increase in crime worries people. / Increasing crime worries people.",
        "✗ It is depend on the situation.",
        "✓ It depends on the situation.",
      ],
    },
  },
  {
    id: 'g_23',
    module: 'grammar',
    topic: 'g-errors',
    band: 'b7',
    type: 'structure',
    tags: ['preposition', 'collocation', 'common error'],
    title: 'Lỗi: Giới từ đi kèm (preposition collocations)',
    ans: {
      summary:
        "Giới từ sai làm câu thiếu tự nhiên. Vì không có quy tắc tuyệt đối, hãy học giới từ theo collocation cố định thường gặp trong IELTS.",
      points: [
        "increase / decrease IN something; an increase OF 10% (con số).",
        "depend ON; consist OF; result IN (gây ra); result FROM (do bởi).",
        "responsible FOR; aware OF; benefit FROM; lead TO.",
        "concern ABOUT/OVER; an effect ON; the impact ON.",
      ],
      examples: [
        "✗ There is an increase of crime in cities.",
        "✓ There is an increase in crime in cities.",
        "✗ Technology has a big effect to children.",
        "✓ Technology has a big effect on children.",
        "✗ It depends to many factors.",
        "✓ It depends on many factors.",
      ],
    },
  },

  // ============================================================
  // SAMPLE cards (mini-paragraphs of upgraded complex sentences)
  // ============================================================
  {
    id: 'g_24',
    module: 'grammar',
    topic: 'g-complex',
    band: 'b8',
    type: 'sample',
    tags: ['sample', 'paragraph', 'sentence variety', 'before after'],
    title: 'Sample: Nâng cấp một đoạn từ câu đơn lên câu phức',
    ans: {
      summary:
        "So sánh đoạn \"trước\" (toàn câu đơn rời rạc, band thấp) và đoạn \"sau\" (kết hợp relative clause, although, participle, which-comment). Đây là cách biến ý thường thành đoạn band 8.",
      points: [
        "Gộp câu đơn liên quan bằng relative clause hoặc participle.",
        "Mở đầu bằng although / while để tạo nhượng bộ.",
        "Dùng \", which\" để bình luận về cả ý vừa nêu.",
        "Giữ một câu ngắn để nhấn mạnh kết luận.",
      ],
      sample:
        "BEFORE (band ~6 - simple sentences):\nMany students use the Internet. The Internet is useful. But it can be distracting. They waste time on social media. Their grades go down.\n\nAFTER (band ~8 - varied complex sentences):\nAlthough the Internet is an invaluable learning resource, it can also be highly distracting for students. Many young people, who increasingly rely on social media, spend hours scrolling instead of studying, which often causes their academic performance to decline. Used wisely, however, the same technology can transform the way they learn.",
    },
  },
  {
    id: 'g_25',
    module: 'grammar',
    topic: 'g-advanced',
    band: 'b8',
    type: 'sample',
    tags: ['sample', 'paragraph', 'cleft', 'inversion', 'conditional'],
    title: 'Sample: Đoạn opinion dùng cleft, inversion & conditional',
    ans: {
      summary:
        "Đoạn mẫu cho phần opinion/solution của Task 2, lồng ghép cleft sentence, inversion, second conditional và nominalisation một cách tự nhiên. Tham khảo cách phân bổ cấu trúc nâng cao mà không nhồi nhét.",
      points: [
        "Mở bằng cleft (What ... is) để nêu giải pháp cốt lõi.",
        "Chèn 1 câu inversion (Not only ... but also) để mở rộng lợi ích.",
        "Dùng 2nd conditional để hình dung kết quả giả định.",
        "Kết bằng nominalisation cho giọng văn academic.",
      ],
      sample:
        "What governments should prioritise is not punishment but education, since prevention is far more effective than cure. Not only would investment in schools reduce crime, but it would also create a more skilled workforce. If young people were given better opportunities, far fewer of them would turn to illegal activities. Ultimately, it is long-term investment in education, rather than short-term policing, that offers the most sustainable solution to rising crime.",
    },
  },
];
