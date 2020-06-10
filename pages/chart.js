import Chart from '../components/Chart/Chart';
import Header from '../components/Chart/Header';
import Description from '../components/Chart/Description';
import useFetch from '../components/helpers/useFetch';

export default function ChartPage() {
  const responseSeason = useFetch('/api/getseasons');
  const responseInfo = useFetch('/api/getinfo');
  console.log(responseInfo);
  return (
    <>
      <div className='layout'>
        <Header refresh={true}></Header>
        <Description info={responseInfo?.data?.info}></Description>
        <Chart seasonData={responseSeason?.data?.seasonData}></Chart>
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
