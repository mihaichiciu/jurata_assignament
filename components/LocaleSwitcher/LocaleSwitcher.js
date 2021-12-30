import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import classes from './LocaleSwitcher.module.css';
import downArrow from '../../public/down-arrow.svg';
import upArrow from '../../public/up-arrow.svg';
import localeMap from '../../utils/localeMap';

const LocaleSwitcher = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const ref = useRef();

  const handleClickOutside = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setIsActive(false);
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);

  const handleLocaleChange = (locale) => {
    locale !== router.locale && router.push(router.asPath, router.asPath, { locale });
  };

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div className={classes.dropdown} ref={ref}>
      <div className={classes.button} onClick={() => toggleActive()}>
        {localeMap[router.locale]}
        <span className={classes.arrow}>
          <Image src={isActive ? upArrow : downArrow} />
        </span>
      </div>
      {isActive && (
        <div className={classes.content}>
          {router.locales.map((locale) => (
            <div key={locale} className={classes.item} onClick={() => handleLocaleChange(locale)}>
              {localeMap[locale]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
