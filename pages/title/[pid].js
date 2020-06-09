import { useState, useEffect } from 'react';
import Chart from '../../components/Chart/Chart';
import Header from '../../components/Chart/Header';

export default function TvSeries({ info, seasonData }) {
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [scale, setScale] = useState(false);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <>
      <div className='layout'>
        <Header
          info={info}
          setSelectedSeason={setSelectedSeason}
          selectedSeason={selectedSeason}
          scale={scale}
          setScale={setScale}></Header>
        <Chart scale={scale} seasonData={seasonData} selectedSeason={selectedSeason}></Chart>
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
export async function getServerSideProps(context) {
  const searchParam = context.params.pid;

  const url = [`http://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&t=${searchParam}`];

  const res = await fetch(url);
  const tvSeries = await res.json();

  const totalSeasons = tvSeries.totalSeasons;

  const rawSeasonsData = [];

  const seasonUrl = [];
  for (let i = 1; i <= totalSeasons; i++) {
    seasonUrl.push(`${url}&season=${i}`);
  }

  await Promise.all(
    seasonUrl.map(async (seasonUrl) => {
      const response = await fetch(seasonUrl);
      const result = await response.json();
      rawSeasonsData.push(result);
    })
  );

  function compare(a, b) {
    if (parseInt(a.Season) < parseInt(b.Season)) {
      return -1;
    }
    if (parseInt(a.Season) > parseInt(b.Season)) {
      return 1;
    }
    return 0;
  }
  rawSeasonsData.sort(compare);

  let counter = 1;
  rawSeasonsData.forEach((s) => {
    s.Episodes.forEach((e) => {
      e.episodeWithSeason = 'S' + s.Season + 'E' + e.Episode;
      e.episodeNumber = counter;
      counter++;
    });
  });

  return { props: { info: tvSeries, seasonData: rawSeasonsData } };
}
