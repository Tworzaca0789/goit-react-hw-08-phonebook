import React from 'react';
import styles from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/operations';
import { getContacts, getFilter } from '../../redux/selectors';
export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <ContactListItem id={id} name={name} number={number} />
          <button
            type="button"
            className={styles.contactDeleteBtn}
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
