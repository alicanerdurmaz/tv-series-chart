import React from 'react';
import Dropdown from './Dropdown';

function Header({ info, selectedSeason, setSelectedSeason }) {
  console.log(info);
  return (
    <div className='header-container'>
      <h1>
        {info.Title} | <span>{parseInt(selectedSeason) === 0 ? `All Seasons` : `Season ${selectedSeason}`}</span>
      </h1>
      <Dropdown
        totalSeasons={info.totalSeasons}
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
          font-size: 1.5rem;
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
