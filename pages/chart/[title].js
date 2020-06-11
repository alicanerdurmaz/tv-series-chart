import Chart from '../../components/Chart/Chart';
import Header from '../../components/Chart/Header';
import Description from '../../components/Chart/Description';
import useFetch from '../../components/helpers/useFetch';
import { useEffect, useRef } from 'react';

export default function ChartPage() {
  const { data: seasonData, isLoading: seasonDataIsLoading } = useFetch('/api/getseasons?t=');
  const { data: info, isLoading: infoIsLoading } = useFetch('/api/getinfo?t=');
  const gridRef = useRef(null);

  // useEffect(() => {
  //   if (!seasonDataIsLoading) {
  //     gridRef.current.style.gridTemplateRows = '4rem auto 1fr 2rem';
  //   }
  // }, [seasonDataIsLoading]);

  return (
    <>
      <div className='layout' ref={gridRef}>
        <Header refresh={true}></Header>
        {info && <Description info={info.info}></Description>}
        {seasonData && <Chart seasonData={seasonData.seasonData}></Chart>}
      </div>

      <style jsx>{`
        .layout {
          display: grid;
          grid-template-rows: 4rem 1fr 1fr 2rem;
          grid-template-areas: 'header' 'description' 'chart' 'footer';
        }
      `}</style>
    </>
  );
}
