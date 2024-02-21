import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
export default function ContactList({ contacts }) {
  return (
    <div className={css.list}>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className='item'>
              <Contact name={contact.name} phone={contact.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
