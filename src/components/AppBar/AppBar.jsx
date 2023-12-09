import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import styles from './AppBar.module.css';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={styles.boxBar}>
        <div className={styles.appBnav}>
          <Navigation />
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </>
  );
};
