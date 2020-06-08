import { useState } from 'react';
import Chart from '../components/Chart/Chart';
import Header from '../components/Chart/Header';
import seasonData from '../seasonData';
import info from '../info';
export default function TvSeries() {
  const [selectedSeason, setSelectedSeason] = useState(0);

  const fakeSeasonData = seasonData();
  const fakeInfo = info();

  return (
    <>
      <div className='layout'>
        <Header
          totalSeasons={fakeInfo.totalSeasons}
          setSelectedSeason={setSelectedSeason}
          selectedSeason={selectedSeason}></Header>
        <Chart seasonData={fakeSeasonData} selectedSeason={selectedSeason}></Chart>
      </div>

      <style jsx>{`
        .layout {
          height: 100%;
          display: grid;
          grid-template-rows: 3rem 1fr 2rem;
          grid-template-areas: 'header' 'chart' 'footer';
        }
      `}</style>
    </>
  );
}
// export async function getServerSideProps(context) {
//   // const searchParam = context.params.id;
//   const searchParam = 'the big bang theory';
//   const url = [`http://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&t=${searchParam}`];

//   const res = await fetch(url[0]);
//   const tvSeries = await res.json();
//   const totalSeasons = tvSeries.totalSeasons;

//   const rawSeasonsData = [];

//   const seasonUrl = [];
//   for (let i = 1; i <= totalSeasons; i++) {
//     seasonUrl.push(`${url}&season=${i}`);
//   }

//   await Promise.all(
//     seasonUrl.map(async (seasonUrl) => {
//       const response = await fetch(seasonUrl);
//       const result = await response.json();
//       rawSeasonsData.push(result);
//     })
//   );

//   function compare(a, b) {
//     if (parseInt(a.Season) < parseInt(b.Season)) {
//       return -1;
//     }
//     if (parseInt(a.Season) > parseInt(b.Season)) {
//       return 1;
//     }
//     return 0;
//   }
//   rawSeasonsData.sort(compare);

//   let counter = 1;
//   rawSeasonsData.forEach((s) => {
//     s.Episodes.forEach((e) => {
//       e.episodeWithSeason = 'S' + s.Season + 'E' + e.Episode;
//       e.episodeNumber = counter;
//       counter++;
//     });
//   });

//   return { props: { info: tvSeries, seasonData: rawSeasonsData } };
// }
