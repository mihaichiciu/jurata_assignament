import Head from 'next/head';
import { SearchAnswer } from '../components';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Jurata assignment</title>
        <meta name='description' content='This app is an Assignment for Jurata' />
      </Head>
      <SearchAnswer />
    </>
  );
};

export default HomePage;
