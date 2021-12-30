import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { AnswerContainer, Wrapper, SearchBar } from '../';
import client from '../../apollo/apollo-client';
import { GET_ANSWER } from '../../apollo/queries';

const SearchAnswer = () => {
  const [search, setSearch] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    /*
      The commented code was used for the second bullet point,
      calling the NextJS api route /api/answer
    */
    // await fetch('/api/answer', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     query: search,
    //   }),
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     if (data.Code && data.Code === 400) {
    //       setError(data.Detail);
    //       setAnswer('');
    //     } else {
    //       setAnswer(data.answer);
    //       setError('');
    //     }
    //   })
    //   .catch((err) => {
    //     setError(JSON.stringify(err));
    //     setAnswer('');
    //   });

    try {
      const { data } = await client.query({
        query: GET_ANSWER,
        variables: {
          body: { query: search },
        },
      });
      setAnswer(data.query.answer);
      setError('');
    } catch (err) {
      setError(JSON.stringify(err));
      setAnswer('');
    }
  };

  return (
    <Wrapper title={t('home:homeWrapperTitle')}>
      <SearchBar
        value={search}
        placeholder={t('common:searchBarPlaceholder')}
        onChange={handleChange}
        handleSearch={handleSearch}
      />
      {answer && <AnswerContainer answer={answer} />}
      {error && <AnswerContainer error={error} />}
    </Wrapper>
  );
};

export default SearchAnswer;
