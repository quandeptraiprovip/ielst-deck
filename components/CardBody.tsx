'use client';
import type { CardAnswer } from '@/lib/types';

function exampleColor(line: string): string | undefined {
  const t = line.trimStart();
  if (t.startsWith('✓') || t.startsWith('✔')) return 'var(--good)';
  if (t.startsWith('✗') || t.startsWith('✘') || t.startsWith('×')) return 'var(--bad)';
  return undefined;
}

export default function CardBody({ ans }: { ans: CardAnswer }) {
  return (
    <div>
      {ans.summary && (
        <div style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--fg)', marginBottom: ans.points.length ? 12 : 0 }}>
          {ans.summary}
        </div>
      )}

      {ans.points.length > 0 && (
        <ul style={{ margin: '0 0 4px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {ans.points.map((p, i) => (
            <li key={i} style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg)' }}>{p}</li>
          ))}
        </ul>
      )}

      {/* Phrases — band booster */}
      {ans.phrases && ans.phrases.length > 0 && (
        <div style={{
          marginTop: 14, background: 'var(--accent-soft)',
          borderRadius: 10, padding: '13px 16px',
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '.04em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 9,
          }}>✶ Cụm từ &amp; câu dùng được ngay</div>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {ans.phrases.map((k, i) => (
              <li key={i} style={{
                fontSize: 13.5, lineHeight: 1.55,
                fontFamily: "'JetBrains Mono', monospace",
                paddingLeft: 14, position: 'relative',
              }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>›</span>
                {k}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Examples */}
      {ans.examples && ans.examples.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
            Ví dụ
          </div>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {ans.examples.map((e, i) => (
              <li key={i} style={{ fontSize: 13.8, lineHeight: 1.6, color: exampleColor(e) ?? 'var(--fg)' }}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sample / template block */}
      {ans.sample && (
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
            Mẫu áp dụng
          </div>
          <div style={{
            background: 'var(--soft)',
            border: '1px solid var(--border)',
            borderLeft: '3px solid var(--accent)',
            borderRadius: 10,
            padding: '14px 16px',
            fontSize: 13.8, lineHeight: 1.7,
            whiteSpace: 'pre-wrap',
            fontStyle: 'italic',
            color: 'var(--fg)',
          }}>
            {ans.sample}
          </div>
        </div>
      )}
    </div>
  );
}
