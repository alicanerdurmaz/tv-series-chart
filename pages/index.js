import { useState, useRef } from 'react';
import Link from 'next/link';
import Search from '../components/Search';
import useInterval from '../components/helpers/useInterval';

const titleArray = [
  'The Big Bang Theory',
  'Black Mirror',
  'Halt and Catch Fire',
  'Silicon Valley',
  'Person of Interest',
];
export default function Home() {
  const [selectedTitle, setSelectedTitle] = useState(1);
  const [searchResult, setSearchResult] = useState(null);
  const titleRef = useRef(null);

  useInterval(() => {
    titleRef.current.style.opacity = '0';
    setTimeout(() => {
      setSelectedTitle(selectedTitle + 1);
      titleRef.current.style.opacity = '1';
    }, 190);
  }, 3000);

  return (
    <div className='container'>
      <main>
        <h1>Tv Series Chart</h1>
        <Search styleName='home' positionTop='4.5rem' setSearchResult={setSearchResult} />

        <div className='suggestion'>
          Or Try : &nbsp;
          <Link href={`/chart/${titleArray[selectedTitle % 5]}`} prefetch={false}>
            <a>
              <span className='title' ref={titleRef}>
                {titleArray[selectedTitle % 5]}
              </span>
            </a>
          </Link>
        </div>
      </main>
      <style jsx>
        {`
          .container {
            background: var(--bg-color-gradient);
            width: 100%;
            height: 100%;
          }
          main {
            height: 100%;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-size: 3rem;
            font-weight: 700;
            color: var(--secondary-color);
          }
          .suggestion {
            color: #fff;
            margin: 0 auto;
            padding-left: 4rem;
          }

          .title {
            display: inline-block;
            font-weight: 600;
            color: #fff;
            transition: all 190ms;
            text-align: start;
            min-width: 200px;
          }
        `}
      </style>
    </div>
  );
}
