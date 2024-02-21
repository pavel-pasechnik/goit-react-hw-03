import { useId } from 'react';
import { Form, Field } from 'formik';
import { IoIosSearch } from 'react-icons/io';
import css from './ContactForm.module.css';

export default function ContactForm({ onSearch }) {
  const searchBarId = useId();
  const nameId = useId();
  const numberId = useId();

  return (
    <>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type='text' name='name' id={nameId}></Field>
        <label htmlFor={numberId}>Number</label>
        <Field type='text' name='number' id={numberId}></Field>
        <button className={css.submit} type='submit'>
          Added contact
        </button>
      </Form>
      <div className={css.find}>
        <label htmlFor={searchBarId}>Find contact by name</label>
        <Field
          className={css.searchBar}
          type='text'
          name='searchBar'
          id={searchBarId}
          onChange={onSearch}
        />
        <IoIosSearch className={css.search} />
      </div>
    </>
  );
}
