import React from 'react';
import Link from 'next/link';
export default function SearchResult({ searchResult }) {
  return (
    <div>
      <ul>
        {searchResult.map((e) => {
          return (
            <li key={e.imdbID}>
              <Link href={`/title/${e.Title}`}>
                <img src={e.Poster}></img>
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        div {
          max-width: 1200px;
          margin: 0 auto;
        }
        ul {
          padding-top: 2rem;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          column-gap: 1rem;
          row-gap: 1rem;
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
        }
        img:hover {
          height: 475px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchParam = context.params.searchParam;

  console.log(searchParam);
  const url = [`http://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchParam}`];

  const response = await fetch(url);
  const rawSearchResult = await response.json();

  const searchResult = rawSearchResult.Search.filter((e) => e.Type === 'series');

  if (searchResult.length === 1) {
    // go to page
  }
  if (searchResult.Error) {
    // return series not found
  }

  return { props: { searchResult } };
}
