import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';

function Chart({ seasonData, selectedSeason, scale }) {
  const CustomTooltip = ({ active, payload }) => {
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
    return scale ? -20 : -30;
  }

  return (
    <>
      <div className='chart-container'>
        <ResponsiveContainer width='100%' height='50%'>
          <LineChart margin={{ top: 34, right: 24, left: calculateLeft(), bottom: 8 }}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#848c9c8f' />
            <XAxis
              dataKey='episodeNumber'
              tick={{ fill: '#848c9c8f' }}
              type='category'
              allowDuplicatedCategory={false}
            />
            <YAxis
              tick={{ fill: '#848c9c8f' }}
              type='number'
              ticks={scale ? null : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              domain={scale ? ['auto', 'auto'] : null}
              dataKey='imdbRating'
            />
            <Tooltip content={<CustomTooltip />} />
            {seasonData.map((s, i) => {
              const color = i % 2 ? '#ff9999' : '#43d8c9';
              if (parseInt(selectedSeason) === 0) {
                return (
                  <Line
                    key={s.Season}
                    data={s.Episodes}
                    animationDuration={600}
                    type='monotone'
                    dataKey='imdbRating'
                    stroke={color}
                    strokeWidth={1.5}
                    dot={{ stroke: '#171c31', strokeWidth: 1, fill: color, r: 3.5 }}></Line>
                );
              } else if (selectedSeason === s.Season) {
                return (
                  <Line
                    key={s.Season}
                    data={s.Episodes}
                    animationDuration={600}
                    type='monotone'
                    dataKey='imdbRating'
                    stroke='#43d8c9'
                    strokeWidth={1.5}
                    dot={{ stroke: '#171c31', strokeWidth: 1, fill: '#00bcd4', r: 5 }}
                  />
                );
              }
            })}
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
