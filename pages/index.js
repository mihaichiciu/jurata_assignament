import Head from 'next/head';
import { SearchAnswer } from '../components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('home:homePageTitle')}</title>
        <meta name='description' content={t('home:homeMetaDescription')} />
      </Head>
      <SearchAnswer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  };
};

export default HomePage;
