import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import { BiRegistered, BiLogIn } from 'react-icons/bi';

export const AuthNav = () => {
  return (
    <div className={styles.containerNav}>
      <NavLink to="/login">
        <BiLogIn />
        Sing in
      </NavLink>
      <NavLink to="/register">
        <BiRegistered />
        Sing up
      </NavLink>
    </div>
  );
};
