import Image from 'next/image';
import { useRef } from 'react';
import searchIcon from '../../public/searchIcon.svg';
import classes from './SearchBar.module.css';

const SearchBar = ({ handleSearch, ...props }) => {
  const searchRef = useRef(null);

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
        <Image src={searchIcon} alt='Search icon' />
      </span>
    </div>
  );
};

export default SearchBar;
