import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';

export const ContactsPages = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress ...'}</div>
      <ContactForm />
      <SearchFilter />
      <ContactList />
    </>
  );
};
