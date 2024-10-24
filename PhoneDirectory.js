import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhoneDirectory = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });

  useEffect(() => {
    axios.get('/api/contacts').then(res => setContacts(res.data));
  }, []);

  const addContact = () => {
    axios.post('/api/contacts', newContact).then(res => {
      setContacts([...contacts, res.data]);
      setNewContact({ name: '', phone: '' });
    });
  };

  return (
    <div>
      <h1>Personal Phone Directory</h1>
      {contacts.map(contact => (
        <div key={contact.id}>{contact.name}: {contact.phone}</div>
      ))}
      <input type="text" placeholder="Name" value={newContact.name} onChange={e => setNewContact({ ...newContact, name: e.target.value })} />
      <input type="text" placeholder="Phone" value={newContact.phone} onChange={e => setNewContact({ ...newContact, phone: e.target.value })} />
      <button onClick={addContact}>Add</button>
    </div>
  );
};

export default PhoneDirectory;
