import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../redux/auth/operationsAuth';
import { ContactsUpdate } from '../pages/ContactsUpdate';
import { AppBar } from './AppBar/AppBar';

const Home = lazy(() => import('../pages/HomePages'));
const Register = lazy(() => import('../pages/RegisterPages'));
const Login = lazy(() => import('../pages/LoginPages'));
const ContactsPages = lazy(() => import('../pages/ContactsPages'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<Register />} />
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
        <Route
          path="contacts/:id/edit"
          element={
            <PrivateRoute element={<ContactsUpdate />} redirectTo="/login" />
          }
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
