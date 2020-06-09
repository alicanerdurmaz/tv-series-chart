import React from 'react';
import Dropdown from './Dropdown';
import ChangeScale from './ChangeScale';
import Search from '../Search';

function Header({ info, selectedSeason, setSelectedSeason, scale, setScale }) {
  return (
    <div className='header-container'>
      <h1>
        {info.Title} | <span>{parseInt(selectedSeason) === 0 ? `All Seasons` : `Season ${selectedSeason}`}</span>
      </h1>
      <Search styleName='header' positionTop='2rem'></Search>
      <ChangeScale scale={scale} setScale={setScale} />
      <Dropdown
        totalSeasons={info.totalSeasons}
        setSelectedSeason={setSelectedSeason}
        selectedSeason={selectedSeason}></Dropdown>
      <style jsx>{`
        .header-container {
          position: relative;
          grid-area: header;
          display: flex;
          align-items: center;
          padding: 0 1rem;
        }
        h1 {
          font-size: 1.5rem;
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
