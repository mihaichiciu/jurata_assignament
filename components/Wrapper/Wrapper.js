import classes from './Wrapper.module.css';

const Wrapper = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {props.title && <h1>{props.title}</h1>}
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
