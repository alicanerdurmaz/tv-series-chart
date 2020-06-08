import Chart from '../components/tv-series/Chart';

export default function TvSeries() {
  return (
    <>
      <div className='layout'>
        <Chart></Chart>
      </div>

      <style jsx>{`
        .layout {
          height: 100%;
          display: grid;
          grid-template-rows: 64px 1fr 32px;
          grid-template-areas: 'header' 'chart' 'footer';
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const searchParam = context.params.id;

  const url = [`http://omdbapi.com/?apikey=8ab88a20&t=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`];

  const res = await fetch(url[0]);
  const tvSeries = await res.json();
  const totalSeasons = tvSeries.totalSeasons;

  const rawSeasonsData = [];

  const seasonUrl = [];
  for (let i = 1; i <= totalSeasons; i++) {
    seasonUrl.push(`http://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&t=${searchParam}&season=${i}`);
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

  const seasonData = [];

  let counter = 1;
  rawSeasonsData.forEach((s) => {
    s.Episodes.forEach((e) => {
      e.episodeWithSeason = 'S' + s.Season + 'E' + e.Episode;
      e.episodeNumber = counter;
      counter++;
      seasonData.push(e);
    });
  });

  return { props: { seasonData } };
}
