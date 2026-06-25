import type { Card } from './types';

export const SENTENCE2_CARDS: Card[] = [
  // ============ s-conditional ============
  {
    id: "s2_1",
    module: "sentences",
    topic: "s-conditional",
    band: "b6",
    type: "structure",
    tags: ["conditional", "first conditional", "future", "prediction"],
    title: "Câu điều kiện loại 1 (kết quả có thật trong tương lai)",
    ans: {
      summary: "Dùng để nói về một kết quả CÓ THỂ XẢY RA trong tương lai nếu điều kiện được thỏa mãn. Đây là cấu trúc nền tảng (band 6-7) để dự đoán hậu quả thực tế của một chính sách hay hành động.",
      points: [
        "FORM: If + S + V(hiện tại đơn), S + will/can/may + V(nguyên thể).",
        "Mệnh đề if dùng hiện tại đơn, KHÔNG dùng \"will\" sau \"if\".",
        "Có thể thay \"will\" bằng \"may/might/could\" để giảm chắc chắn, hoặc \"should/must\" để khuyến nghị.",
        "Có thể đảo: S + will + V if + S + V (không cần dấu phẩy khi mệnh đề if đứng sau)."
      ],
      phrases: [
        "If + S + V(s), S + will + V ...",
        "Unless action is taken, S + will + V ...",
        "If this trend continues, S + will likely + V ..."
      ],
      examples: [
        "If governments invest more in renewable energy, carbon emissions will fall significantly over the next decade.",
        "If schools integrate technology into the classroom, students will become more engaged in their learning.",
        "If cities fail to expand public transport, traffic congestion will only get worse.",
        "If people continue to consume processed food, rates of obesity will keep rising.",
        "If companies offer flexible working hours, employees will be more productive and less stressed.",
        "If this trend in deforestation continues, many species will lose their natural habitats.",
        "If parents spend more time with their children, family bonds will become much stronger.",
        "If the media reports news responsibly, the public will be better informed about current affairs.",
        "If authorities impose heavier fines, the number of traffic violations will drop noticeably.",
        "If young people are taught financial skills at school, they will manage their money more wisely in adulthood."
      ],
      sample: "If governments fail to act on climate change, future generations will inherit a far more hostile environment.\nFor instance, if global temperatures keep rising, coastal cities will face frequent flooding and millions of people will be forced to relocate."
    }
  },
  {
    id: "s2_2",
    module: "sentences",
    topic: "s-conditional",
    band: "b7",
    type: "structure",
    tags: ["conditional", "second conditional", "hypothetical"],
    title: "Câu điều kiện loại 2 (giả định không có thật ở hiện tại)",
    ans: {
      summary: "Dùng để bàn về tình huống GIẢ ĐỊNH, không có thật hoặc khó xảy ra ở hiện tại/tương lai. Rất hữu ích khi đề xuất giải pháp tưởng tượng hoặc cân nhắc hệ quả của một thay đổi giả định (band 7-8).",
      points: [
        "FORM: If + S + V(quá khứ đơn), S + would/could/might + V(nguyên thể).",
        "Dùng \"were\" cho mọi ngôi trong văn trang trọng: If I were..., If the government were...",
        "Khác loại 1 ở sắc thái: loại 2 nhấn mạnh tính giả định / ít khả năng xảy ra.",
        "Dùng \"could\" để chỉ khả năng, \"might\" để chỉ kết quả không chắc chắn."
      ],
      phrases: [
        "If + S + V(past), S + would + V ...",
        "If it were not for ..., S + would + V ...",
        "Were S to + V, S + would + V ..."
      ],
      examples: [
        "If the government banned single-use plastics, the amount of ocean pollution would decrease dramatically.",
        "If universities lowered their tuition fees, far more students from poor backgrounds would have access to higher education.",
        "If people relied less on cars, urban air quality would improve considerably.",
        "If employers paid a fair living wage, fewer workers would suffer from financial stress.",
        "If junk food were more heavily taxed, consumers might choose healthier alternatives.",
        "If criminals received proper rehabilitation, reoffending rates would almost certainly fall.",
        "If parents limited their children's screen time, those children would likely develop stronger social skills.",
        "If countries cooperated more closely, global problems such as pandemics would be easier to contain.",
        "If the news media were less sensational, public trust in journalism would gradually recover.",
        "If cities built more green spaces, residents would enjoy better physical and mental health.",
        "Were the authorities to invest in rural areas, fewer people would migrate to overcrowded cities."
      ],
      sample: "If society placed a higher value on vocational training, many young people would pursue practical careers instead of crowding into universities.\nThis shift would, in turn, reduce graduate unemployment and supply industries with the skilled workers they desperately need."
    }
  },
  {
    id: "s2_3",
    module: "sentences",
    topic: "s-conditional",
    band: "b8",
    type: "structure",
    tags: ["conditional", "third conditional", "mixed conditional", "past"],
    title: "Câu điều kiện loại 3 & hỗn hợp (giả định trái với quá khứ)",
    ans: {
      summary: "Loại 3 bàn về điều KHÔNG xảy ra trong quá khứ và hệ quả tưởng tượng của nó. Loại hỗn hợp nối điều kiện quá khứ với kết quả hiện tại. Đây là cấu trúc band 8 thể hiện độ tinh vi ngữ pháp khi phân tích nguyên nhân lịch sử.",
      points: [
        "LOẠI 3: If + S + had + V3, S + would have + V3 (quá khứ trái thực tế).",
        "HỖN HỢP: If + S + had + V3, S + would + V (điều kiện quá khứ → kết quả hiện tại).",
        "Có thể đảo bỏ \"if\": Had + S + V3, S + would have + V3.",
        "Lưu ý dùng đúng \"would have + V3\" cho kết quả quá khứ, \"would + V\" cho kết quả hiện tại."
      ],
      phrases: [
        "If + S + had + V3, S + would have + V3 ...",
        "Had + S (not) + V3, S + would have + V3 ...",
        "If + S + had + V3, S + would + V (now) ..."
      ],
      examples: [
        "If governments had acted on scientific warnings earlier, the climate crisis would have been far less severe.",
        "If the company had invested in safety training, the workplace accident would never have happened.",
        "Had policymakers regulated the financial sector properly, the 2008 crisis might have been avoided.",
        "If she had been given equal educational opportunities, she would have pursued a career in medicine.",
        "If the city had planned its growth carefully, it would not be suffering from such severe congestion today.",
        "Had the authorities preserved the old forests, the region would still enjoy rich biodiversity now.",
        "If parents had encouraged reading from an early age, their children would be far more literate today.",
        "If the factory had not dumped waste into the river, the local water supply would still be safe to drink.",
        "Had the government subsidised public transport decades ago, the country would be far less dependent on cars now.",
        "If more resources had been devoted to preventive healthcare, the hospital system would not be so overstretched today."
      ],
      sample: "Had nations cooperated more effectively in the past, many global health crises would have been contained before they spread.\nUnfortunately, because such cooperation was lacking, millions of lives that could have been saved were lost, and the world remains poorly prepared for the next pandemic."
    }
  },
  {
    id: "s2_4",
    module: "sentences",
    topic: "s-conditional",
    band: "b6",
    type: "structure",
    tags: ["conditional", "unless", "provided that", "as long as"],
    title: "Liên từ điều kiện: unless / provided that / as long as",
    ans: {
      summary: "Các liên từ thay thế cho \"if\" giúp diễn đạt điều kiện chính xác và đa dạng hơn. \"Unless\" = nếu không; \"provided/providing that\", \"as long as\", \"on condition that\" = miễn là/với điều kiện. Dùng tốt nhóm này giúp tăng điểm Coherence và Grammar (band 6-7).",
      points: [
        "unless = if ... not (nếu không): Unless + S + V(khẳng định), ...",
        "provided (that) / providing (that) / as long as = miễn là, với điều kiện là.",
        "on condition that = với điều kiện nghiêm ngặt là.",
        "Lưu ý: KHÔNG dùng \"unless\" với mệnh đề đã phủ định; mệnh đề điều kiện vẫn chia hiện tại."
      ],
      phrases: [
        "Unless + S + V, S + will + V ...",
        "Provided that + S + V, S + can + V ...",
        "As long as + S + V, S + will + V ...",
        "S + will + V on condition that + S + V ..."
      ],
      examples: [
        "Unless drastic measures are taken, global temperatures will continue to rise.",
        "Unless students are taught critical thinking, they will struggle to evaluate online information.",
        "Children can benefit from social media as long as their usage is properly supervised.",
        "Provided that the government enforces strict regulations, factories will reduce their emissions.",
        "Tourism can boost the local economy provided that it is managed sustainably.",
        "Unless cities expand their public transport networks, traffic congestion will worsen.",
        "Young people will make responsible decisions as long as they receive adequate guidance.",
        "Renewable energy can replace fossil fuels providing that enough investment is made.",
        "Prisoners may be released early on condition that they show genuine signs of rehabilitation.",
        "Companies will retain talented staff as long as they offer fair pay and flexible conditions.",
        "Unless parents set a good example, children are unlikely to develop healthy habits."
      ],
      sample: "Economic growth is desirable, but only as long as it does not come at the expense of the environment.\nUnless governments strike a careful balance between development and conservation, future generations will inherit a planet stripped of its natural resources."
    }
  },
  {
    id: "s2_5",
    module: "sentences",
    topic: "s-conditional",
    band: "b8",
    type: "structure",
    tags: ["conditional", "inversion", "were to", "should", "formal"],
    title: "Đảo ngữ điều kiện: Were S to / Should S / Had S",
    ans: {
      summary: "Bỏ \"if\" và đảo trợ động từ lên đầu để tạo câu điều kiện trang trọng, học thuật. \"Were S to + V\" nhấn mạnh giả định; \"Should S + V\" diễn đạt khả năng; \"Had S + V3\" cho quá khứ. Đây là dấu hiệu rõ ràng của band 8.",
      points: [
        "Loại 2: Were + S + to + V, S + would + V (= If S were to V).",
        "Loại 1 trang trọng: Should + S + V, S + will/would + V (= If S should V).",
        "Loại 3: Had + S + (not) + V3, S + would have + V3.",
        "Lưu ý: dạng đảo ngữ luôn KHÔNG có \"if\"; chỉ dùng trong văn viết trang trọng."
      ],
      phrases: [
        "Were the government to + V, ...",
        "Should this trend continue, ...",
        "Had it not been for ..., ..."
      ],
      examples: [
        "Were the government to invest heavily in education, the nation's long-term prosperity would be assured.",
        "Should current consumption patterns continue, the planet's resources will be exhausted within decades.",
        "Were companies to adopt greener technologies, industrial pollution would decline sharply.",
        "Should the authorities ignore these warnings, the consequences for public health would be catastrophic.",
        "Had it not been for advances in modern medicine, average life expectancy would be far lower today.",
        "Were universities to abolish tuition fees, access to higher education would expand enormously.",
        "Should populations continue to migrate to cities, rural communities will face steady decline.",
        "Were stricter penalties to be introduced, the rate of cybercrime might fall considerably.",
        "Had governments regulated social media earlier, the spread of misinformation would have been limited.",
        "Should automation replace human labour on a large scale, millions of workers would need retraining."
      ],
      sample: "Were policymakers to treat climate change as the emergency it truly is, sweeping reforms would already be under way.\nShould they continue to delay, however, the window for meaningful action will close, and the damage will become irreversible."
    }
  },
  {
    id: "s2_6",
    module: "sentences",
    topic: "s-conditional",
    band: "b7",
    type: "structure",
    tags: ["conditional", "it is time", "wish", "hypothetical past"],
    title: "It is (high) time + quá khứ / wish + quá khứ",
    ans: {
      summary: "Cấu trúc giả định đặc biệt dùng để THÚC GIỤC hành động (\"đã đến lúc...\") hoặc bày tỏ MONG MUỐN trái thực tế. Dù theo sau là thì quá khứ, ý nghĩa lại hướng về hiện tại/tương lai. Rất ấn tượng khi mở đầu phần giải pháp (band 7-8).",
      points: [
        "It is (high/about) time + S + V(quá khứ đơn): đã đến lúc đáng lẽ phải làm điều gì.",
        "wish + S + V(quá khứ): ước điều trái thực tế ở hiện tại; wish + had + V3: ước trái thực tế ở quá khứ.",
        "would rather + S + V(quá khứ): muốn ai đó làm gì (giả định).",
        "Lưu ý: chia thì quá khứ nhưng KHÔNG mang nghĩa quá khứ."
      ],
      phrases: [
        "It is high time + S + past simple ...",
        "It is about time + S + V(ed) ...",
        "Many people wish (that) + S + V(ed) ..."
      ],
      examples: [
        "It is high time the government took decisive action against air pollution.",
        "It is about time schools placed greater emphasis on creativity rather than rote learning.",
        "It is high time society stopped treating mental illness as a taboo subject.",
        "Many citizens wish that public transport were cheaper and more reliable.",
        "It is high time wealthy nations did more to support developing countries.",
        "Parents often wish their children spent less time staring at screens.",
        "It is about time employers recognised the value of a healthy work-life balance.",
        "Environmental activists wish that politicians took their warnings more seriously.",
        "It is high time consumers became more aware of the impact of their choices.",
        "Many graduates wish they had received more practical career guidance at university."
      ],
      sample: "It is high time governments treated the housing crisis as a genuine emergency rather than a minor inconvenience.\nMany young families wish they could afford a home of their own, yet soaring prices continue to push that dream out of reach."
    }
  },

  // ============ s-emphasis ============
  {
    id: "s2_7",
    module: "sentences",
    topic: "s-emphasis",
    band: "b8",
    type: "structure",
    tags: ["emphasis", "cleft", "it is that", "focus"],
    title: "Câu chẻ với \"It is/was X that...\" (nhấn mạnh chủ thể)",
    ans: {
      summary: "Câu chẻ (cleft sentence) tách câu thành hai phần để LÀM NỔI BẬT một thành phần (chủ ngữ, tân ngữ, trạng ngữ). \"It is X that...\" đặt trọng tâm vào X. Đây là cấu trúc nhấn mạnh tinh tế đặc trưng band 8.",
      points: [
        "FORM: It + is/was + [thành phần nhấn mạnh] + that/who + phần còn lại.",
        "Nhấn mạnh chủ ngữ người: dùng \"who\"; vật/khác: dùng \"that\".",
        "Có thể nhấn mạnh trạng ngữ thời gian/nơi chốn: It was in 2020 that...",
        "Lưu ý: phần sau \"that\" giữ nguyên trật tự, không lặp thành phần đã nhấn mạnh."
      ],
      phrases: [
        "It is X that + ...",
        "It is often X that bears the greatest responsibility for ...",
        "It was not until ... that ..."
      ],
      examples: [
        "It is education, rather than punishment, that truly reduces crime in the long run.",
        "It is the government that must take the lead in tackling climate change.",
        "It is poverty that lies at the root of most social problems.",
        "It was the rapid spread of the internet that transformed the way we communicate.",
        "It is parents, not teachers, who have the greatest influence on a child's values.",
        "It is unhealthy lifestyles that account for the majority of preventable diseases.",
        "It was not until recently that society began to take mental health seriously.",
        "It is the overuse of cars that contributes most to urban air pollution.",
        "It is a lack of affordable housing that forces many young people to delay starting a family.",
        "It is investment in renewable energy that will ultimately secure our energy future."
      ],
      sample: "It is the constant exposure to advertising, more than any other factor, that shapes the spending habits of young consumers.\nWhile peer pressure plays a role, it is the relentless marketing on social media that proves most influential."
    }
  },
  {
    id: "s2_8",
    module: "sentences",
    topic: "s-emphasis",
    band: "b8",
    type: "structure",
    tags: ["emphasis", "cleft", "what clause", "pseudo-cleft"],
    title: "Câu chẻ giả với \"What... is/does...\"",
    ans: {
      summary: "Câu chẻ giả (pseudo-cleft) dùng mệnh đề \"What...\" làm chủ ngữ để nhấn mạnh hành động hoặc nhu cầu. Cực kỳ hữu ích khi mở phần giải pháp: \"What is needed is...\" / \"What governments must do is...\" (band 7-8).",
      points: [
        "FORM: What + S + V + is/are + [thành phần nhấn mạnh].",
        "Nhấn mạnh hành động: What + S + does/did + is (to) + V.",
        "Thường dùng để giới thiệu giải pháp hoặc nhu cầu cấp thiết.",
        "Lưu ý động từ \"is/are\" ở giữa chia theo danh từ nhấn mạnh phía sau."
      ],
      phrases: [
        "What is needed is ...",
        "What governments must do is to + V ...",
        "What matters most is ..."
      ],
      examples: [
        "What the education system urgently needs is a greater focus on practical skills.",
        "What governments must do is invest in clean energy before it is too late.",
        "What really drives economic inequality is unequal access to quality education.",
        "What concerns most parents today is the amount of time children spend online.",
        "What the healthcare sector requires is sustained funding rather than short-term fixes.",
        "What young people value most is meaningful work, not merely a high salary.",
        "What makes a city liveable is an abundance of green spaces and reliable public transport.",
        "What the planet desperately needs is a collective commitment to reducing emissions.",
        "What companies often overlook is the long-term cost of neglecting employee wellbeing.",
        "What truly prevents crime is addressing its underlying social causes."
      ],
      sample: "What the world needs now is decisive, coordinated action on climate change.\nWhat individual governments can do is set ambitious targets, but what matters most is whether they have the political will to meet them."
    }
  },
  {
    id: "s2_9",
    module: "sentences",
    topic: "s-emphasis",
    band: "b8",
    type: "structure",
    tags: ["emphasis", "inversion", "not only but also", "negative adverb"],
    title: "Đảo ngữ phủ định: Not only... but also / Rarely / Never",
    ans: {
      summary: "Khi đưa trạng từ phủ định/hạn chế ra đầu câu, ta phải ĐẢO trợ động từ lên trước chủ ngữ. Cấu trúc này tạo nhịp điệu mạnh, học thuật và rất gây ấn tượng (band 8). Dùng để nhấn mạnh mức độ hoặc bổ sung ý.",
      points: [
        "FORM: [Trạng từ phủ định] + trợ động từ + S + V (đảo như câu hỏi).",
        "Các từ kích hoạt: Not only, Never, Rarely, Seldom, Hardly, No sooner... than, Under no circumstances, At no time.",
        "Not only + đảo ngữ + but (S) also + V: bổ sung hai ý.",
        "Lưu ý: nếu không có trợ động từ, thêm do/does/did."
      ],
      phrases: [
        "Not only does S + V, but S also + V ...",
        "Never before has S + V3 ...",
        "Under no circumstances should S + V ...",
        "Rarely do we see ..."
      ],
      examples: [
        "Not only does smoking damage the lungs, but it also increases the risk of heart disease.",
        "Never before has humanity faced such a serious environmental threat.",
        "Rarely do governments take preventive action until a crisis has already struck.",
        "Not only does online learning save time, but it also allows students to study at their own pace.",
        "Under no circumstances should children be exposed to violent content on the internet.",
        "Seldom do we consider the long-term consequences of our consumption habits.",
        "No sooner had the new policy been introduced than its flaws became apparent.",
        "Not only are fossil fuels finite, but they are also the main cause of global warming.",
        "Hardly ever do politicians admit that their decisions have failed.",
        "At no time in history have people had access to so much information yet trusted it so little."
      ],
      sample: "Not only does urban overcrowding strain public services, but it also worsens pollution and reduces quality of life.\nNever before have cities grown so rapidly, and rarely have governments been so unprepared to cope with the consequences."
    }
  },
  {
    id: "s2_10",
    module: "sentences",
    topic: "s-emphasis",
    band: "b8",
    type: "structure",
    tags: ["emphasis", "inversion", "only by", "only when"],
    title: "Đảo ngữ với \"Only by / Only when / Only if...\"",
    ans: {
      summary: "Cấu trúc \"Only + (cụm trạng ngữ)\" đặt đầu câu tạo đảo ngữ ở MỆNH ĐỀ CHÍNH, dùng để nhấn mạnh ĐIỀU KIỆN DUY NHẤT dẫn tới kết quả. Cực kỳ phù hợp khi chốt giải pháp (band 8).",
      points: [
        "FORM: Only + [by Ving / when S+V / if S+V / through N] + trợ động từ + S + V.",
        "Lưu ý: ĐẢO NGỮ nằm ở MỆNH ĐỀ CHÍNH, không phải mệnh đề \"only\".",
        "Only by + Ving = chỉ bằng cách; Only when = chỉ khi; Only through = chỉ thông qua.",
        "Thường dùng để khẳng định một giải pháp là điều kiện tiên quyết."
      ],
      phrases: [
        "Only by + Ving + can S + V ...",
        "Only when + S + V + will S + V ...",
        "Only through + N + can we + V ..."
      ],
      examples: [
        "Only by working together can nations hope to solve the climate crisis.",
        "Only when education becomes truly accessible will social mobility improve.",
        "Only through sustained investment can the healthcare system be modernised.",
        "Only by reducing our reliance on fossil fuels can we secure a sustainable future.",
        "Only when employers value wellbeing will workplace stress begin to decline.",
        "Only by addressing poverty can governments tackle the root causes of crime.",
        "Only through international cooperation can global pandemics be contained.",
        "Only when parents and schools work together will children thrive academically.",
        "Only by raising public awareness can we change harmful consumption habits.",
        "Only if strict regulations are enforced will industrial pollution truly fall."
      ],
      sample: "Only by combining government regulation with individual responsibility can we make meaningful progress on environmental protection.\nOnly when both sides recognise their role will lasting change become possible."
    }
  },
  {
    id: "s2_11",
    module: "sentences",
    topic: "s-emphasis",
    band: "b7",
    type: "structure",
    tags: ["emphasis", "fronting", "so adj that", "such"],
    title: "Đảo ngữ \"So + adj/adv + V\" và \"Such + N\"",
    ans: {
      summary: "Đưa \"So + tính từ\" hoặc \"Such + danh từ\" ra đầu câu để nhấn mạnh MỨC ĐỘ cao, kèm đảo ngữ. Tạo hiệu ứng kịch tính, học thuật khi muốn nhấn mạnh tính nghiêm trọng của một vấn đề (band 7-8).",
      points: [
        "FORM 1: So + adj/adv + trợ động từ + S + that + kết quả.",
        "FORM 2: Such + (a/an) + (adj) + N + trợ động từ + S + that + kết quả.",
        "Bản gốc: It is so serious that... → So serious is it that...",
        "Lưu ý: phần \"that + kết quả\" giữ trật tự bình thường, chỉ phần đầu đảo."
      ],
      phrases: [
        "So serious is the problem that ...",
        "So rapidly has technology advanced that ...",
        "Such is the scale of the crisis that ..."
      ],
      examples: [
        "So serious is the threat of climate change that immediate global action is required.",
        "So rapidly has technology advanced that many traditional jobs have disappeared.",
        "So great is the demand for housing that prices have soared beyond the reach of ordinary families.",
        "Such is the influence of social media that it can sway elections and shape public opinion.",
        "So widespread is the problem of obesity that it now strains healthcare systems worldwide.",
        "So heavily do many people rely on cars that public transport remains underused.",
        "Such is the pressure on students today that mental health issues have become alarmingly common.",
        "So polluted has the river become that fish can no longer survive in it.",
        "So persuasive is advertising that consumers often buy goods they do not need.",
        "Such was the scale of the disaster that thousands were left homeless overnight."
      ],
      sample: "So profound is the impact of automation on employment that entire industries are being transformed.\nSuch is the pace of this change that workers must constantly retrain simply to remain employable."
    }
  },

  // ============ s-solution ============
  {
    id: "s2_12",
    module: "sentences",
    topic: "s-solution",
    band: "b7",
    type: "structure",
    tags: ["solution", "measure", "one solution would be"],
    title: "\"One effective solution/measure would be to...\"",
    ans: {
      summary: "Khung câu chuẩn để GIỚI THIỆU một giải pháp cụ thể trong body của bài Problem-Solution. Dùng \"would be to\" mang sắc thái đề xuất lịch sự, học thuật (band 7). Dễ biến tấu với nhiều danh từ giải pháp.",
      points: [
        "FORM: One + (effective/possible/practical) + solution/measure/approach/step + would be to + V.",
        "Biến thể: A further solution would be to...; Another approach worth considering is...",
        "Theo sau \"would be to\" là động từ nguyên thể.",
        "Dùng tính từ đánh giá (effective, viable, practical) để tăng độ chính xác."
      ],
      phrases: [
        "One effective solution would be to + V ...",
        "A practical measure would be to + V ...",
        "Another viable approach would be to + V ..."
      ],
      examples: [
        "One effective solution would be to invest heavily in public transport to reduce traffic congestion.",
        "A practical measure would be to introduce financial literacy classes in secondary schools.",
        "Another viable approach would be to offer tax incentives to companies that adopt green technology.",
        "One possible solution would be to expand mental health services in workplaces and universities.",
        "A sensible measure would be to impose higher taxes on sugary drinks and processed foods.",
        "One effective step would be to launch nationwide campaigns promoting recycling.",
        "A further solution would be to provide affordable housing for low-income families.",
        "One promising approach would be to retrain workers whose jobs are threatened by automation.",
        "A practical measure would be to limit the amount of advertising aimed at children.",
        "One effective solution would be to strengthen international cooperation on cybercrime."
      ],
      sample: "One effective solution would be to make public transport free during peak hours, thereby encouraging commuters to leave their cars at home.\nA complementary measure would be to invest in cycling infrastructure, giving people a healthy and pollution-free alternative."
    }
  },
  {
    id: "s2_13",
    module: "sentences",
    topic: "s-solution",
    band: "b6",
    type: "structure",
    tags: ["solution", "recommendation", "modal", "should", "ought to"],
    title: "Khuyến nghị bằng modal: should / ought to / must / need to",
    ans: {
      summary: "Cách trực tiếp và phổ biến nhất để ĐƯA RA KHUYẾN NGHỊ. Sử dụng modal verb chỉ rõ chủ thể chịu trách nhiệm (governments, schools, individuals). Là nền tảng band 6, nhưng đa dạng modal sẽ nâng lên band 7.",
      points: [
        "FORM: S (chủ thể) + should/ought to/must/need to + V.",
        "Mức độ: must (bắt buộc) > should/ought to (nên) > could/might (gợi ý nhẹ).",
        "Đa dạng chủ thể: governments, policymakers, schools, parents, individuals.",
        "Lưu ý: ought to + V; tránh lặp \"should\" quá nhiều trong một đoạn."
      ],
      phrases: [
        "Governments should + V ...",
        "Schools ought to + V ...",
        "Individuals must take responsibility for + Ving ...",
        "Policymakers need to + V ..."
      ],
      examples: [
        "Governments should invest more in renewable energy to combat climate change.",
        "Schools ought to teach students how to evaluate information critically.",
        "Individuals must take responsibility for reducing their own carbon footprint.",
        "Parents should limit the amount of time their children spend on screens.",
        "Employers ought to provide flexible working arrangements to improve productivity.",
        "Policymakers need to address the root causes of poverty rather than its symptoms.",
        "Cities must develop efficient public transport systems to ease congestion.",
        "The media should report news accurately instead of chasing sensational headlines.",
        "Universities ought to make higher education more affordable for disadvantaged students.",
        "Communities should work together to support vulnerable members of society."
      ],
      sample: "Governments should not bear the burden of solving environmental problems alone; individuals must also play their part.\nFor example, citizens ought to recycle diligently and reduce waste, while companies need to adopt more sustainable practices."
    }
  },
  {
    id: "s2_14",
    module: "sentences",
    topic: "s-solution",
    band: "b7",
    type: "structure",
    tags: ["solution", "passive", "recommendation", "should be"],
    title: "Khuyến nghị bị động: \"X should be introduced/implemented\"",
    ans: {
      summary: "Dùng thể bị động khi muốn nhấn mạnh GIẢI PHÁP/HÀNH ĐỘNG hơn là người thực hiện. Phổ biến trong văn học thuật vì khách quan, trang trọng. \"should be + V3\", \"must be + V3\", \"could be + V3\" (band 7).",
      points: [
        "FORM: [Giải pháp/N] + should/must/could + be + V3.",
        "Dùng khi chủ thể hành động không quan trọng hoặc đã ngầm hiểu.",
        "Đa dạng động từ: introduced, implemented, enforced, established, promoted, banned, regulated.",
        "Tránh lạm dụng bị động liên tục; xen kẽ với câu chủ động."
      ],
      phrases: [
        "Stricter regulations should be introduced ...",
        "More resources must be allocated to + N ...",
        "X could be promoted through + N ..."
      ],
      examples: [
        "Stricter regulations should be introduced to limit industrial emissions.",
        "More funding must be allocated to public healthcare in rural areas.",
        "Single-use plastics should be banned to protect marine ecosystems.",
        "Financial education could be incorporated into the school curriculum.",
        "Heavier penalties should be imposed on companies that violate environmental laws.",
        "Public awareness campaigns should be launched to promote healthier lifestyles.",
        "Greater investment must be made in affordable housing for young families.",
        "Renewable energy projects should be subsidised by the government.",
        "Stronger measures must be taken to combat the spread of online misinformation.",
        "Vocational training programmes could be expanded to reduce youth unemployment."
      ],
      sample: "To tackle traffic congestion, congestion charges should be introduced in city centres and the revenue reinvested in public transport.\nAt the same time, cycling lanes must be expanded so that commuters are given a genuine alternative to driving."
    }
  },
  {
    id: "s2_15",
    module: "sentences",
    topic: "s-solution",
    band: "b8",
    type: "structure",
    tags: ["solution", "imperative", "subjunctive", "it is essential that"],
    title: "\"It is imperative/essential that S (should) V\" (giả định)",
    ans: {
      summary: "Cấu trúc giả định (subjunctive) trang trọng nhất để nhấn mạnh tính CẤP THIẾT của một hành động. Sau các tính từ như imperative, essential, vital, crucial, động từ ở dạng NGUYÊN THỂ (bare infinitive). Dấu hiệu band 8.",
      points: [
        "FORM: It is + imperative/essential/vital/crucial + that + S + (should) + V(nguyên thể).",
        "Dạng giả định: bỏ \"should\", động từ luôn ở nguyên thể (kể cả ngôi thứ 3): that he be, that the government invest.",
        "Cùng nhóm động từ: recommend/suggest/demand/insist/require + that + S + V.",
        "Lưu ý: KHÔNG thêm \"s\" và KHÔNG chia thì cho động từ sau \"that\"."
      ],
      phrases: [
        "It is imperative that + S + V ...",
        "It is essential that + S + be + V3 ...",
        "Experts recommend that + S + V ..."
      ],
      examples: [
        "It is imperative that governments act now to curb greenhouse gas emissions.",
        "It is essential that every child have access to quality education regardless of background.",
        "It is vital that the healthcare system be adequately funded to cope with an ageing population.",
        "It is crucial that companies be held accountable for the environmental damage they cause.",
        "Experts recommend that schools place greater emphasis on emotional wellbeing.",
        "It is imperative that strict laws be enforced to protect endangered species.",
        "It is essential that young people be taught how to manage their finances responsibly.",
        "The committee demanded that the new policy be reviewed before its implementation.",
        "It is vital that public transport be made both affordable and reliable.",
        "It is crucial that international agreements on climate change be honoured by all nations."
      ],
      sample: "It is imperative that policymakers treat the housing shortage as a national priority.\nMany economists insist that the government invest in social housing and that planning regulations be relaxed so that more homes can be built quickly."
    }
  },
  {
    id: "s2_16",
    module: "sentences",
    topic: "s-solution",
    band: "b7",
    type: "structure",
    tags: ["solution", "by ving", "means", "purpose"],
    title: "\"By + Ving, ...\" chỉ phương tiện / cách thức giải quyết",
    ans: {
      summary: "Dùng \"By + Ving\" để diễn đạt PHƯƠNG TIỆN đạt được kết quả - cực kỳ hữu ích khi giải thích một giải pháp HOẠT ĐỘNG NHƯ THẾ NÀO. Kết hợp với \"this would\" để nêu hệ quả tích cực (band 7).",
      points: [
        "FORM: By + Ving, S + can/will/would + V (chỉ cách thức đạt mục tiêu).",
        "Biến thể chỉ mục đích: in order to + V; so as to + V; so that + S + V.",
        "Có thể đặt giữa câu: S can achieve X by + Ving.",
        "Lưu ý: sau \"by\" luôn là danh động từ (Ving), không phải nguyên thể."
      ],
      phrases: [
        "By + Ving, governments can + V ...",
        "By doing so, S + would + V ...",
        "... in order to + V / so that + S + V ..."
      ],
      examples: [
        "By investing in renewable energy, governments can reduce their dependence on fossil fuels.",
        "By teaching critical thinking, schools can prepare students to resist misinformation.",
        "By offering tax breaks, the state can encourage companies to hire more young workers.",
        "By improving public transport, cities can ease congestion and cut air pollution.",
        "By raising awareness of healthy eating, authorities can lower the rate of obesity.",
        "By imposing stricter penalties, the government can deter potential offenders.",
        "By promoting recycling, communities can significantly reduce the amount of waste sent to landfill.",
        "By subsidising childcare, the state can make it easier for parents to return to work.",
        "By regulating social media, governments can limit the spread of harmful content.",
        "By preserving green spaces, cities can enhance both biodiversity and residents' wellbeing."
      ],
      sample: "By combining education with regulation, governments can tackle the obesity epidemic on two fronts.\nBy teaching children about nutrition and by taxing unhealthy products, authorities can gradually change the nation's eating habits for the better."
    }
  },

  // ============ s-define ============
  {
    id: "s2_17",
    module: "sentences",
    topic: "s-define",
    band: "b7",
    type: "structure",
    tags: ["define", "definition", "refers to", "is defined as"],
    title: "Định nghĩa khái niệm: \"X refers to / is defined as...\"",
    ans: {
      summary: "Khung câu chuẩn để ĐỊNH NGHĨA một thuật ngữ ở phần mở bài, giúp giám khảo thấy bạn hiểu rõ đề. \"refers to\", \"is defined as\", \"can be understood as\" là các biến thể trang trọng (band 7).",
      points: [
        "FORM: X + refers to / is defined as / can be described as + (danh từ/cụm danh từ).",
        "Biến thể: X is commonly understood to mean...; The term X describes...",
        "Sau \"refers to / is defined as\" thường là cụm danh từ.",
        "Dùng để paraphrase và làm rõ phạm vi của chủ đề trong introduction."
      ],
      phrases: [
        "X refers to ...",
        "X can be defined as ...",
        "The term X describes ...",
        "X is commonly understood as ..."
      ],
      examples: [
        "Globalisation refers to the increasing interconnection of economies and cultures around the world.",
        "Sustainable development can be defined as growth that meets present needs without compromising future generations.",
        "The term work-life balance describes the equilibrium between professional duties and personal life.",
        "Climate change refers to long-term shifts in temperatures and weather patterns caused largely by human activity.",
        "Urbanisation is defined as the steady movement of people from rural areas into cities.",
        "Cybercrime can be described as any criminal activity carried out using computers or the internet.",
        "The digital divide refers to the gap between those with access to technology and those without.",
        "Social mobility is commonly understood as the ability of individuals to improve their economic status.",
        "Renewable energy refers to power generated from sources that are naturally replenished, such as wind and sunlight.",
        "Gentrification can be defined as the transformation of poorer urban areas through an influx of wealthier residents."
      ],
      sample: "Globalisation refers to the growing flow of goods, people, and ideas across national borders.\nWhile it can be defined in purely economic terms, the phenomenon also has profound cultural and social dimensions that deserve careful consideration."
    }
  },
  {
    id: "s2_18",
    module: "sentences",
    topic: "s-define",
    band: "b7",
    type: "structure",
    tags: ["define", "relative clause", "defining", "which"],
    title: "Định nghĩa bằng mệnh đề quan hệ: \"X, which..., ...\"",
    ans: {
      summary: "Dùng mệnh đề quan hệ để GIẢI THÍCH hoặc bổ sung thông tin cho một khái niệm ngay trong câu, giúp câu phức và mạch lạc hơn. Phân biệt mệnh đề xác định (không phẩy) và không xác định (có phẩy) (band 7).",
      points: [
        "Mệnh đề KHÔNG xác định (giải thích thêm): X, which + V..., + (phần còn lại) - CÓ dấu phẩy.",
        "Mệnh đề xác định (giới hạn nghĩa): N + that/which + V... - KHÔNG dấu phẩy.",
        "which (vật), who (người), where (nơi), whose (sở hữu).",
        "Lưu ý: mệnh đề không xác định KHÔNG dùng \"that\"."
      ],
      phrases: [
        "X, which is often regarded as ..., ...",
        "..., a phenomenon that has + V3 ...",
        "..., which in turn leads to ..."
      ],
      examples: [
        "Social media, which has transformed the way we communicate, also poses serious risks to privacy.",
        "Renewable energy, which is generated from natural sources, offers a sustainable alternative to fossil fuels.",
        "Air pollution, which affects millions of city dwellers, is largely caused by vehicle emissions.",
        "Automation, which replaces human labour with machines, threatens many low-skilled jobs.",
        "Obesity, which has reached epidemic proportions in many countries, places a heavy burden on healthcare systems.",
        "The internet, which connects billions of people worldwide, has revolutionised access to information.",
        "Deforestation, which destroys vital habitats, contributes significantly to the loss of biodiversity.",
        "Remote working, which became widespread during the pandemic, has permanently changed office culture.",
        "Overpopulation, which strains natural resources, is one of the greatest challenges facing developing nations.",
        "Misinformation, which spreads rapidly on social platforms, can undermine public trust in institutions."
      ],
      sample: "Tourism, which is a major source of income for many countries, can also cause significant environmental harm.\nMass tourism, which brings millions of visitors to fragile sites each year, often leaves lasting damage that local communities struggle to repair."
    }
  },
  {
    id: "s2_19",
    module: "sentences",
    topic: "s-define",
    band: "b6",
    type: "structure",
    tags: ["define", "trend", "a growing number", "increasing"],
    title: "\"A growing/significant number of...\" (nêu xu hướng)",
    ans: {
      summary: "Khung câu mở đầu để giới thiệu một XU HƯỚNG đang gia tăng - rất hay dùng ở mở bài hoặc topic sentence. Đa dạng định lượng: a growing number of, an increasing proportion of, a significant minority (band 6-7).",
      points: [
        "FORM: A growing/significant/increasing number of + N(số nhiều) + V(số nhiều).",
        "Biến thể: An increasing proportion of...; A substantial majority/minority of...; More and more people...",
        "Lưu ý chia động từ số nhiều theo \"number of + N số nhiều\".",
        "Dùng để định lượng chủ thể một cách trang trọng, tránh lặp \"many people\"."
      ],
      phrases: [
        "A growing number of + N + V ...",
        "An increasing proportion of + N + V ...",
        "More and more people are + Ving ..."
      ],
      examples: [
        "A growing number of consumers are choosing to buy locally produced food.",
        "An increasing proportion of young people are delaying marriage to focus on their careers.",
        "A significant number of companies are now allowing their staff to work from home.",
        "More and more students are pursuing higher education abroad.",
        "A growing number of cities are investing in green infrastructure to combat pollution.",
        "An increasing number of patients are turning to alternative forms of medicine.",
        "A substantial proportion of the workforce is at risk of being replaced by automation.",
        "More and more families are struggling to afford housing in major cities.",
        "A growing number of governments are committing to ambitious carbon-reduction targets.",
        "An increasing number of children are spending the majority of their free time online."
      ],
      sample: "A growing number of people are abandoning their cars in favour of cycling and public transport.\nThis shift, driven by rising fuel costs and environmental awareness, suggests that attitudes towards sustainable travel are changing rapidly."
    }
  },
  {
    id: "s2_20",
    module: "sentences",
    topic: "s-define",
    band: "b7",
    type: "structure",
    tags: ["define", "trend", "sharp rise", "marked increase"],
    title: "\"There has been a sharp rise/marked increase in...\"",
    ans: {
      summary: "Khung câu mạnh để mô tả SỰ THAY ĐỔI về lượng (tăng/giảm) - đặc biệt hữu ích cho cả essay và Task 1. Kết hợp danh từ chỉ mức độ (sharp, marked, dramatic, steady) với danh từ thay đổi (rise, increase, decline, fall) (band 7).",
      points: [
        "FORM: There has been + a/an + (tính từ mức độ) + (rise/increase/decline/fall/surge) + in + N.",
        "Tính từ mức độ: sharp, marked, dramatic, significant, steady, gradual, slight.",
        "Có thể nêu nguyên nhân: ..., largely as a result of + N.",
        "Lưu ý dùng \"in\" sau danh từ thay đổi (increase IN, rise IN)."
      ],
      phrases: [
        "There has been a sharp rise in ...",
        "There has been a marked increase in ...",
        "Recent years have witnessed a dramatic decline in ..."
      ],
      examples: [
        "There has been a sharp rise in the number of people working remotely since the pandemic.",
        "There has been a marked increase in childhood obesity over the past two decades.",
        "There has been a dramatic surge in demand for electric vehicles in recent years.",
        "There has been a steady decline in the popularity of print newspapers.",
        "Recent years have witnessed a significant increase in mental health problems among teenagers.",
        "There has been a sharp rise in carbon emissions despite international agreements.",
        "There has been a gradual fall in crime rates following investment in community programmes.",
        "There has been a marked increase in the cost of living in most major cities.",
        "There has been a dramatic rise in the use of artificial intelligence across many industries.",
        "There has been a steady increase in the number of students enrolling in online courses."
      ],
      sample: "There has been a marked increase in the consumption of fast food, particularly among the young.\nThis rise, driven largely by aggressive marketing and busy lifestyles, helps explain the corresponding surge in diet-related illnesses."
    }
  },
  {
    id: "s2_21",
    module: "sentences",
    topic: "s-define",
    band: "b7",
    type: "structure",
    tags: ["define", "problem framing", "pressing issue"],
    title: "Nêu vấn đề: \"One of the most pressing issues is...\"",
    ans: {
      summary: "Khung câu để KHUNG HÓA một vấn đề nghiêm trọng ở mở bài hoặc đầu body - thể hiện thái độ phân tích. Dùng cấu trúc so sánh nhất + danh từ vấn đề (pressing issue, serious challenge, controversial topic) (band 7).",
      points: [
        "FORM: One of the most + [pressing/serious/controversial] + [issues/challenges/concerns] + (facing X) + is + ...",
        "Theo sau \"facing\" + đối tượng: facing modern society, facing today's youth.",
        "Biến thể: A major concern is...; Among the gravest challenges is...",
        "Lưu ý so sánh nhất + danh từ số nhiều, nhưng động từ chính chia số ít (\"One of... is\")."
      ],
      phrases: [
        "One of the most pressing issues facing ... is ...",
        "A major challenge confronting ... is ...",
        "Among the gravest concerns today is ..."
      ],
      examples: [
        "One of the most pressing issues facing modern society is the widening gap between rich and poor.",
        "One of the most serious challenges confronting governments today is climate change.",
        "A major concern in many developed countries is the rapid ageing of the population.",
        "One of the most controversial topics in education is whether examinations truly measure ability.",
        "Among the gravest threats to public health is the rise of antibiotic-resistant bacteria.",
        "One of the most pressing problems in large cities is the chronic shortage of affordable housing.",
        "A significant challenge facing young people today is the pressure created by social media.",
        "One of the most difficult issues for policymakers is balancing economic growth with environmental protection.",
        "Among the most urgent concerns of our time is the loss of biodiversity worldwide.",
        "One of the most divisive questions in modern politics is how to manage immigration fairly."
      ],
      sample: "One of the most pressing issues facing the modern world is the unsustainable way in which we consume natural resources.\nUnless this challenge is addressed, the consequences for both the environment and future generations could be devastating."
    }
  },

  // ============ s-cohesion ============
  {
    id: "s2_22",
    module: "sentences",
    topic: "s-cohesion",
    band: "b7",
    type: "template",
    tags: ["cohesion", "topic sentence", "paragraph opening"],
    title: "Câu chủ đề mạnh mở đầu body paragraph",
    ans: {
      summary: "Câu chủ đề (topic sentence) nêu rõ ý chính của đoạn ngay từ đầu - yếu tố then chốt của Coherence band 7+. Phải nêu được luận điểm chính sẽ được triển khai trong đoạn, không vòng vo.",
      points: [
        "FORM phổ biến: The most/A key + (argument/reason/benefit/drawback) + is that + S + V.",
        "Biến thể: There are several reasons why...; The first/main advantage of X is that...",
        "Câu chủ đề cần CỤ THỂ và DỰ BÁO nội dung của cả đoạn.",
        "Tránh mở đoạn bằng ví dụ; nêu luận điểm trước, ví dụ sau."
      ],
      phrases: [
        "The most compelling argument for ... is that ...",
        "One of the main benefits of ... is that ...",
        "There are several reasons why ...",
        "A further drawback of ... is that ..."
      ],
      examples: [
        "The most compelling argument in favour of renewable energy is that it produces no harmful emissions.",
        "One of the main benefits of studying abroad is that it broadens a student's cultural horizons.",
        "There are several reasons why people are increasingly choosing to live in cities.",
        "A key advantage of remote working is that it eliminates time-consuming commutes.",
        "The principal drawback of social media is that it can foster anxiety and low self-esteem.",
        "One of the strongest arguments for stricter gun laws is that they reduce the risk of violent crime.",
        "The most significant benefit of public transport is that it greatly reduces traffic congestion.",
        "A further reason for the decline in reading is that screens now compete for people's attention.",
        "One of the chief disadvantages of globalisation is that it can erode local cultures and traditions.",
        "The main reason childhood obesity is rising is that children lead increasingly sedentary lives."
      ],
      sample: "The most compelling argument for investing in early education is that it shapes a child's future for years to come.\nResearch consistently shows that children who attend quality preschools perform better academically and are more likely to succeed in later life."
    }
  },
  {
    id: "s2_23",
    module: "sentences",
    topic: "s-cohesion",
    band: "b7",
    type: "template",
    tags: ["cohesion", "transition", "turning to", "body paragraph"],
    title: "Chuyển ý giữa các đoạn body: \"Turning to...\"",
    ans: {
      summary: "Cụm chuyển tiếp giúp dẫn dắt người đọc từ đoạn này sang đoạn khác một cách mượt mà - quan trọng cho Coherence. \"Turning to\", \"With regard to\", \"As for\" giới thiệu khía cạnh mới (band 7).",
      points: [
        "FORM: Turning to + N, S + V; / With regard to + N, S + V.",
        "Biến thể: As for + N, ...; When it comes to + N, ...; Moving on to + N, ...",
        "Dùng để báo hiệu sự chuyển sang một khía cạnh hoặc quan điểm khác.",
        "Lưu ý: theo sau là danh từ/cụm danh từ, sau đó là dấu phẩy rồi mệnh đề đầy đủ."
      ],
      phrases: [
        "Turning to ..., ...",
        "With regard to ..., ...",
        "When it comes to ..., ...",
        "On the other hand, ..."
      ],
      examples: [
        "Turning to the economic effects, mass tourism can bring substantial income to local communities.",
        "With regard to education, technology has made learning more flexible and accessible than ever before.",
        "When it comes to health, a sedentary lifestyle is one of the greatest risks of office work.",
        "As for the environmental consequences, the burning of fossil fuels remains the primary concern.",
        "Moving on to the social impact, social media has fundamentally changed the way people interact.",
        "Turning to the question of cost, building a new high-speed railway requires enormous investment.",
        "With regard to crime, harsher sentences do not always deter potential offenders.",
        "When it comes to family life, longer working hours leave parents with little time for their children.",
        "As for the disadvantages, online learning can leave students feeling isolated and unmotivated.",
        "Turning to the role of government, stronger regulation is essential if pollution is to be controlled."
      ],
      sample: "Having examined the benefits of urbanisation, it is worth considering its darker side.\nTurning to the drawbacks, rapid urban growth often leads to overcrowding, pollution, and a shortage of affordable housing."
    }
  },
  {
    id: "s2_24",
    module: "sentences",
    topic: "s-cohesion",
    band: "b7",
    type: "template",
    tags: ["cohesion", "adding", "another consideration", "furthermore"],
    title: "Bổ sung luận điểm: \"Another key consideration is...\"",
    ans: {
      summary: "Khung câu để THÊM một luận điểm mới trong cùng một đoạn hoặc giữa các đoạn, giúp lập luận đầy đủ. Đa dạng hơn việc chỉ dùng \"Moreover/Furthermore\" đầu câu (band 7).",
      points: [
        "FORM: Another + (key/important) + (consideration/factor/aspect/benefit) + is + (that S + V / N).",
        "Biến thể: A further point worth noting is that...; Equally important is...; Added to this is...",
        "Dùng nối các ý cùng hướng (cùng ủng hộ hoặc cùng phản đối).",
        "Kết hợp với trạng từ liên kết: Moreover, Furthermore, In addition, What is more."
      ],
      phrases: [
        "Another key consideration is that ...",
        "A further point worth noting is that ...",
        "Added to this is the fact that ...",
        "Equally important is ..."
      ],
      examples: [
        "Another key consideration is that renewable energy creates thousands of new jobs.",
        "A further point worth noting is that online education removes geographical barriers to learning.",
        "Added to this is the fact that cars are a major source of urban air pollution.",
        "Equally important is the role that parents play in shaping their children's values.",
        "Another important factor is that an ageing population places growing pressure on healthcare systems.",
        "What is more, excessive screen time has been linked to poor sleep and reduced concentration.",
        "A further benefit worth mentioning is that public transport is far more energy-efficient than private cars.",
        "Another consideration is that strict immigration policies can deprive economies of needed workers.",
        "In addition, the rise of automation threatens to widen the gap between rich and poor.",
        "Equally significant is the fact that misinformation spreads faster than verified news online."
      ],
      sample: "Higher education clearly improves an individual's career prospects.\nAnother key consideration is that a well-educated population benefits society as a whole, since graduates tend to contribute more in taxes and are less likely to depend on state support."
    }
  },
  {
    id: "s2_25",
    module: "sentences",
    topic: "s-cohesion",
    band: "b8",
    type: "structure",
    tags: ["cohesion", "reference", "this", "such", "former latter"],
    title: "Tham chiếu liên kết: this trend / such measures / the former... the latter",
    ans: {
      summary: "Dùng từ tham chiếu (referencing) để nối câu mà không lặp từ - kỹ thuật cohesion tinh tế của band 8. \"this/these + danh từ tóm tắt\", \"such + N\", và \"the former... the latter\" thể hiện sự gắn kết cao.",
      points: [
        "this/these + danh từ khái quát (trend, issue, approach, development) để tóm lại ý trước.",
        "such + N: \"such measures\", \"such a situation\" để chỉ lại điều vừa nêu.",
        "the former (cái trước) ... the latter (cái sau): tham chiếu hai đối tượng đã nêu.",
        "Lưu ý: từ tham chiếu phải có tiền ngữ rõ ràng để tránh mơ hồ."
      ],
      phrases: [
        "This trend / This phenomenon / This development ...",
        "Such measures / Such an approach ...",
        "The former ... while the latter ...",
        "These factors combined ..."
      ],
      examples: [
        "More and more young people are moving abroad for work. This trend is draining many developing nations of their most talented citizens.",
        "Some governments have banned single-use plastics outright. Such measures, though controversial, have proved remarkably effective.",
        "Cities can either expand outwards or build upwards; the former consumes valuable farmland, while the latter creates densely populated neighbourhoods.",
        "Online platforms now host vast amounts of unverified content. This development poses a serious threat to informed public debate.",
        "Authorities have introduced congestion charges in several cities. Such a policy discourages unnecessary car journeys.",
        "Children today face both academic pressure and constant digital distraction; the former harms their wellbeing, while the latter undermines their focus.",
        "Many companies now offer remote work and flexible hours. These changes have transformed traditional notions of the workplace.",
        "Pollution levels in the capital have reached record highs. Such a situation demands immediate and decisive intervention.",
        "Governments may invest in either prevention or treatment; the former is cheaper in the long run, whereas the latter addresses immediate suffering.",
        "Tuition fees continue to rise year after year. This trend is putting higher education beyond the reach of poorer families."
      ],
      sample: "Some experts advocate stricter regulation, while others favour public education campaigns.\nThe former relies on enforcement, whereas the latter depends on changing attitudes; in reality, both approaches are needed if such a complex problem is to be solved."
    }
  },
  {
    id: "s2_26",
    module: "sentences",
    topic: "s-cohesion",
    band: "b7",
    type: "template",
    tags: ["cohesion", "conclusion", "in conclusion", "summary"],
    title: "Khung câu kết bài: \"In conclusion, ...\"",
    ans: {
      summary: "Khung câu mở đầu phần kết luận - tóm tắt lập trường và không thêm ý mới. Dùng các cụm báo hiệu kết bài và tóm lược (band 7). Nên paraphrase lại quan điểm, không lặp nguyên văn.",
      points: [
        "Cụm báo hiệu: In conclusion, To conclude, To sum up, On balance, All things considered.",
        "FORM: In conclusion, + (paraphrase quan điểm) + S + V.",
        "Kết bài KHÔNG đưa ý mới, chỉ tóm tắt và tái khẳng định.",
        "Có thể thêm dự báo/khuyến nghị: it is clear that...; unless..., ... will..."
      ],
      phrases: [
        "In conclusion, ...",
        "To sum up, ...",
        "On balance, ...",
        "All things considered, it is clear that ..."
      ],
      examples: [
        "In conclusion, although technology brings undeniable benefits, its drawbacks must not be ignored.",
        "To sum up, governments and individuals must work together if climate change is to be addressed effectively.",
        "On balance, the advantages of studying abroad clearly outweigh the disadvantages.",
        "All things considered, education is the most powerful tool for reducing inequality.",
        "In conclusion, while urbanisation drives economic growth, it also creates serious social challenges.",
        "To conclude, it is evident that prevention is far more effective than cure when it comes to public health.",
        "On balance, the benefits of renewable energy far outweigh the costs of the transition.",
        "All things considered, stricter regulation appears to be the most realistic solution to online misinformation.",
        "In conclusion, unless decisive action is taken now, future generations will pay a heavy price.",
        "To sum up, a balanced approach that combines economic development with environmental protection is essential."
      ],
      sample: "In conclusion, while there are valid arguments on both sides, the evidence suggests that the benefits of public transport investment far outweigh its costs.\nUnless cities act decisively, congestion and pollution will continue to undermine the quality of urban life."
    }
  },
  {
    id: "s2_27",
    module: "sentences",
    topic: "s-cohesion",
    band: "b7",
    type: "template",
    tags: ["cohesion", "introduction", "background", "thesis"],
    title: "Khung mở bài: bối cảnh + luận điểm (thesis)",
    ans: {
      summary: "Khung mở bài hai phần: câu nền (background paraphrasing đề bài) + câu luận điểm (thesis nêu lập trường/hướng triển khai). Mở bài rõ ràng giúp định hướng cả bài (band 7).",
      points: [
        "Câu nền: paraphrase đề bài - It is often argued that...; In recent years, X has become...",
        "Câu luận điểm: This essay will argue that...; In my view,...; While X, Y.",
        "Tránh chép lại nguyên văn đề bài; phải paraphrase.",
        "Nêu rõ lập trường nếu đề hỏi opinion; nêu hướng triển khai nếu đề discussion."
      ],
      phrases: [
        "It is often argued that ...",
        "In recent years, ... has become an increasingly controversial issue.",
        "This essay will argue that ...",
        "While some believe ..., others contend that ..."
      ],
      examples: [
        "In recent years, the question of whether university education should be free has sparked heated debate.",
        "It is often argued that technology has made our lives easier, yet some believe it has done more harm than good.",
        "The rapid growth of social media has transformed the way people communicate and share information.",
        "While some people believe that economic growth should be the priority, others argue that the environment must come first.",
        "Over the past few decades, the number of people living in cities has risen dramatically.",
        "There is an ongoing debate about whether governments or individuals should bear responsibility for public health.",
        "In today's globalised world, the dominance of English as an international language is a subject of considerable controversy.",
        "It is widely believed that punishment is the most effective way to reduce crime, although this view is increasingly challenged.",
        "The role of the family in raising well-adjusted children has long been a topic of discussion.",
        "As automation becomes more advanced, concerns about the future of human employment continue to grow."
      ],
      sample: "In recent years, the rise of remote working has fundamentally altered the traditional workplace.\nWhile some argue that this shift improves productivity and work-life balance, others worry about its effect on collaboration; this essay will argue that the benefits ultimately outweigh the drawbacks."
    }
  },
  {
    id: "s2_28",
    module: "sentences",
    topic: "s-cohesion",
    band: "b8",
    type: "structure",
    tags: ["cohesion", "concession", "while", "although", "balanced"],
    title: "Câu nhượng bộ cân bằng: \"While X, Y\" / \"Although...\"",
    ans: {
      summary: "Câu nhượng bộ thừa nhận quan điểm đối lập rồi khẳng định lập trường của mình - dấu hiệu tư duy cân bằng, sắc thái band 8. Dùng While/Although/Despite để tăng độ phức và mạch lạc.",
      points: [
        "FORM 1: While/Although + S + V (ý nhượng bộ), S + V (ý chính/lập trường).",
        "FORM 2: Despite/In spite of + N/Ving (ý nhượng bộ), S + V.",
        "Đặt lập luận YẾU ở mệnh đề nhượng bộ, lập luận MẠNH ở mệnh đề chính.",
        "Lưu ý: Despite/In spite of + danh từ/Ving (KHÔNG + mệnh đề)."
      ],
      phrases: [
        "While it is true that ..., ...",
        "Although ..., it is undeniable that ...",
        "Despite + N, S + V ...",
        "Admittedly, ..., yet ..."
      ],
      examples: [
        "While tourism undoubtedly boosts the economy, it can also place a heavy strain on local resources.",
        "Although automation may eliminate certain jobs, it also creates new opportunities in emerging industries.",
        "Despite the convenience of fast food, its long-term effects on health are deeply worrying.",
        "While it is true that social media connects people, it can also leave them feeling more isolated.",
        "Although nuclear power is controversial, it remains one of the cleanest sources of large-scale energy.",
        "Despite significant investment in education, literacy rates in some regions remain disappointingly low.",
        "While stricter laws may deter some criminals, they do little to address the root causes of crime.",
        "Although globalisation has brought economic benefits, it has also threatened many local cultures.",
        "Despite the obvious advantages of remote working, it can blur the boundary between work and home life.",
        "While young people are highly skilled with technology, they often lack the patience for deep reading."
      ],
      sample: "While the convenience of private cars is undeniable, their environmental cost can no longer be ignored.\nAlthough public transport requires significant investment, it offers a far more sustainable solution to the problem of urban congestion."
    }
  }
];
