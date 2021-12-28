import Head from 'next/head';
import { SearchAnswer } from '../components';

const Home = () => {
  return (
    <>
      <Head>
        <title>Jurata Assignament</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Source+Sans+Pro:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <SearchAnswer />
    </>
  );
};

export default Home;
