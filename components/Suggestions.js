import React from 'react';
import Link from 'next/link';

export default function Suggestions({ array, positionTop = null, refresh = false }) {
  if (!array) return null;
  if (array.length < 1) return null;

  return (
    <ul style={{ top: positionTop }}>
      {array.map((e) => (
        <li
          key={e}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.currentTarget.nextSibling?.firstChild?.focus();
            }
            if (event.key === 'ArrowUp') {
              event.currentTarget.previousSibling?.firstChild?.focus();
            }
          }}>
          <Link href={`/chart/${e}`} prefetch={false}>
            <a className='link'>{e}</a>
          </Link>
        </li>
      ))}

      <style jsx>{`
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
          width: 100%;
          color: var(--text-color);
          cursor: pointer;
          user-select: none;
          border-bottom: 1px solid var(--bg-color-secondary);
        }
        .link {
          padding: 0.5rem 1rem;
          display: block;
          color: inherit;
          text-decoration: none;
          width: 100%;
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
