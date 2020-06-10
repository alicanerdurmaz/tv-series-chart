import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Suggestions({ array, positionTop = null, refresh = false }) {
  if (!array) return null;
  if (array.length < 1) return null;
  const router = useRouter();

  return (
    <ul style={{ top: positionTop }}>
      {array.map((e) => (
        <li
          key={e}
          onClick={(event) => {
            if (refresh) {
              router.push('/chart?t=' + e);
              setTimeout(() => {
                router.reload('/chart?t=' + e);
              }, 20);
            } else {
              event.currentTarget.nextSibling?.firstChild?.click();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.currentTarget.nextSibling?.firstChild?.focus();
            }
            if (event.key === 'ArrowUp') {
              event.currentTarget.previousSibling?.firstChild?.focus();
            }
          }}>
          <Link href={{ pathname: '/chart', query: { t: e } }}>
            <a>{e}</a>
          </Link>
        </li>
      ))}

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
        ul {
          background: var(--bg-color-secondary);
          border-radius: 4px;
          position: absolute;
          z-index: 2;
          display: flex;
          flex-direction: column;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border: 1px solid var(--border-color);
          border-top: 0;
          margin: 0 auto;
          left: 0;
          right: 0;
        }
        li {
          color: var(--text-color);
          cursor: pointer;
          user-select: none;
          padding: 0.5rem 1rem;
          border-bottom: 1px solid var(--bg-color-secondary);
        }
        li:hover {
          background: #393e46;
        }
        li:focus-within {
          background: #393e46;
        }
      `}</style>
    </ul>
  );
}
