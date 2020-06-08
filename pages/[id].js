import Chart from '../components/tv-series/Chart';

export default function TvSeries() {
  return (
    <>
      <div className='layout'>
        <Chart></Chart>
      </div>

      <style jsx>{`
        .layout {
          height: 100%;
          display: grid;
          grid-template-rows: 64px 1fr 32px;
          grid-template-areas: 'header' 'chart' 'footer';
        }
      `}</style>
    </>
  );
}
