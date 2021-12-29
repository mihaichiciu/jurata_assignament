import classes from './AnswerContainer.module.css';

const AnswerContainer = ({ answer, error }) => {
  if (error) return <p className={classes.error}>{error}</p>;
  return <p className={classes.answer}>{answer}</p>;
};

export default AnswerContainer;
