'use client';
import { useStore } from '@/lib/store';
import { CARDS, TOPICS } from '@/lib/data';
import CardBody from '@/components/CardBody';
import type { Band } from '@/lib/types';

const BAND_META: Record<Band, { label: string; color: string }> = {
  b6: { label: 'BAND 6+', color: '#15803d' },
  b7: { label: 'BAND 7+', color: '#b45309' },
  b8: { label: 'BAND 8+', color: '#b91c1c' },
};

export default function StudyView() {
  const { state, dispatch } = useStore();
  const s = state;

  const studyList = s.studyIds.map(id => CARDS.find(d => d.id === id)).filter(Boolean) as typeof CARDS;
  const cur = studyList[s.studyIdx];
  const isDone = s.view === 'study' && (!cur || s.studyIdx >= studyList.length);

  if (isDone) {
    return (
      <div style={{ padding: '24px 28px 48px', maxWidth: 720, width: '100%', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
          <div style={{ fontSize: 46, marginBottom: 14 }}>✓</div>
          <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Xong phiên học!</div>
          <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 22 }}>Bạn đã đi hết các thẻ trong bộ này.</div>
          <div
            onClick={() => dispatch({ type: 'SET_VIEW', view: 'home' })}
            style={{
              display: 'inline-flex', padding: '11px 22px',
              background: 'var(--accent)', color: '#fff',
              borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 14,
            }}
          >
            Về Dashboard
          </div>
        </div>
      </div>
    );
  }

  if (!cur) return null;

  const bm = BAND_META[cur.band];
  const pct = Math.round((s.studyIdx / studyList.length) * 100);
  const topicLabel = TOPICS.find(t => t.id === cur.topic)?.label ?? cur.topic;

  function handleGood() {
    dispatch({ type: 'SET_MASTERY', id: cur.id, status: 'mastered' });
    dispatch({ type: 'STUDY_NEXT' });
  }
  function handleAgain() {
    dispatch({ type: 'SET_MASTERY', id: cur.id, status: 'learning' });
    dispatch({ type: 'STUDY_NEXT' });
  }

  return (
    <div style={{ padding: '24px 28px 48px', maxWidth: 720, width: '100%', margin: '0 auto' }}>
      {/* Progress header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ fontSize: 13, color: 'var(--muted)', fontVariantNumeric: 'tabular-nums' }}>
          Thẻ {s.studyIdx + 1} / {studyList.length}
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>{topicLabel}</div>
      </div>
      <div style={{ height: 7, background: 'var(--soft)', borderRadius: 4, overflow: 'hidden', marginBottom: 22 }}>
        <div style={{
          width: `${pct}%`, height: '100%',
          background: 'var(--accent)', borderRadius: 4,
          transition: 'width .3s ease',
        }} />
      </div>

      {/* Card */}
      <div
        onClick={() => dispatch({ type: 'TOGGLE_FLIP' })}
        style={{
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 18, padding: '32px 30px', minHeight: 320,
          cursor: 'pointer',
          boxShadow: '0 1px 2px rgba(0,0,0,.04)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 18 }}>
          <span style={{
            fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 5,
            border: `1px solid ${bm.color}`, color: bm.color,
          }}>{bm.label}</span>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>{topicLabel}</span>
        </div>

        <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 22, lineHeight: 1.4, letterSpacing: '-.01em' }}>
          {cur.title}
        </div>

        {s.studyFlipped ? (
          <div style={{
            marginTop: 22, paddingTop: 20,
            borderTop: '1px solid var(--border)',
            animation: 'ip-flip .3s ease',
          }}>
            <CardBody ans={cur.ans} />
          </div>
        ) : (
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--faint)', fontSize: 13 }}>
            <span style={{ fontSize: 16 }}>↻</span> Bấm vào thẻ để xem nội dung
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
        <div
          onClick={handleAgain}
          style={{
            flex: 1, height: 48, borderRadius: 12,
            border: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--fg)',
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600 }}>↻ Cần ôn lại</span>
        </div>
        <div
          onClick={handleGood}
          style={{
            flex: 1, height: 48, borderRadius: 12,
            background: 'var(--accent)', color: '#fff',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600 }}>✓ Đã thuộc</span>
        </div>
        <div
          onClick={() => dispatch({ type: 'STUDY_NEXT' })}
          style={{
            width: 96, height: 48, borderRadius: 12,
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--muted)', fontSize: 13,
          }}
        >
          Bỏ qua →
        </div>
      </div>
    </div>
  );
}
