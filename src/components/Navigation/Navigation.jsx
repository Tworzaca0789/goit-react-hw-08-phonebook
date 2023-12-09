import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={styles.navHome} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navContacts} to="/contacts">
        Phonebook
      </NavLink>
      <Outlet />
    </nav>
  );
};
