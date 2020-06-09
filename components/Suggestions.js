import React from 'react';
import { useRouter } from 'next/router';

export default function Suggestions({ array, positionTop = null, width = null }) {
  if (!array) return null;
  if (array.length < 1) return null;
  const router = useRouter();

  function goTitle(e) {
    router.push('/title/' + e.target.innerHTML);
  }

  return (
    <ul style={{ top: positionTop, width: width }}>
      {array.map((e) => (
        <li
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              goTitle(e);
            }
          }}
          tabIndex='0'
          key={e}
          onClick={(e) => goTitle(e)}>
          {e}
        </li>
      ))}

      <style jsx>{`
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
