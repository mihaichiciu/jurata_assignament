import { useState } from 'react';
import { AnswerContainer, Wrapper, SearchBar } from '../';
import classes from './SearchAnswer.module.css';

const SearchAnswer = () => {
  const [search, setSearch] = useState('');
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    const resp = await fetch(`https://api.m3o.com/v1/answer/Question?query=${JSON.stringify(search)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer YWMzZGI0YTUtZWZmZS00NWYxLTgwMGYtMjVlMTRhODFiYjJh',
      },
    });
    resp.json().then((data) => setAnswer(data.answer));
  };

  return (
    <Wrapper>
      <h1 className={classes.title}>Search for an answer</h1>
      <div className={classes.content}>
        <SearchBar
          value={search}
          placeholder='Why did the chicken crossed the road?'
          onChange={handleChange}
          handleSearch={handleSearch}
        />
        {answer && <AnswerContainer answer={answer} />}
      </div>
    </Wrapper>
  );
};

export default SearchAnswer;
