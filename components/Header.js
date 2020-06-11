import React from 'react';
import Search from './Search';
import Link from 'next/link';

function Header({ refresh }) {
  return (
    <div className='header-container'>
      <h1>
        <Link href='/'>
          <a>Tv Series Chart</a>
        </Link>
      </h1>
      <Search styleName='header' positionTop='2.225rem' refresh={true}></Search>
      <style jsx>{`
        .header-container {
          height: 4rem;
          position: relative;
          grid-area: header;
          display: flex;
          align-items: center;
          padding: 0 1rem;
          box-shadow: inset 0 -1px var(--border-color);
        }
        h1 {
          color: var(--text-color);
          font-size: 1.5rem;
          font-weight: 700;
          flex: 1;
        }
        span {
          font-size: 1.5rem;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}

export default Header;
