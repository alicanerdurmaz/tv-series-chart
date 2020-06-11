import Chart from '../../components/Chart/Chart';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import Description from '../../components/Chart/Description';
import DescriptionSkeleton from '../../components/Chart/DescriptionSkeleton';
import useFetch from '../../components/helpers/useFetch';

export default function ChartPage() {
  const { data: seasonData, isLoading: seasonDataIsLoading } = useFetch('/api/getseasons?t=');
  const { data: info, isLoading: infoIsLoading } = useFetch('/api/getinfo?t=');

  return (
    <>
      <div className='layout'>
        <Header refresh={true}></Header>
        {infoIsLoading ? <DescriptionSkeleton /> : <Description info={info.info}></Description>}
        {seasonDataIsLoading ? <Spinner /> : <Chart seasonData={seasonData.seasonData}></Chart>}
      </div>

      <style jsx>{`
        .layout {
          display: grid;
          grid-template-rows: 4rem 1fr 360px;
          grid-template-areas: 'header' 'description' 'chart';
        }
      `}</style>
    </>
  );
}
