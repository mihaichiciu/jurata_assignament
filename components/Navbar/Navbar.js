import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import logo from '../../public/jurataLogo.svg';
import classes from './Navbar.module.css';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <div className={classes.navContent}>
        <Link href='/'>
          <a className={classes.logoContainer}>
            <Image height={28} src={logo} alt={t('common:logoAlt')} />
          </a>
        </Link>
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
