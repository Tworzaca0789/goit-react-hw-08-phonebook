import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export const ContactsPages = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contact</title>
      </Helmet>
      <div>{isLoading && 'Request in progress ...'}</div>
      <ContactList />
    </>
  );
};
