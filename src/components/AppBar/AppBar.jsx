import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import styles from './AppBar.module.css';
import { Suspense } from 'react';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const isLoggedIn = useAuth();

  return (
    <>
      <header className={styles.boxBar}>
        <div className={styles.appBnav}>
          <Navigation />
        </div>
        {isLoggedIn ? <AuthNav /> : <UserMenu />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
