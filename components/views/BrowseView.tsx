'use client';
import { useStore } from '@/lib/store';
import { MODULES, TOPICS } from '@/lib/data';
import CardBody from '@/components/CardBody';
import type { Band, CardType } from '@/lib/types';

const BAND_META: Record<Band, { label: string; color: string }> = {
  b6: { label: 'BAND 6+', color: '#15803d' },
  b7: { label: 'BAND 7+', color: '#b45309' },
  b8: { label: 'BAND 8+', color: '#b91c1c' },
};

const TYPE_LABELS: Record<CardType, string> = {
  concept: 'Khái niệm',
  vocab: 'Từ vựng',
  structure: 'Cấu trúc',
  template: 'Template',
  sample: 'Bài mẫu',
};

export default function BrowseView() {
  const { state, dispatch, filtered } = useStore();
  const s = state;
  const list = filtered();

  const browseTitle = s.topic
    ? TOPICS.find(t => t.id === s.topic)?.label ?? ''
    : (s.module === 'all' ? 'Tất cả thẻ' : MODULES.find(t => t.id === s.module)?.label ?? '');

  const chip = (active: boolean) => ({
    fontSize: 12, padding: '4px 11px', borderRadius: 20, cursor: 'pointer',
    border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? '#fff' : 'var(--muted)',
  } as React.CSSProperties);

  const BANDS: Band[] = ['b6', 'b7', 'b8'];
  const TYPES: CardType[] = ['concept', 'vocab', 'structure', 'template', 'sample'];

  return (
    <div style={{ padding: '24px 28px 64px', maxWidth: 920, width: '100%', margin: '0 auto' }}>
      <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 24, letterSpacing: '-.02em', marginBottom: 4 }}>
        {browseTitle}
      </div>
      <div style={{ color: 'var(--muted)', fontSize: 13.5, marginBottom: 18 }}>{list.length} thẻ học</div>

      {/* Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', marginBottom: 22 }}>
        <span style={{ fontSize: 11, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.04em', marginRight: 2 }}>Band</span>
        {BANDS.map(d => (
          <div key={d} onClick={() => dispatch({ type: 'TOGGLE_BAND', band: d })} style={chip(s.bands.includes(d))}>
            {BAND_META[d].label}
          </div>
        ))}
        <span style={{ width: 1, height: 18, background: 'var(--border)', margin: '0 6px', display: 'inline-block' }} />
        <span style={{ fontSize: 11, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.04em', marginRight: 2 }}>Loại</span>
        {TYPES.map(t => (
          <div key={t} onClick={() => dispatch({ type: 'TOGGLE_TYPE', ctype: t })} style={chip(s.types.includes(t))}>
            {TYPE_LABELS[t]}
          </div>
        ))}
      </div>

      {list.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {list.map(item => {
            const bm = BAND_META[item.band];
            const mst = s.mastery[item.id] || 'new';
            const expanded = !!s.expanded[item.id];
            const mLabel = { new: '', learning: '↻ Đang ôn', mastered: '✓ Đã thuộc' }[mst];
            const mColor = { new: 'var(--faint)', learning: 'var(--warn)', mastered: 'var(--good)' }[mst];
            const moduleColor = MODULES.find(tr => tr.id === item.module)?.color ?? 'var(--accent)';
            const btnBase: React.CSSProperties = {
              height: 36, padding: '0 14px', borderRadius: 9,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 5, cursor: 'pointer', fontSize: 12.5, fontWeight: 600,
            };
            const topicLabel = TOPICS.find(t => t.id === item.topic)?.label ?? item.topic;

            return (
              <div key={item.id} style={{
                background: 'var(--panel)',
                border: '1px solid var(--border)',
                borderLeft: `3px solid ${moduleColor}`,
                borderRadius: 14, padding: '18px 20px',
              }}>
                {/* Meta row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: 10, fontWeight: 600, letterSpacing: '.03em',
                    padding: '2px 8px', borderRadius: 5,
                    border: `1px solid ${bm.color}`, color: bm.color,
                  }}>{bm.label}</span>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>
                    {TYPE_LABELS[item.type]} · {topicLabel}
                  </span>
                  <span style={{ flex: 1 }} />
                  {mLabel && <span style={{ fontSize: 11, fontWeight: 600, color: mColor }}>{mLabel}</span>}
                </div>

                {/* Title */}
                <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 16.5, lineHeight: 1.42, letterSpacing: '-.01em' }}>
                  {item.title}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                  {item.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 11, color: 'var(--muted)',
                      background: 'var(--soft)', padding: '2px 8px',
                      borderRadius: 5, fontFamily: "'JetBrains Mono'",
                    }}>#{tag}</span>
                  ))}
                </div>

                {/* Body */}
                {expanded && (
                  <div style={{
                    marginTop: 16, paddingTop: 16,
                    borderTop: '1px solid var(--border)',
                    animation: 'ip-rise .25s ease',
                  }}>
                    <CardBody ans={item.ans} />
                  </div>
                )}

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                  <div
                    onClick={() => dispatch({ type: 'TOGGLE_EXPANDED', id: item.id })}
                    style={{
                      ...btnBase, flex: 1,
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
                    }}
                  >
                    {expanded ? '× Ẩn nội dung' : '👁 Xem nội dung'}
                  </div>
                  <div
                    onClick={() => dispatch({ type: 'SET_MASTERY', id: item.id, status: mst === 'learning' ? 'new' : 'learning' })}
                    style={{
                      ...btnBase,
                      ...(mst === 'learning'
                        ? { background: 'var(--warn)', color: '#fff', border: '1px solid var(--warn)' }
                        : { border: '1px solid var(--border)', color: 'var(--muted)' }),
                    }}
                  >
                    ↻ Ôn lại
                  </div>
                  <div
                    onClick={() => dispatch({ type: 'SET_MASTERY', id: item.id, status: mst === 'mastered' ? 'new' : 'mastered' })}
                    style={{
                      ...btnBase,
                      ...(mst === 'mastered'
                        ? { background: 'var(--good)', color: '#fff', border: '1px solid var(--good)' }
                        : { border: '1px solid var(--border)', color: 'var(--muted)' }),
                    }}
                  >
                    ✓ Đã thuộc
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--faint)' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>⌕</div>
          <div style={{ fontSize: 15 }}>Không có thẻ nào khớp bộ lọc.</div>
        </div>
      )}
    </div>
  );
}
