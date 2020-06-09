import React from 'react';

const ChangeScale = ({ scale, setScale }) => {
  return (
    <>
      <button onClick={() => setScale(!scale)}>{scale ? 'Scale from 0 ' : 'Autoscale'}</button>

      <style jsx>{`
        button {
          cursor: pointer;
          color: var(--text-color);
          font-size: 1rem;
          padding: 0.5rem 1rem;
          margin: 0 2rem;
          user-select: none;
          font-family: Lato;
          font-weight: 700;
          border: none;
          background: var(--bg-color-secondary);
          border-radius: 4px;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default ChangeScale;
