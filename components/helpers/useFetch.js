import React, { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(url + window.location.search);
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    }
  }

  return { data, error };
}

export default useFetch;
