export default async (req, res) => {
  const searchParam = req.query.t;

  const url = [`http://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&t=${searchParam}&plot=full`];

  const response = await fetch(url);
  const data = await response.json();

  if (data.Error || data?.Type === 'movie') {
    return res.status(200).json({
      notFound: 'Tv Series Not Found',
    });
  }

  return res.status(200).json({ info: data });
};
