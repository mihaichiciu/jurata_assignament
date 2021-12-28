import Image from 'next/image';
import logo from '../../public/jurataLogo.svg';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.navContent}>
        <a href='/' className={classes.logoContainer}>
          <Image height={28} className={classes.logo} src={logo} alt='Picture of the logo' />
        </a>
        <nav>
          <ul></ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
