import Search from '../components/Search';
export default function Home() {
  return (
    <div className='container'>
      <h1>Tv Series Chart</h1>
      <Search styleName='home' positionTop='4.5rem' />
      <style jsx>
        {`
          .container {
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
            color: var(--secondary-color);
          }
        `}
      </style>
    </div>
  );
}
