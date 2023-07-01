import { useState } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmitData }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmitData({ name, number, id: crypto.randomUUID() });
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.formContainer}>
      <form type="submit" onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
            value={name}
          />
        </label>
        Number
        <label className={styles.label}>
          <input
            className={styles.input}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeNumber}
            value={number}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export { ContactForm };
