import Head from 'next/head';
import client from '../../apollo/apollo-client';
import { GET_ANSWER } from '../../apollo/queries';
import { AnswerContainer, Wrapper } from '../../components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const QuestionPage = ({ answer = '', error = '' }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('question:questionPageTitle')}</title>
      </Head>
      <Wrapper title={t('question:questionPageWrapperTitle')}>
        <AnswerContainer answer={answer} error={error} />
      </Wrapper>
    </>
  );
};

export const getServerSideProps = async ({ locale, params }) => {
  const question = params.question;
  try {
    const { data } = await client.query({
      query: GET_ANSWER,
      variables: {
        body: { query: question },
      },
    });
    return {
      props: {
        answer: data.query.answer,
        ...(await serverSideTranslations(locale, ['question', 'common'])),
      },
    };
  } catch (err) {
    return {
      props: {
        error: JSON.stringify(err),
        ...(await serverSideTranslations(locale, ['question', 'common'])),
      },
    };
  }
};

export default QuestionPage;
