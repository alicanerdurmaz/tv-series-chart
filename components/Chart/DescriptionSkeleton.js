import React from 'react';

const DescriptionSkeleton = () => {
  return (
    <div className='container'>
      <div className='square'>image</div>
      <div className='line-container'>
        <section className='line-1'>
          <div className='line'>asdasd</div>
          <div className='line'>asdasd</div>
          <div className='line'>asdad</div>
          <div className='line'>asdasd</div>
        </section>

        <section className='line-2'>
          <div className='line'>asdasd</div>
          <div className='line'>asdasd</div>
          <div className='line'>asdad</div>
          <div className='line'>asdasd</div>
        </section>
      </div>

      <style jsx>{`
        div {
          color: #262626;
        }
        .container {
          grid-area: description;
          height: 260px;
          background: var(--bg-color-secondary);
          text-align: center;

          border: 1px solid var(--border-color);
          border-left: 0;
          border-right: 0;
          margin: 2rem 0;
          padding: 1em 2rem;

          display: flex;
        }
        .square {
          width: 150px;
          height: 225px;
          margin-right: 1rem;
          background-color: #ffffff17;

          position: relative;
          overflow: hidden;
        }
        .line-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .line-1 {
          width: 20%;
        }
        .line {
          margin: 0.5rem 0;
          width: 100%;
          position: relative;
          overflow: hidden;
          background-color: #ffffff17;
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .line::after,
        .square::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background: #009fff; /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #ec2f4b, #009fff); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            90deg,
            #ffffff01,
            #ffffff17
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

          animation: shimmer 1s infinite;
          content: '';
        }
      `}</style>
    </div>
  );
};

export default DescriptionSkeleton;
