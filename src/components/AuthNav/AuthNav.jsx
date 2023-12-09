import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.containerNav}>
      <NavLink to="/login">Sing in</NavLink>
      <NavLink to="/register">Sing up</NavLink>
    </div>
  );
};
