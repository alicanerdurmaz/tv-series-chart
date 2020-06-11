import React from 'react';

const Spinner = () => {
  return (
    <div className='spinner'>
      <style jsx>{`
        @keyframes rotate {
          from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }

          to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        .spinner {
          font-size: 10px;
          border-top: 1.1em solid rgba(29, 161, 242, 0.2);
          border-right: 1.1em solid rgba(29, 161, 242, 0.2);
          border-bottom: 1.1em solid rgba(29, 161, 242, 0.2);
          border-left: 1.1em solid #1da1f2;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          animation: rotate 1.1s infinite linear;
          border-radius: 50%;
          width: 5em;
          height: 5em;
          margin: 0 auto;
        }
        .spinner:after {
          border-radius: 50%;
          width: 5em;
          height: 5em;
        }
      `}</style>
    </div>
  );
};

export default Spinner;
