import { useAuth } from 'hooks/useAuth';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.navHome} to={'/'}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.navContacts} to={'/contacts'}>
          Contacts
        </NavLink>
      )}
      <Outlet />
    </nav>
  );
};
