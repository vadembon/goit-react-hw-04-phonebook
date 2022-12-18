import { useState, useEffect } from 'react';
import shortid from 'shortid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';

import { BoxForm } from './App.styled';

const useLocalStorage = (contacts, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(contacts)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem('conttacts', JSON.stringify(state));
  }, [contacts, state]);
  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    return checkContact
      ? alert(`${name} is already in contacts.`)
      : setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  // const filteredContacts = this.getFilteredContacts();

  return (
    <BoxForm>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        title="Contacts"
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </BoxForm>
  );
};
