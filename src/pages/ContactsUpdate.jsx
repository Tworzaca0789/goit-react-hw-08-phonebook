import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createSelector } from '@reduxjs/toolkit';
import { useState } from 'react';
import { updateContacts } from '../redux/contacts/operations';
import styles from '../components/ContactForm/ContactForm.module.css';
import { selectContacts } from '../redux/contacts/selectors';

export const ContactsUpdate = () => {
  const selectContact = useSelector(selectContacts);

  const selectCurrentContact = createSelector(
    [selectContact, (_, props) => props.id],
    (contacts, id) => {
      return contacts.find(contact => contact.id === id);
    }
  );

  const { id } = useParams();
  const currentContact = useSelector(state =>
    selectCurrentContact(state, { id })
  );

  const nav = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(`${currentContact.name}`);
  const [number, setNumber] = useState(`${currentContact.number}`);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContacts({ name: name, number: number, id }));
    nav(-1);
  };

  let onChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <p>Edit Contact</p>
      <form className={styles.contactForm} noValidate onSubmit={handleSubmit}>
        <label className={styles.inputLabel}>
          Email
          <input
            className={styles.inputContent}
            type="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={name}
            onChange={onChange}
          />
        </label>
        <label className={styles.inputLabel}>
          Next contact
          <input
            className={styles.inputContent}
            type="number"
            name="number"
            required
            value={number}
            onChange={onChange}
          />
        </label>
        <button type="submit" className={styles.addContact}>
          Update Contact
        </button>
      </form>
    </>
  );
};
