import Image from 'next/image';
import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import searchIcon from '../../public/searchIcon.svg';
import classes from './SearchBar.module.css';

const SearchBar = ({ handleSearch, ...props }) => {
  const searchRef = useRef(null);
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper} onClick={() => searchRef.current.focus()}>
      <input
        className={classes.searchBar}
        tabIndex='0'
        role='search bar'
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        ref={searchRef}
        {...props}
      />
      <span className={classes.searchIcon} onClick={() => handleSearch()}>
        <Image src={searchIcon} alt={t('common:searchIconAlt')} />
      </span>
    </div>
  );
};

export default SearchBar;
