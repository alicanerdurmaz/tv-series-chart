import React from 'react';
import Link from 'next/link';
import Search from '../../components/Search';

export default function SearchResult() {
  const searchResult = [
    {
      Title: 'The Big Bang Theory',
      Year: '2007–2019',
      imdbID: 'tt0898266',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg',
    },
  ];

  return (
    <div>
      <header>
        <Search styleName='home' />
      </header>
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
          height: 100%;
          margin: 0 auto;
        }
        ul {
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
