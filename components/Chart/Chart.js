import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import { useRef } from 'react';

function Chart({ seasonData, selectedSeason, scale }) {
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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      const data = payload[0].payload;
      return (
        <div className='custom-tooltip'>
          <p className='label'>{`${data.episodeWithSeason} : ${data.Title}`}</p>
          <p className='rating'>
            IMDb Rating : <span>{data.imdbRating}</span>
          </p>
          <p className='date'>{`Released : ${data.Released}`}</p>
          <style jsx>{`
            .custom-tooltip {
              background: var(--bg-color);
              padding: 0.5rem 1rem;
              border-radius: 4px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            }
            p {
              margin: 0.5rem 0;
            }
            span {
              color: #43d8c9;
            }
          `}</style>
        </div>
      );
    }

    return null;
  };

  function calculateLeft() {
    return scale ? -12 : -30;
  }

  return (
    <>
      <div className='chart-container'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={filterData()} margin={{ top: 34, right: 24, left: calculateLeft(), bottom: 8 }}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#848c9c8f' />
            <XAxis dataKey='episodeNumber' tick={{ fill: '#848c9c8f' }} />
            <YAxis
              tick={{ fill: '#848c9c8f' }}
              type='number'
              ticks={scale ? null : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              domain={scale ? ['auto', 'auto'] : null}
              dataKey='imdbRating'
            />
            <Tooltip content={<CustomTooltip />} />
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
