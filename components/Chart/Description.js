const Description = React.memo(function Description({ info }) {
  return (
    <div className='container'>
      <h1>
        {info.Title} ({info.Year})
      </h1>

      <div className='poster-data'>
        <img src={info.Poster}></img>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className='fw-600'>Average Rating</span>
                </td>
                <td>
                  : <span className='color-yellow fw-600'>{info.imdbRating}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className='fw-600'>Total Votes</span>
                </td>
                <td>
                  : <span className='color-yellow fw-600'>{info.imdbVotes}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className='fw-600'>Seasons</span>
                </td>
                <td>
                  : <span className='color-yellow fw-600'>{info.totalSeasons}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p>{info.Plot}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          grid-area: description;
          height: max-content;
          background: var(--bg-color-secondary);
          border: 1px solid var(--border-color);
          border-left: 0;
          border-right: 0;
          margin: 2rem 0;
          padding: 1em 2rem;

          display: flex;
          flex-direction: column;

          justify-content: flex-start;
          align-items: flex-start;
        }

        h1 {
          width: 100%;
          font-weight: 600;
          color: #fff;
          font-size: 1.225rem;
          margin-bottom: 0.5rem;
        }
        .poster-data {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        img {
          object-fit: cover;
          object-position: center;
          width: 150px;
          height: 225px;
          border: 2px solid black;
          border-radius: 8px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
        table {
          color: var(--text-color);
          padding-top: 0.225rem;
        }
        td {
          padding: 0.5rem 1rem;
          padding-top: 0rem;
        }
        p {
          padding: 0.5rem 1rem;
          color: #fff;
        }
        @media only screen and (max-width: 600px) {
          p {
            display: none;
          }
          td {
            padding: 0;
          }
          .container {
            padding: 0.5rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
});

export default Description;
