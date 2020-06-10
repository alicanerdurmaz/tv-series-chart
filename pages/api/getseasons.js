export default async (req, res) => {
  const searchParam = req.query.t;

  const url = [`http://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&t=${searchParam}`];

  const response = await fetch(url + '&season=1');
  const data = await response.json();

  if (data.Error || data?.Type === 'movie') {
    return res.status(200).json({
      notFound: 'Tv Series Not Found',
    });
  }
  const totalSeasons = data.totalSeasons;

  const rawSeasonsData = [];
  rawSeasonsData.push(data);

  const seasonUrl = [];
  for (let i = 2; i <= totalSeasons; i++) {
    seasonUrl.push(`${url}&season=${i}`);
  }

  await Promise.all(
    seasonUrl.map(async (seasonUrl) => {
      const response = await fetch(seasonUrl);
      const data = await response.json();
      rawSeasonsData.push(data);
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

  return res.status(200).json({ seasonData: rawSeasonsData });
};
