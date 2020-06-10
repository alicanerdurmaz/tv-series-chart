export default async (req, res) => {
  const searchParam = req.query.s;
  const url = [`http://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchParam}`];

  const response = await fetch(url);
  const rawSearchResult = await response.json();

  if (rawSearchResult.Response === 'False') {
    return res.status(200).json({ notFound: 'Tv Series Not Found' });
  }

  const searchResult = rawSearchResult.Search.filter((e) => e.Type === 'series');

  if (searchResult.length < 1) {
    return res.status(200).json({ notFound: 'Tv Series Not Found' });
  }

  return res.status(200).json({ searchResult });
};
