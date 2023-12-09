import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../redux/auth/operationsAuth';
import { selectCurrentUser } from '../redux/auth/selectorsAuth';
import { AppBar } from './AppBar/AppBar';
import { ContactsPages } from '../pages/ContactsPages';
import Login from 'pages/LoginPages';
import Register from 'pages/RegisterPages';
import Home from 'pages/HomePages';

// const HomePage = lazy(() => import('../pages/HomePages'));
// const RegisterPage = lazy(() => import('../pages/RegisterPages'));
// const LoginPage = lazy(() => import('../pages/LoginPages'));
// const ContactsPage = lazy(() => import('../pages/ContactsPages'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isFetchCurrentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return (
    !isFetchCurrentUser &&
    (isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      <div>
        <AppBar />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPages />} />
            }
          />
        </Routes>
      </div>
    ))
  );
};

export default App;
