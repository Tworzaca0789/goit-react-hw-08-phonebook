import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchFilter.module.css';
import { setFilter } from '../../redux/contacts/filterSlice';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p className={styles.inputLabel}>Find contacts by name</p>
      <input
        className={styles.inputContent}
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};
