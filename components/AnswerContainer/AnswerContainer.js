import classes from './AnswerContainer.module.css';

const AnswerContainer = ({ answer }) => {
  return <p className={classes.answer}>{answer}</p>;
};

export default AnswerContainer;
