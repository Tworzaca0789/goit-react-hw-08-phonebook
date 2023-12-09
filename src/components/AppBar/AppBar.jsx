import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';
import styles from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={styles.boxBar}>
        <div className={styles.boxAuth}>
          <Navigation />
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <Outlet />
    </>
  );
};
