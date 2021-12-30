import classes from './AnswerContainer.module.css';

const AnswerContainer = ({ answer, error }) => {
  return error ? <p className={classes.error}>{error}</p> : <p className={classes.answer}>{answer}</p>;
};

export default AnswerContainer;
