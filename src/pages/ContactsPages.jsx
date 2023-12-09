import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { selectIsLoggedIn } from '../redux/auth/selectorsAuth';

export const ContactsPages = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Your contacts</h2>
      {isLoggedIn ? (
        <>
          <ContactForm />
          <SearchFilter />
          <ContactList />
        </>
      ) : (
        <p>No contacts.Please sing up or sing in!</p>
      )}
    </>
  );
};
