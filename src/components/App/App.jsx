import { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { ContactList } from '../ContactList/ContactList.jsx';
import styles from './App.module.css';
import { Filter } from 'components/Filter/Filter.jsx';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsData = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsData) ?? [];

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = e => setFilter(e.target.value);

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const onSubmitData = contact => {
    const isName = contacts.find(({ name }) => name === contact.name);

    if (isName) {
      alert(` ${isName.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmitData={onSubmitData} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList
        getFilteredContact={getFilteredContact()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
