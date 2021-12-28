import { Navbar } from '../';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>
        <div className={classes.heroWrapper}>{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
