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
          margin-right: 2rem;
          user-select: none;
          font-weight: 600;
          border: none;
          background: #292b2f;
          border-radius: 4px;
          outline: none;
          font-family: 'Inter';
        }
      `}</style>
    </>
  );
};

export default ChangeScale;
