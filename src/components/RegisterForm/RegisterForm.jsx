import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operationsAuth';
import styles from './RegisterForm.module.css';
import { BiLock } from 'react-icons/bi';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.registrationBox}>
      <h1 className={styles.appTitleRegistr}>
        <BiLock />
        Atmospheric registration
      </h1>

      <form
        className={styles.appFormRegistr}
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <label className={styles.labelRegistr}>
          Name
          <input
            className={styles.inputRegistr}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.labelRegistr}>
          Email
          <input
            className={styles.inputRegistr}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.labelRegistr}>
          Password
          <input
            className={styles.inputRegistr}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={styles.buttonRegistr} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
