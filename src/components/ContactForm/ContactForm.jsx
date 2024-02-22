import { useId } from 'react';
import { Form, Field, ErrorMessage } from 'formik';

import css from './ContactForm.module.css';

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();

  return (
    <>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type='text' name='name' id={nameId}></Field>
        <span className={css.spanName}>
          <ErrorMessage name='name' as='span' />
        </span>
        <label htmlFor={numberId}>Number</label>
        <Field type='text' name='number' id={numberId}></Field>
        <span className={css.spanNumber}>
          <ErrorMessage name='number' as='span' />
        </span>
        <button className={css.submit} type='submit'>
          Add contact
        </button>
      </Form>
    </>
  );
}
