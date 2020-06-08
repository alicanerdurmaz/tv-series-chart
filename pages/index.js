import Search from '../components/Home/Search';

export default function Home() {
  return (
    <div className='container'>
      <h1>Tv Series Chart</h1>
      <Search></Search>
      <style jsx>{`
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
      `}</style>
    </div>
  );
}
