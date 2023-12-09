import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operationsAuth';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

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
    <div>
      {!isLoggedIn ? (
        <>
          {' '}
          <h1>Page of Loggin</h1>
          <form onSubmit={handleSubmit} autoComplete="on">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Sign in</button>
          </form>
        </>
      ) : (
        <h2>Welcome</h2>
      )}
    </div>
  );
};
