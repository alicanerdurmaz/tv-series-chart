import React from 'react';
import Dropdown from './Dropdown';

function Header({ totalSeasons, selectedSeason, setSelectedSeason }) {
  return (
    <div className='header-container'>
      <h1>Big Bang Theory</h1>
      <Dropdown
        totalSeasons={totalSeasons}
        setSelectedSeason={setSelectedSeason}
        selectedSeason={selectedSeason}></Dropdown>
      <style jsx>{`
        .header-container {
          grid-area: header;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        h1 {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}

export default Header;
