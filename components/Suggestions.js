import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Suggestions({ array, positionTop = null }) {
  if (!array) return null;
  if (array.length < 1) return null;

  return (
    <ul style={{ top: positionTop }}>
      {array.map((e) => (
        <li
          key={e}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.currentTarget.nextSibling?.firstChild?.focus();
            }
            if (e.key === 'ArrowUp') {
              e.currentTarget.previousSibling?.firstChild?.focus();
            }
          }}>
          <Link href='/title/[pid]' as={`/title/${e}`}>
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
          background: var(--bg-color);
          position: absolute;
          z-index: 2;
          display: flex;
          flex-direction: column;
          border: 1px solid black;
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
          background: var(--bg-color-secondary);
        }
      `}</style>
    </ul>
  );
}
