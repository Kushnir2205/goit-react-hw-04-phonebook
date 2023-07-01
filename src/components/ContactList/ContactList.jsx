import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ getFilteredContact, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {getFilteredContact.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  getFilteredContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
