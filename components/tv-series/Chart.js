import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import testData from '../../test';

function Chart() {
  const seasonData = testData();

  return (
    <>
      <div className='container'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={seasonData} margin={{ top: 25, right: 20, left: -30, bottom: 0 }}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#848c9c8f' />
            <XAxis dataKey='episodeNumber' tick={{ fill: '#848c9c8f' }} />
            <YAxis
              tick={{ fill: '#848c9c8f' }}
              type='number'
              interval={0}
              domain={['dataMin', 'dataMax']}
              interval={0}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              dataKey='imdbRating'
            />
            <Tooltip />
            <Line
              type='monotoneY'
              dataKey='imdbRating'
              stroke='#43d8c9'
              strokeWidth={1.5}
              dot={{ stroke: '#171c31', strokeWidth: 0.5, fill: '#00bcd4' }}
            />
          </LineChart>
        </ResponsiveContainer>

        <style jsx>{`
          .container {
            grid-area: chart;
            margin: 0 auto;
            border: 2px solid #00000078;
            overflow: hidden;
            background-color: var(--bg-color-secondary);
            width: 99%;
            border-radius: 4px;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12),
              0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);
            height: 100%;
          }
        `}</style>
      </div>
    </>
  );
}

export default Chart;
