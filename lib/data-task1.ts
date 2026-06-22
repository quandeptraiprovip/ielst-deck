import type { Card } from './types';

export const TASK1_CARDS: Card[] = [
  {
    id: 't1_01',
    module: 'task1',
    topic: 't1-overview',
    band: 'b6',
    type: 'structure',
    tags: ['structure', 'overview', 'paragraphs'],
    title: "Cấu trúc 4 phần của Academic Task 1",
    ans: {
      summary: "Một bài Task 1 chuẩn band 7+ luôn có 4 đoạn: Introduction (paraphrase đề), Overview (xu hướng/đặc điểm chính), và 2 đoạn Detail (số liệu cụ thể). Bố cục rõ ràng quyết định điểm Coherence & Cohesion.",
      points: [
        "Đoạn 1 - Introduction: paraphrase lại câu đề bài, KHÔNG copy nguyên văn.",
        "Đoạn 2 - Overview: nêu 2-4 đặc điểm nổi bật nhất, KHÔNG có số liệu chi tiết.",
        "Đoạn 3 & 4 - Detail: nhóm số liệu một cách logic và mô tả cụ thể, có dẫn chứng.",
        "Viết tối thiểu 150 từ trong khoảng 20 phút; KHÔNG kết luận, KHÔNG ý kiến cá nhân.",
        "Overview là yếu tố bắt buộc để đạt band 7 ở tiêu chí Task Achievement."
      ],
      phrases: [
        "The chart/graph/table shows...",
        "Overall, it is clear that...",
        "Looking at the details, ...",
        "In terms of..., ..."
      ]
    }
  },
  {
    id: 't1_02',
    module: 'task1',
    topic: 't1-overview',
    band: 'b7',
    type: 'concept',
    tags: ['overview', 'key-features', 'band7'],
    title: "Overview là gì và tại sao bắt buộc cho band 7+",
    ans: {
      summary: "Overview là đoạn tóm tắt các đặc điểm CHÍNH (key features) mà không đi vào số liệu. Giám khảo tìm overview đầu tiên; thiếu nó, bài tối đa chỉ band 5 ở Task Achievement.",
      points: [
        "Overview = bức tranh tổng thể: cái gì cao nhất/thấp nhất, xu hướng tăng hay giảm chung.",
        "Chọn 2-4 đặc điểm nổi bật, tránh liệt kê mọi thứ.",
        "Bắt đầu bằng tín hiệu rõ ràng: \"Overall\" hoặc \"In general\".",
        "TUYỆT ĐỐI không đưa con số cụ thể vào overview.",
        "Với biểu đồ theo thời gian: nêu xu hướng chung. Với so sánh: nêu cái lớn nhất/nhỏ nhất."
      ],
      phrases: [
        "Overall, it is clear that...",
        "In general, the most striking feature is...",
        "It is noticeable that...",
        "Broadly speaking, ..."
      ],
      examples: [
        "✓ Overall, sales of electric cars rose steadily, while petrol cars saw the opposite trend.",
        "✗ Overall, electric car sales reached 4.2 million in 2020. (sai: có số liệu chi tiết)"
      ]
    }
  },
  {
    id: 't1_03',
    module: 'task1',
    topic: 't1-overview',
    band: 'b7',
    type: 'sample',
    tags: ['overview', 'sample', 'model'],
    title: "Model: Cách viết một đoạn Overview hoàn chỉnh",
    ans: {
      summary: "Một overview tốt gói gọn xu hướng chính trong 1-2 câu, dùng từ tín hiệu và đối lập (while/whereas). Dưới đây là các mẫu câu overview cho từng dạng đề.",
      points: [
        "Mẫu cho line graph: nêu xu hướng tăng/giảm chung và mục cao/thấp nhất.",
        "Mẫu cho pie/bar so sánh: nêu hạng mục chiếm tỷ trọng lớn nhất và nhỏ nhất.",
        "Mẫu cho process: nêu số giai đoạn và điểm bắt đầu/kết thúc."
      ],
      phrases: [
        "Overall, ... whereas ...",
        "It is clear that the largest proportion belonged to...",
        "the process consists of X main stages, beginning with... and ending with..."
      ],
      sample: "Overview cho line graph:\nOverall, it is clear that the consumption of all three fuels increased over the period, with oil remaining the most widely used source throughout, whereas renewable energy, despite starting from the lowest point, grew the most rapidly.\n\nOverview cho pie chart:\nIn general, spending on housing accounted for the largest share of household budgets, while expenditure on leisure made up the smallest proportion in both years surveyed.\n\nOverview cho process:\nOverall, the process of making cement consists of five main stages, beginning with the crushing of raw materials and ending with the packaging of the final product."
    }
  },
  {
    id: 't1_04',
    module: 'task1',
    topic: 't1-overview',
    band: 'b6',
    type: 'template',
    tags: ['introduction', 'paraphrase'],
    title: "Paraphrase câu Introduction",
    ans: {
      summary: "Câu mở bài phải paraphrase đề bài: đổi từ đồng nghĩa, đổi cấu trúc, nhưng giữ nguyên ý nghĩa và số liệu thời gian. Không bao giờ chép y nguyên đề.",
      points: [
        "Đổi động từ: shows → illustrates / depicts / presents / gives information about.",
        "Đổi danh từ: the graph → the line graph; the number of → the figures for.",
        "Đảo cấu trúc câu nhưng giữ nguyên mốc thời gian và đơn vị.",
        "Giữ chính xác khoảng thời gian (between 2000 and 2010 / over a decade)."
      ],
      phrases: [
        "The chart illustrates...",
        "The graph provides information about...",
        "The table compares...",
        "The diagram depicts the process of...",
        "...over a period of X years / between X and Y"
      ],
      examples: [
        "Đề: The graph shows the number of tourists visiting a museum from 2005 to 2015.",
        "✓ The line graph illustrates how many people visited a particular museum over a ten-year period from 2005 to 2015."
      ]
    }
  },
  {
    id: 't1_05',
    module: 'task1',
    topic: 't1-overview',
    band: 'b7',
    type: 'concept',
    tags: ['mistakes', 'what-not-to-do'],
    title: "Những điều KHÔNG được làm trong Task 1",
    ans: {
      summary: "Task 1 là báo cáo khách quan. Các lỗi phổ biến nhất khiến mất điểm: đưa ý kiến cá nhân, suy đoán nguyên nhân, đưa số liệu vào overview, và copy đề bài.",
      points: [
        "KHÔNG nêu ý kiến cá nhân: tránh \"I think\", \"in my opinion\".",
        "KHÔNG suy đoán nguyên nhân/lý do (vì đề không cho thông tin đó).",
        "KHÔNG có kết luận (conclusion) như Task 2.",
        "KHÔNG đưa số liệu chi tiết vào overview.",
        "KHÔNG mô tả mọi con số - chọn lọc đặc điểm nổi bật để nhóm lại."
      ],
      phrases: [
        "Avoid: \"I think...\", \"In my opinion...\", \"This is because...\"",
        "Use objective reporting language instead."
      ],
      examples: [
        "✗ I think the rise happened because of better marketing. (sai: suy đoán + ý kiến)",
        "✓ The figure rose sharply over the period. (đúng: chỉ mô tả dữ liệu)"
      ]
    }
  },
  {
    id: 't1_06',
    module: 'task1',
    topic: 't1-trends',
    band: 'b6',
    type: 'vocab',
    tags: ['verbs', 'increase', 'decrease', 'nouns'],
    title: "Từ vựng cốt lõi: động từ & danh từ tăng/giảm",
    ans: {
      summary: "Để mô tả xu hướng cần cả động từ VÀ danh từ. Học theo cặp đồng nghĩa giúp tránh lặp từ và nâng band Lexical Resource.",
      points: [
        "TĂNG (verb): rise, increase, grow, climb, go up, surge, rocket, soar.",
        "TĂNG (noun): a rise, an increase, growth, an upward trend, a surge.",
        "GIẢM (verb): fall, decrease, decline, drop, dip, plummet, plunge.",
        "GIẢM (noun): a fall, a decrease, a decline, a drop, a downward trend.",
        "Surge/rocket/soar và plummet/plunge dùng cho thay đổi RẤT mạnh."
      ],
      phrases: [
        "there was a sharp rise in...",
        "the figure climbed to...",
        "numbers plummeted to...",
        "the trend showed a steady increase / a gradual decline"
      ],
      examples: [
        "✓ Sales increased significantly. = There was a significant increase in sales.",
        "✓ The population plummeted. (giảm mạnh, đột ngột)"
      ]
    }
  },
  {
    id: 't1_07',
    module: 'task1',
    topic: 't1-trends',
    band: 'b7',
    type: 'vocab',
    tags: ['adverbs', 'adjectives', 'degree'],
    title: "Trạng từ & tính từ chỉ mức độ thay đổi",
    ans: {
      summary: "Mức độ thay đổi được thể hiện bằng trạng từ (đi với động từ) hoặc tính từ (đi với danh từ). Đây là chìa khóa để mô tả chính xác và đa dạng.",
      points: [
        "MẠNH: sharply / dramatically / significantly / steeply / rapidly.",
        "MẠNH (adj): a sharp / dramatic / significant / steep / rapid (rise).",
        "VỪA: steadily / gradually / moderately (adj: a steady / gradual rise).",
        "NHẸ: slightly / marginally / gently (adj: a slight / marginal rise).",
        "Quy tắc: adverb đi sau động từ (rose sharply); adjective đi trước danh từ (a sharp rise)."
      ],
      phrases: [
        "rose sharply / fell dramatically / grew steadily / declined slightly",
        "a sharp rise / a dramatic fall / a steady increase / a slight drop"
      ],
      examples: [
        "✓ Prices rose sharply. = There was a sharp rise in prices.",
        "✗ Prices rose sharp. / ✗ There was a sharply rise. (sai loại từ)"
      ]
    }
  },
  {
    id: 't1_08',
    module: 'task1',
    topic: 't1-trends',
    band: 'b7',
    type: 'structure',
    tags: ['grammar', 'prepositions', 'rise-to', 'rise-by'],
    title: "Ngữ pháp số liệu: rise TO vs rise BY vs at",
    ans: {
      summary: "Sai giới từ với số liệu là lỗi rất phổ biến. TO chỉ điểm đến (kết quả cuối), BY chỉ mức chênh lệch (lượng thay đổi), AT chỉ một mốc đứng yên.",
      points: [
        "rise/fall TO + con số = đạt tới mức đó (điểm kết thúc).",
        "rise/fall BY + con số = thay đổi một lượng bằng đó.",
        "stand/stay/remain AT + con số = đứng yên ở mức đó.",
        "reach a peak/low OF + con số = đạt đỉnh/đáy ở mức đó.",
        "an increase/a fall OF + lượng + IN + đối tượng."
      ],
      phrases: [
        "rose to 500 / fell to 20%",
        "increased by 200 / dropped by half",
        "stood at 1.5 million / remained at 30%",
        "reached a peak of 80% / a low of 5%"
      ],
      examples: [
        "✓ Sales rose to 500 units in 2010. (đạt 500)",
        "✓ Sales rose by 200 units. (tăng thêm 200)",
        "✗ Sales rose to 200 units (khi ý là tăng thêm 200) - sai giới từ."
      ]
    }
  },
  {
    id: 't1_09',
    module: 'task1',
    topic: 't1-trends',
    band: 'b7',
    type: 'vocab',
    tags: ['peak', 'trough', 'plateau', 'fluctuate'],
    title: "Từ vựng đỉnh, đáy, biến động và ổn định",
    ans: {
      summary: "Line graph thường có những điểm đặc biệt: đỉnh cao nhất (peak), đáy thấp nhất (trough), dao động (fluctuate) và ổn định (plateau/level off). Đây là vốn từ band 7-8.",
      points: [
        "PEAK = đỉnh cao nhất: to peak at / to reach a peak of.",
        "TROUGH / bottom out = đáy thấp nhất: to hit a low of / to bottom out at.",
        "FLUCTUATE = dao động lên xuống thất thường: to fluctuate (between X and Y).",
        "LEVEL OFF / PLATEAU = chững lại, đi ngang: to level off / to plateau / to reach a plateau.",
        "REMAIN STABLE / STAY CONSTANT = giữ nguyên không đổi."
      ],
      phrases: [
        "figures peaked at 90% in 2015",
        "numbers hit a low of 200 before recovering",
        "the trend fluctuated wildly throughout the decade",
        "after 2010, sales levelled off / plateaued at around 5,000",
        "the rate remained stable / stayed constant at 10%"
      ],
      examples: [
        "✓ Visitor numbers fluctuated between 2,000 and 4,000 over the period.",
        "✓ After a sharp rise, the figure levelled off at 80%."
      ]
    }
  },
  {
    id: 't1_10',
    module: 'task1',
    topic: 't1-trends',
    band: 'b8',
    type: 'structure',
    tags: ['advanced', 'sentence-variety', 'verb-noun'],
    title: "Đa dạng câu band 8: chuyển đổi verb ↔ noun",
    ans: {
      summary: "Band 8 thể hiện qua việc linh hoạt đổi giữa cấu trúc động từ và danh từ trong cùng một đoạn, dùng \"see/witness/experience\" và mệnh đề thời gian.",
      points: [
        "Cấu trúc 1 (động từ): X rose sharply.",
        "Cấu trúc 2 (danh từ): There was a sharp rise in X.",
        "Cấu trúc 3 (chủ thể là thời gian/địa điểm): 2010 saw a sharp rise in X.",
        "Cấu trúc 4 (X làm chủ ngữ trải nghiệm): X experienced/witnessed a sharp rise.",
        "Dùng \"before\" và \"after\" + V-ing để nối hai biến động trong một câu."
      ],
      phrases: [
        "The year 2010 saw a dramatic increase in...",
        "The country experienced a steady decline in...",
        "..., before falling back to... / ..., after which it rose to...",
        "having peaked at X, the figure then dropped..."
      ],
      examples: [
        "✓ The figure climbed to a peak of 80% in 2015, before declining gradually to 60%.",
        "✓ 2008 witnessed the sharpest fall, with sales plummeting to just 100 units."
      ]
    }
  },
  {
    id: 't1_11',
    module: 'task1',
    topic: 't1-trends',
    band: 'b7',
    type: 'sample',
    tags: ['sample', 'body-paragraph', 'line-graph'],
    title: "Model: Đoạn thân bài mô tả xu hướng (line graph)",
    ans: {
      summary: "Một đoạn detail tốt nhóm các đối tượng liên quan, dùng đa dạng verb/noun, có số liệu chính xác và giới từ đúng. Đây là model body paragraph cho line graph.",
      points: [
        "Câu chủ đề giới thiệu nhóm dữ liệu đang mô tả.",
        "Dùng đa dạng động từ và trạng từ mức độ.",
        "Áp dụng đúng rise to / rise by / peak at.",
        "Dùng từ nối thời gian để câu chuyện mượt mà."
      ],
      sample: "Regarding oil consumption, the figure began at around 30 million tonnes in 2000 and climbed steadily to reach a peak of 45 million tonnes in 2010. After this point, it fell back slightly, ending the period at approximately 42 million tonnes.\n\nIn contrast, the use of renewable energy showed a far more dramatic pattern. Starting from a low of just 5 million tonnes, it surged rapidly throughout the decade, overtaking coal in 2008 and finishing at almost 40 million tonnes. Coal, meanwhile, fluctuated between 20 and 25 million tonnes before levelling off at 22 million tonnes by the end of the period."
    }
  },
  {
    id: 't1_12',
    module: 'task1',
    topic: 't1-compare',
    band: 'b6',
    type: 'structure',
    tags: ['comparatives', 'superlatives'],
    title: "So sánh hơn và so sánh nhất",
    ans: {
      summary: "Pie chart, table và bar chart tĩnh đòi hỏi ngôn ngữ so sánh. Nắm chắc comparative và superlative là nền tảng.",
      points: [
        "So sánh hơn ngắn: -er than (higher than, larger than, smaller than).",
        "So sánh hơn dài: more/less + adj + than (more significant than).",
        "So sánh nhất: the + -est / the most (the highest, the most popular).",
        "Nhấn mạnh khoảng cách: far / significantly / considerably + comparative.",
        "Nhấn mạnh ít: slightly / marginally + comparative."
      ],
      phrases: [
        "A is far higher than B",
        "A is slightly more popular than B",
        "X had the highest figure, while Y had the lowest",
        "considerably/significantly larger than"
      ],
      examples: [
        "✓ Spending on food was significantly higher than spending on clothing.",
        "✓ China recorded the largest population, whereas Iceland had the smallest."
      ]
    }
  },
  {
    id: 't1_13',
    module: 'task1',
    topic: 't1-compare',
    band: 'b7',
    type: 'vocab',
    tags: ['proportion', 'fraction', 'percentage'],
    title: "Ngôn ngữ tỷ lệ, phân số và phần trăm",
    ans: {
      summary: "Pie chart xoay quanh tỷ lệ. Dùng linh hoạt proportion/share/fraction để tránh lặp \"percent\" và nâng Lexical Resource.",
      points: [
        "proportion / share / percentage = tỷ lệ (the proportion of X).",
        "Phân số: a quarter (1/4), a third (1/3), half (1/2), two-thirds (2/3).",
        "Định lượng: the majority (đa số), a minority (thiểu số), a significant portion.",
        "exactly / roughly / approximately / just over / just under + con số.",
        "account for / make up / represent / constitute + tỷ lệ."
      ],
      phrases: [
        "X accounted for half of the total",
        "just over a third of respondents",
        "the majority of people chose...",
        "a small minority, at just 5%, preferred..."
      ],
      examples: [
        "✓ Housing made up nearly a quarter of total spending.",
        "✓ Approximately two-thirds of the budget was allocated to wages."
      ]
    }
  },
  {
    id: 't1_14',
    module: 'task1',
    topic: 't1-compare',
    band: 'b7',
    type: 'structure',
    tags: ['equal', 'multiples', 'as-much-as'],
    title: "So sánh bằng và bội số: as much as, twice as",
    ans: {
      summary: "Để so sánh các giá trị bằng nhau hoặc gấp nhiều lần, dùng \"the same as\" và cấu trúc bội số \"X times as much as\". Đây là điểm phân biệt band 7+.",
      points: [
        "Bằng nhau: the same as / equal to / identical to.",
        "Gấp đôi: twice as much/many as / double the amount of.",
        "Gấp ba trở lên: three times as much as / X times higher than.",
        "Một nửa: half as much as / half the figure for.",
        "Bội số đặt trước \"as much/many as\": twice / three times / four times."
      ],
      phrases: [
        "A was twice as high as B",
        "Spending on X was the same as on Y",
        "The figure for A was three times that of B",
        "B was half as much as A"
      ],
      examples: [
        "✓ The number of male students was twice as high as that of female students.",
        "✓ Sales in Asia were roughly the same as those in Europe."
      ]
    }
  },
  {
    id: 't1_15',
    module: 'task1',
    topic: 't1-compare',
    band: 'b8',
    type: 'vocab',
    tags: ['advanced', 'comparison', 'cohesion'],
    title: "Nâng cao: ngôn ngữ so sánh band 8",
    ans: {
      summary: "Band 8 dùng các cấu trúc so sánh tinh tế: by far, compared with, whereas, và mệnh đề so sánh lồng ghép để thể hiện sự khác biệt một cách mạch lạc.",
      points: [
        "by far the largest/smallest = vượt trội nhất.",
        "compared with / in comparison with = khi so sánh với.",
        "whereas / while = trong khi (đối lập hai vế).",
        "outweigh / outnumber / surpass = vượt trội về lượng.",
        "a marked / striking / negligible difference = sự khác biệt rõ rệt / không đáng kể."
      ],
      phrases: [
        "X was by far the most popular option",
        "Compared with men, women were far more likely to...",
        "..., whereas the figure for Y stood at only...",
        "Sales in city A outnumbered those in city B by a wide margin"
      ],
      examples: [
        "✓ Coffee was by far the most consumed drink, whereas tea attracted only a small minority.",
        "✓ In comparison with 2000, expenditure in 2020 had more than doubled."
      ]
    }
  },
  {
    id: 't1_16',
    module: 'task1',
    topic: 't1-compare',
    band: 'b7',
    type: 'sample',
    tags: ['sample', 'pie-chart', 'table'],
    title: "Model: Đoạn thân bài cho pie chart / table",
    ans: {
      summary: "Đoạn so sánh tốt nhóm các hạng mục theo lớn-nhỏ, dùng ngôn ngữ tỷ lệ đa dạng và cấu trúc bội số. Đây là model paragraph cho pie chart.",
      points: [
        "Mở đầu bằng hạng mục chiếm tỷ trọng lớn nhất.",
        "Dùng account for / make up / represent xen kẽ.",
        "Áp dụng phân số và bội số để so sánh.",
        "Kết bằng hạng mục nhỏ nhất."
      ],
      sample: "In 2020, housing represented by far the largest expense for the average household, accounting for almost a third of total spending at 30%. This was followed by food, which made up just under a quarter at 23%.\n\nTransport and entertainment occupied the middle of the range, constituting 18% and 15% respectively. Notably, spending on housing was twice as high as that on entertainment. The smallest proportion was allocated to savings, which represented a mere 4% of the household budget, less than half the figure for entertainment."
    }
  },
  {
    id: 't1_17',
    module: 'task1',
    topic: 't1-process',
    band: 'b6',
    type: 'structure',
    tags: ['passive', 'active', 'process'],
    title: "Chủ động và bị động trong process diagram",
    ans: {
      summary: "Process diagram thường mô tả quy trình do con người/máy thực hiện, nên dùng thì hiện tại bị động (present passive). Quy trình tự nhiên thì dùng chủ động.",
      points: [
        "Quy trình nhân tạo (sản xuất, chế biến): present simple passive (is/are + V3).",
        "Quy trình tự nhiên (vòng đời, vòng tuần hoàn): present simple active.",
        "Không cần nêu chủ thể vì trọng tâm là HÀNH ĐỘNG, không phải người làm.",
        "Giữ thì nhất quán xuyên suốt bài.",
        "Dùng \"is then\", \"is subsequently\" để nối các bước bị động."
      ],
      phrases: [
        "the raw materials are crushed",
        "the mixture is then heated to...",
        "the bottles are subsequently filled and sealed",
        "the eggs hatch / the larva develops (tự nhiên - chủ động)"
      ],
      examples: [
        "✓ Bị động: The clay is mixed with water and then poured into moulds.",
        "✓ Chủ động (tự nhiên): The butterfly lays its eggs on a leaf."
      ]
    }
  },
  {
    id: 't1_18',
    module: 'task1',
    topic: 't1-process',
    band: 'b7',
    type: 'vocab',
    tags: ['sequencers', 'stages', 'linking'],
    title: "Từ nối trình tự (sequencing language)",
    ans: {
      summary: "Process được mô tả theo các giai đoạn nối tiếp. Dùng từ nối trình tự đa dạng để thể hiện thứ tự rõ ràng và đạt Coherence cao.",
      points: [
        "Bắt đầu: First / Firstly / To begin with / At the first stage.",
        "Tiếp theo: Then / Next / After that / Subsequently / Following this.",
        "Đồng thời: At the same time / Meanwhile / Simultaneously.",
        "Kết thúc: Finally / Lastly / In the final stage / At the end of the process.",
        "Chỉ điều kiện: Once / After / As soon as + mệnh đề (Once the mixture is dry, ...)."
      ],
      phrases: [
        "Firstly, ... / To begin with, ...",
        "Following this, the material is...",
        "Subsequently, ... / At the next stage, ...",
        "In the final stage, the product is packaged and distributed."
      ],
      examples: [
        "✓ Following this, the liquid is heated and then left to cool.",
        "✓ Once the bottles have been filled, they are sealed and labelled."
      ]
    }
  },
  {
    id: 't1_19',
    module: 'task1',
    topic: 't1-process',
    band: 'b7',
    type: 'vocab',
    tags: ['map', 'change-over-time', 'tenses'],
    title: "Ngôn ngữ mô tả thay đổi trên bản đồ (map)",
    ans: {
      summary: "Map đề thường so sánh hai thời điểm (quá khứ - hiện tại/tương lai). Dùng đúng thì và động từ thay đổi: was built, has been replaced, converted into.",
      points: [
        "Quá khứ → hiện tại: present perfect passive (has been built / has been demolished).",
        "Hai mốc quá khứ: past simple passive (was constructed / was replaced).",
        "Tương lai: future passive (will be built / is to be developed).",
        "Động từ thay đổi: build, demolish, replace, convert into, expand, relocate.",
        "Ngôn ngữ phương hướng: to the north / in the east / on the outskirts."
      ],
      phrases: [
        "a new hospital was built in the north",
        "the forest has been replaced by housing",
        "the factory was converted into apartments",
        "the road was extended to the east of the town"
      ],
      examples: [
        "✓ The open fields were replaced by a large shopping centre.",
        "✓ A new road has been constructed connecting the two villages."
      ]
    }
  },
  {
    id: 't1_20',
    module: 'task1',
    topic: 't1-process',
    band: 'b8',
    type: 'sample',
    tags: ['sample', 'process', 'passive'],
    title: "Model: Đoạn mô tả process hoàn chỉnh",
    ans: {
      summary: "Đoạn process tốt dùng bị động nhất quán, từ nối trình tự đa dạng và mệnh đề điều kiện để thể hiện luồng các giai đoạn. Đây là model paragraph cho process diagram.",
      points: [
        "Bắt đầu bằng nguyên liệu/điểm xuất phát.",
        "Dùng sequencer khác nhau cho mỗi bước.",
        "Giữ bị động hiện tại nhất quán.",
        "Kết bằng giai đoạn cuối (sản phẩm hoàn thiện)."
      ],
      sample: "At the first stage of the process, limestone and clay are extracted from the ground and fed into a crusher, where they are broken down into a fine powder. This powder is then mixed in the correct proportions before being passed into a rotating heater.\n\nSubsequently, the heated mixture is ground once more to produce cement, which is stored in large bags. In the final stage, the cement is combined with water, sand and gravel in a concrete mixer to create concrete, which is ready for use in construction. Throughout the entire process, the raw materials are transformed through a series of mechanical and chemical steps."
    }
  }
];
