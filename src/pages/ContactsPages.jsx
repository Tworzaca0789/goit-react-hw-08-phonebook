import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
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
      <h2>Your contacts</h2>
      <div>{isLoading && 'Request in progress ...'}</div>
      <ContactForm />
      <SearchFilter />
      <ContactList />
    </>
  );
};
