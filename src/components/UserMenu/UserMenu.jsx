import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectorsAuth';
import styles from './UserMenu.module.css';
import { logOut } from 'redux/auth/operationsAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div className={styles.container}>
      <p className={styles.userName}>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
