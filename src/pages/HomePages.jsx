import { Helmet } from 'react-helmet';
import styles from './HomePages.module.css';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div className={styles.container}>
      <Helmet>
        <title className={styles.title}>Home Pages</title>
      </Helmet>
      {!isLoggedIn && (
        <p className={styles.appHomeContent}>
          Welcome to the phonebook page. Please select{' '}
          <NavLink to={'/register'}>
            <span className={styles.colorLight}> --Sing up-- </span>
          </NavLink>{' '}
          or{' '}
          <NavLink to={'/login'}>
            <span className={styles.colorLight}> --Sing in </span>
          </NavLink>
        </p>
      )}
    </div>
  );
}
