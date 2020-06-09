import React from 'react';
import Search from './Search';

function Form() {
  return (
    <>
      <h1>Tv Series Chart</h1>
      <Search styleName='home' positionTop='4rem' />
      <button>SEARCH</button>
      <style jsx>{`
        h1 {
          font-size: 3rem;
          color: var(--secondary-color);
        }
        button {
          width: 70%;
          color: var(--text-color);
          padding: 0.5rem;
          cursor: pointer;
          user-select: none;
          border: none;
          border-radius: 2px;
          font-weight: 600;
          background: -webkit-linear-gradient(to left, #c06c84, #6c5b7b, #355c7d); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #c06c84,
            #6c5b7b,
            #355c7d
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
    </>
  );
}

export default Form;
