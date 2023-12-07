import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchFilter.module.css';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <>
      <p className={styles.inputLabel}>Find contacts by name</p>
      <input
        className={styles.inputContent}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};
