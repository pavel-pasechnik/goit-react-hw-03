import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ name, phone }) {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.name}>
          <IoPersonSharp />
          <p>{name}</p>
        </div>
        <div className={css.phone}>
          <FaPhoneAlt />
          <p>{phone}</p>
        </div>
      </div>
      <button className={css.button} type='button'>
        Delete
      </button>
    </>
  );
}
