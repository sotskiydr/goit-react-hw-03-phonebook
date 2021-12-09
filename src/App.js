import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactList/ContactsList';
import './App.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Vova Putin', number: '459-12-56' },
      { id: 'id-2', name: 'Vitya Poroshenko', number: '443-89-12' },
      { id: 'id-3', name: 'Vova Lenin', number: '645-17-79' },
      { id: 'id-4', name: 'Joseph Stalin', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitData = ({ name, number }) => {
    const newItem = { id: nanoid(), name: name, number: number };
    let isUnique = this.state.contacts.some(el => el.name === name);
    if (!isUnique) {
      this.setState(prevStates => ({
        contacts: [...prevStates.contacts, newItem],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  renderContacts = () => {
    const { filter, contacts } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(toLowerCaseFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <main className="main">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          renderContacts={this.renderContacts()}
          deleteContact={this.deleteContact}
        />
      </main>
    );
  }
}

export default App;
