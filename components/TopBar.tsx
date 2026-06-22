'use client';
import { useStore } from '@/lib/store';
import { MODULES, TOPICS } from '@/lib/data';

export default function TopBar() {
  const { state, dispatch, startStudy } = useStore();
  const s = state;

  const moduleLabel = s.module === 'all' ? 'Tất cả' : MODULES.find(t => t.id === s.module)?.label ?? '';
  const topicLabel = s.topic ? TOPICS.find(t => t.id === s.topic)?.label ?? '' : '';

  let breadcrumb = 'Dashboard';
  if (s.view === 'study') breadcrumb = 'Học flashcard';
  else if (s.view === 'browse') breadcrumb = moduleLabel + (topicLabel ? ' / ' + topicLabel : '');

  const tab = (active: boolean) => ({
    padding: '6px 14px', borderRadius: 8, cursor: 'pointer',
    fontSize: 13, fontWeight: 600,
    ...(active
      ? { background: 'var(--panel)', color: 'var(--fg)', boxShadow: '0 1px 2px rgba(0,0,0,.08)' }
      : { color: 'var(--muted)' }),
  } as React.CSSProperties);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 5,
      background: 'color-mix(in srgb, var(--bg) 86%, transparent)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)',
      padding: '13px 28px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ flex: 1, minWidth: 0, fontSize: 13, color: 'var(--muted)' }}>{breadcrumb}</div>
        <div style={{
          display: 'flex', gap: 3,
          background: 'var(--soft)', borderRadius: 10, padding: 3,
        }}>
          <div onClick={() => dispatch({ type: 'SET_VIEW', view: 'home' })} style={tab(s.view === 'home')}>
            Dashboard
          </div>
          <div onClick={() => dispatch({ type: 'SET_VIEW', view: 'browse' })} style={tab(s.view === 'browse')}>
            Duyệt
          </div>
          <div onClick={() => startStudy()} style={tab(s.view === 'study')}>
            Học thẻ
          </div>
        </div>
      </div>
    </header>
  );
}
