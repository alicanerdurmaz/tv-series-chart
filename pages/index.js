import Form from '../components/Form';
export default function Home() {
  return (
    <div className='container'>
      <Form></Form>
      <style jsx>
        {`
          .container {
            height: 100%;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
