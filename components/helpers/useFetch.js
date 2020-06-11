import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(url + window.location.pathname.split('/')[2]);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      router.push('/404');
    }
  }

  return { data, isLoading };
}

export default useFetch;
