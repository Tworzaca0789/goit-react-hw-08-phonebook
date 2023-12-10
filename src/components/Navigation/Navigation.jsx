import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
import { BiBookContent, BiHomeHeart } from 'react-icons/bi';

export const Navigation = () => {
  return (
    <nav className={styles.appNav}>
      <NavLink className={styles.navHome} to="/">
        <BiHomeHeart />
        Home
      </NavLink>
      <NavLink className={styles.appBook} to="/contacts">
        <BiBookContent />
        Phonebook
      </NavLink>
      <Outlet />
    </nav>
  );
};
