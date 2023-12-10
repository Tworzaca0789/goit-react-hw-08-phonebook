import { useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operationsAuth';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <p className={styles.userName}>Welcome, {user.name}</p>
      <button
        className={styles.userButton}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
