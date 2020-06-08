import React from 'react';
import Dropdown from './Dropdown';
import QuestionMark from './QuestionMark';
import Search from './Search';

function Header({ totalSeasons, selectedSeason, setSelectedSeason }) {
  return (
    <div className='header-container'>
      <h1>
        Big Bang Theory | <span>{parseInt(selectedSeason) === 0 ? `All Seasons` : `Season ${selectedSeason}`}</span>
      </h1>
      <Dropdown
        totalSeasons={totalSeasons}
        setSelectedSeason={setSelectedSeason}
        selectedSeason={selectedSeason}></Dropdown>
      <style jsx>{`
        .header-container {
          grid-area: header;
          display: flex;
          align-items: center;
          padding: 0 1rem;
        }
        h1 {
          font-size: 1.825rem;
          flex: 1;
        }
        span {
          font-size: 1.825rem;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}

export default Header;
