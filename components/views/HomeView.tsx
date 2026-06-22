'use client';
import { useStore } from '@/lib/store';
import { MODULES, TOPICS, CARDS } from '@/lib/data';

export default function HomeView() {
  const { state, dispatch, startStudy } = useStore();
  const s = state;

  const total = CARDS.length;
  const masteredCount = CARDS.filter(q => s.mastery[q.id] === 'mastered').length;
  const learningCount = CARDS.filter(q => s.mastery[q.id] === 'learning').length;
  const dueCount = total - masteredCount;

  const moduleCards = MODULES.map(mod => {
    const items = CARDS.filter(d => d.module === mod.id);
    const mast = items.filter(d => s.mastery[d.id] === 'mastered').length;
    const pct = items.length ? Math.round((mast / items.length) * 100) : 0;
    return { ...mod, total: items.length, mastered: mast, pct };
  });

  const topicBars = TOPICS.map(t => {
    const items = CARDS.filter(d => d.topic === t.id);
    const mast = items.filter(d => s.mastery[d.id] === 'mastered').length;
    const pct = items.length ? Math.round((mast / items.length) * 100) : 0;
    const moduleColor = MODULES.find(tr => tr.id === t.module)?.color ?? 'var(--accent)';
    return { ...t, pct, frac: `${mast}/${items.length}`, color: moduleColor, count: items.length };
  }).filter(t => t.count > 0);

  const weakTopics = [...topicBars]
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 5)
    .map(t => ({
      ...t,
      weakColor: t.pct < 40 ? 'var(--bad)' : t.pct < 70 ? 'var(--warn)' : 'var(--good)',
    }));

  return (
    <div style={{ padding: '36px 28px 64px', maxWidth: 1080, width: '100%', margin: '0 auto' }}>
      <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 30, letterSpacing: '-.02em', marginBottom: 6 }}>
        Luyện IELTS Writing của bạn
      </div>
      <div style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 28 }}>
        Tổng <b style={{ color: 'var(--fg)' }}>{total}</b> thẻ · {masteredCount} đã thuộc · {learningCount} đang ôn
      </div>

      {/* Module cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 16, marginBottom: 32 }}>
        {moduleCards.map(tc => (
          <div
            key={tc.id}
            onClick={() => dispatch({ type: 'SET_MODULE', module: tc.id })}
            style={{
              background: 'var(--panel)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 20, cursor: 'pointer',
              display: 'flex', gap: 16, alignItems: 'center',
            }}
          >
            <div style={{
              width: 64, height: 64, flexShrink: 0, borderRadius: '50%',
              background: `conic-gradient(${tc.color} ${tc.pct * 3.6}deg, var(--soft) 0)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'var(--panel)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 14, color: tc.color,
              }}>
                {tc.pct}%
              </div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 15, marginBottom: 3 }}>
                {tc.label}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>
                {tc.mastered} / {tc.total} đã thuộc
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
        {/* Topic bars */}
        <div>
          <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 14, marginBottom: 12, color: 'var(--muted)' }}>
            Tiến độ theo chủ đề
          </div>
          <div style={{
            background: 'var(--panel)', border: '1px solid var(--border)',
            borderRadius: 16, padding: '8px 18px', maxHeight: 460, overflowY: 'auto',
          }}>
            {topicBars.map(tb => (
              <div
                key={tb.id}
                onClick={() => dispatch({ type: 'SET_TOPIC', topic: tb.id })}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '11px 0',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: 2, background: tb.color, flexShrink: 0, display: 'inline-block' }} />
                <span style={{ fontSize: 13.5, width: 170, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {tb.label}
                </span>
                <div style={{ flex: 1, height: 7, background: 'var(--soft)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${tb.pct}%`, height: '100%', background: tb.color, borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 12, color: 'var(--faint)', width: 44, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                  {tb.frac}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right col */}
        <div>
          <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 14, marginBottom: 12, color: 'var(--muted)' }}>
            Nên ôn tiếp
          </div>
          {/* Study CTA */}
          <div
            onClick={startStudy}
            style={{
              background: 'var(--accent)', borderRadius: 16,
              padding: 20, color: '#fff', cursor: 'pointer', marginBottom: 14,
            }}
          >
            <div style={{ fontSize: 12, opacity: .8, marginBottom: 6 }}>CHẾ ĐỘ FLASHCARD</div>
            <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 19, lineHeight: 1.25, marginBottom: 12 }}>
              Học {dueCount} thẻ chưa thuộc
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, fontWeight: 600,
              background: 'rgba(255,255,255,.18)', padding: '7px 13px', borderRadius: 8,
            }}>
              Bắt đầu →
            </div>
          </div>

          {/* Weak topics */}
          <div style={{
            background: 'var(--panel)', border: '1px solid var(--border)',
            borderRadius: 16, padding: '16px 18px',
          }}>
            <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 10 }}>Chủ đề còn yếu</div>
            {weakTopics.map(wt => (
              <div
                key={wt.id}
                onClick={() => dispatch({ type: 'SET_TOPIC', topic: wt.id })}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '7px 0', cursor: 'pointer', fontSize: 13.5,
                }}
              >
                <span>{wt.label}</span>
                <span style={{ fontSize: 12, color: wt.weakColor, fontWeight: 600 }}>{wt.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
