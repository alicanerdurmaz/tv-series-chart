import { useState, useEffect } from 'react';

import Chart from '../components/Chart/Chart';
import Header from '../components/Chart/Header';
import useFetch from '../components/helpers/useFetch';

export default function ChartPage() {
  const { data, error } = useFetch('/api/getbytitle');

  const [selectedSeason, setSelectedSeason] = useState(0);
  const [scale, setScale] = useState(true);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  if (data && data.notFound) {
    return <h1>Bulunamadi</h1>;
  }

  return (
    <>
      <div className='layout'>
        <Header
          refresh={true}
          info={data ? data.info : null}
          setSelectedSeason={setSelectedSeason}
          selectedSeason={selectedSeason}
          scale={scale}
          setScale={setScale}></Header>
        <Chart scale={scale} seasonData={data ? data.seasonData : null} selectedSeason={selectedSeason}></Chart>
      </div>

      <style jsx>{`
        .layout {
          height: 100%;
          display: grid;
          grid-template-rows: 2rem 1fr 2rem;
          grid-template-areas: 'header' 'chart' 'footer';
        }
        @media screen and (min-width: 320px) and (max-width: 767px) {
          .layout {
            transform: rotate(-90deg);
            transform-origin: left top;

            width: 100vh;
            height: 100vw;

            width: calc(var(--vh, 1vh) * 100);

            overflow-x: hidden;
            position: absolute;
            top: 100%;
            left: 0;
          }
        }
      `}</style>
    </>
  );
}
