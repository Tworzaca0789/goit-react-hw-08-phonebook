import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../redux/auth/operationsAuth';
import { selectCurrentUser } from '../redux/auth/selectorsAuth';

const HomePage = lazy(() => import('../pages/HomePages'));
const RegisterPage = lazy(() => import('../pages/RegisterPages'));
const LoginPage = lazy(() => import('../pages/LoginPages'));
const ContactsPage = lazy(() => import('../pages/ContactsPages'));

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
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/login"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" component={<HomePage />} />
        </Routes>
      </div>
    ))
  );
};

export default App;
