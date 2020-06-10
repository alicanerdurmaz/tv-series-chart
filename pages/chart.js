import { useState, useEffect } from 'react';
import Chart from '../components/Chart/Chart';
import Header from '../components/Chart/Header';
import useFetch from '../components/helpers/useFetch';

export default function ChartPage() {
  const responseSeasonData = useFetch('/api/getseasons');

  return (
    <>
      <div className='layout'>
        <Header refresh={true}></Header>
        {responseSeasonData.isLoading ? (
          <h1>YÜKLENİYOOO</h1>
        ) : (
          <Chart seasonData={responseSeasonData?.data?.seasonData}></Chart>
        )}
      </div>

      <style jsx>{`
        .layout {
          height: 100%;
          display: grid;
          grid-template-rows: 4rem 350px 1fr 2rem;
          grid-template-areas: 'header' 'description ' 'chart' 'footer';
        }
      `}</style>
    </>
  );
}
