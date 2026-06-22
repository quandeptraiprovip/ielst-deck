'use client';
import { useStore } from '@/lib/store';
import { MODULES, TOPICS, CARDS } from '@/lib/data';

export default function Sidebar() {
  const { state, dispatch } = useStore();
  const s = state;

  const navGroups = MODULES.map(mod => ({
    ...mod,
    topics: TOPICS.filter(t => t.module === mod.id).map(t => {
      const items = CARDS.filter(d => d.topic === t.id);
      const mast = items.filter(d => s.mastery[d.id] === 'mastered').length;
      const active = s.topic === t.id && s.view === 'browse';
      return { ...t, masteredOfTotal: `${mast}/${items.length}`, active };
    }),
  }));

  const masteredCount = CARDS.filter(q => s.mastery[q.id] === 'mastered').length;
  const total = CARDS.length;

  return (
    <aside style={{
      width: 276, flexShrink: 0,
      borderRight: '1px solid var(--border)',
      background: 'var(--panel)',
      height: '100vh', position: 'sticky', top: 0,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ padding: '20px 18px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 15,
          }}>W</div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 15, letterSpacing: '-.01em' }}>
              IELTS Writing Deck
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 1 }}>Task 1 · Task 2 · Vocab · Grammar</div>
          </div>
        </div>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--faint)', fontSize: 13,
          }}>⌕</span>
          <input
            value={s.search}
            onChange={e => dispatch({ type: 'SET_SEARCH', search: e.target.value })}
            placeholder="Tìm từ vựng, cấu trúc, mẹo…"
            style={{
              width: '100%', height: 36,
              border: '1px solid var(--border)',
              borderRadius: 9,
              background: 'var(--bg)', color: 'var(--fg)',
              padding: '0 12px 0 30px', fontSize: 13,
              fontFamily: 'inherit', outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '4px 10px 16px' }}>
        {/* Home row */}
        <div
          onClick={() => dispatch({ type: 'SET_VIEW', view: 'home' })}
          style={{
            display: 'flex', alignItems: 'center', gap: 9,
            padding: '8px 10px', borderRadius: 8, cursor: 'pointer',
            fontSize: 13.5, fontWeight: 600,
            ...(s.view === 'home'
              ? { background: 'var(--accent-soft)', color: 'var(--accent)' }
              : { color: 'var(--fg)' }),
          }}
        >
          <span style={{ fontSize: 14 }}>◎</span>
          <span>Trang chủ / Dashboard</span>
        </div>

        {navGroups.map(grp => (
          <div key={grp.id}>
            <div
              onClick={() => dispatch({ type: 'SET_MODULE', module: grp.id })}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '14px 10px 6px',
                fontSize: 11, fontWeight: 600, letterSpacing: '.04em',
                textTransform: 'uppercase', color: 'var(--muted)', cursor: 'pointer',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: 3, background: grp.color, display: 'inline-block' }} />
              {grp.label}
            </div>
            {grp.topics.map(t => (
              <div
                key={t.id}
                onClick={() => dispatch({ type: 'SET_TOPIC', topic: t.id })}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '7px 10px', borderRadius: 8, cursor: 'pointer', fontSize: 13.5,
                  ...(t.active
                    ? { background: 'var(--accent-soft)', color: 'var(--accent)', fontWeight: 600 }
                    : { color: 'var(--fg)' }),
                }}
              >
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {t.label}
                </span>
                <span style={{ fontSize: 11, color: 'var(--faint)', fontVariantNumeric: 'tabular-nums' }}>
                  {t.masteredOfTotal}
                </span>
              </div>
            ))}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>Đã thuộc</div>
          <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 17 }}>
            {masteredCount}{' '}
            <span style={{ fontSize: 12, color: 'var(--faint)', fontWeight: 500 }}>/ {total}</span>
          </div>
        </div>
        <div
          onClick={() => dispatch({ type: 'TOGGLE_DARK' })}
          title="Đổi giao diện"
          style={{
            width: 34, height: 34,
            border: '1px solid var(--border)',
            borderRadius: 9,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: 15, color: 'var(--muted)',
          }}
        >
          {s.darkLocal ? '☀' : '☾'}
        </div>
      </div>
    </aside>
  );
}
