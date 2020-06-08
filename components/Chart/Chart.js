import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import { useRef } from 'react';

function Chart({ seasonData, selectedSeason }) {
  const totalSeason = useRef(seasonData[0].totalSeasons);

  function filterData() {
    if (parseInt(selectedSeason) === 0) {
      const newFilteredData = [];
      for (let i = 0; i < totalSeason.current; i++) {
        newFilteredData.push(...seasonData[i].Episodes);
      }
      return newFilteredData;
    } else {
      let counter = 1;
      seasonData[selectedSeason - 1].Episodes.forEach((e) => {
        e.episodeNumber = counter;
        counter++;
      });
      return seasonData[selectedSeason - 1].Episodes;
    }
  }

  return (
    <>
      <div className='chart-container'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={filterData()} margin={{ top: 34, right: 24, left: -24, bottom: 8 }}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#848c9c8f' />
            <XAxis dataKey='episodeNumber' tick={{ fill: '#848c9c8f' }} />
            <YAxis
              tick={{ fill: '#848c9c8f' }}
              type='number'
              interval={0}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              domain={['dataMin', 'dataMax']}
              dataKey='imdbRating'
            />
            <Tooltip />
            <Line
              animationDuration={600}
              type='monotone'
              dataKey='imdbRating'
              stroke='#43d8c9'
              strokeWidth={1.5}
              dot={{ stroke: '#171c31', strokeWidth: 0.5, fill: '#00bcd4' }}
            />
          </LineChart>
        </ResponsiveContainer>

        <style jsx>{`
          .chart-container {
            grid-area: chart;
            margin: 0 auto;
            overflow: hidden;
            background-color: var(--bg-color-secondary);
            width: 100%;
            border: 1px solid #00000085;
            border-left: none;
            border-right: none;
            height: 100%;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
              0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
          }
        `}</style>
      </div>
    </>
  );
}

export default Chart;
