import Head from 'next/head';
import client from '../../apollo/apollo-client';
import { GET_ANSWER } from '../../apollo/queries';
import { AnswerContainer, Wrapper } from '../../components';

const QuestionPage = ({ answer = '', error = '' }) => {
  return (
    <>
      <Head>
        <title>Answer for your question</title>
      </Head>
      <Wrapper title='Answer for your question'>
        <AnswerContainer answer={answer} error={error} />
      </Wrapper>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const question = context.params.question;
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
      },
    };
  } catch (err) {
    return {
      props: {
        error: JSON.stringify(err),
      },
    };
  }
};

export default QuestionPage;
