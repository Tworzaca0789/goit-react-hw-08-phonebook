import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { BiBookContent, BiHomeHeart } from 'react-icons/bi';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.appNav}>
      <NavLink className={styles.navHome} to="/">
        <BiHomeHeart />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.appBook} to="/contacts">
          <BiBookContent />
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
