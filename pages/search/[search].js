import React from 'react';
import useFetch from '../../components/helpers/useFetch';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Chart/Header';

export default function SearchPage() {
  const router = useRouter();
  const { data } = useFetch('/api/search?s=');

  if (!data) return <h1>Loading</h1>;

  if (data.notFound) {
    return (
      <>
        <Header></Header>
        <h1>bulunamadiiiiiiiii</h1>
      </>
    );
  }

  if (data.searchResult.length === 1) router.push('/chart/' + data.searchResult[0].Title);
  console.log(data.searchResult);
  return (
    <div className='container'>
      <Header></Header>
      <ul>
        {data.searchResult.map((e) => {
          return (
            <li key={e.imdbID}>
              <Link href={`/chart/${e.Title}`}>
                <img src={e.Poster}></img>
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .container {
          height: 100%;
        }
				
        ul {
					max-width: 1200px;
          margin: 0 auto;
          padding-top: 2rem;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          column-gap: 0.5rem;
          row-gap: 0.5rem;
        }
        li {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: start;
        }
        img {
          will-change: height;
          height: 450px;
          transition: all 190ms ease;
          border: 1px solid black;
          border-radius: 4px;
					transform: scale(.9);
        }
        img:hover {
					transform:scale(1);
        }
        header {
					max-width:800px;
          margin:0 auto;
					display: flex;
					flex-direction column;
					justify-content:center;
					align-items:center;
        }
      `}</style>
    </div>
  );
}
