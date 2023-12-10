import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operationsAuth';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';
import styles from './LoginForm.module.css';
import { BiLock } from 'react-icons/bi';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.loginBox}>
      {!isLoggedIn ? (
        <>
          {' '}
          <h1 className={styles.appTitleLogin}>
            <BiLock />
            Atmospheric login
          </h1>
          <form
            className={styles.appFormLogin}
            onSubmit={handleSubmit}
            autoComplete="on"
          >
            <label className={styles.labelLogin}>
              Email
              <input
                className={styles.inputLogin}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>

            <label className={styles.labelLogin}>
              Password
              <input
                className={styles.inputLogin}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>

            <button className={styles.buttonLogin} type="submit">
              Sign in
            </button>
          </form>
        </>
      ) : (
        <h2 className={styles.titleWelcome}>Welcome</h2>
      )}
    </div>
  );
};
