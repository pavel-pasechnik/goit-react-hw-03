import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { Formik } from 'formik';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

const data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [values, setValues] = useState('');

  const initialValues = {
    name: '',
    number: '',
    id: '',
  };

  const handleSearch = event => {
    setValues(event.target.value);
  };

  const Filtered =
    values.trim() !== ''
      ? data.filter(value => value.name.toLowerCase().includes(values.toLowerCase().trim()))
      : data;

  const handleSubmit = (values, actions) => {
    data.push(values); // ! remake
    console.log(data);
    actions.resetForm();
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <ContactForm onSearch={handleSearch} />
      </Formik>
      <SearchBox />
      <ContactList contacts={Filtered} />
    </div>
  );
}
