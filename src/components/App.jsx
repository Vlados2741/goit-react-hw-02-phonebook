import React from "react";
import { nanoid } from 'nanoid';
import { Phonebook } from "./phonebook/phonebook";
import {PhonebookFilter} from './phonebook/phonebookFilter';
import {PhonebookList} from './phonebook/phonebookList';
import './phonebook/phonebook-style.css';


class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  dublicateFinder = ({ name }) => {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name);
    return result;
  };

  addContact = data => {
    if (this.dublicateFinder(data)) {
      return alert(`${data.name} уже существует в списке контактов 🤪 `);
    }
    this.setState(prevState => {
      const newContact = {
        id: nanoid(5),
        ...data,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prevState => {
      const newContact = prevState.contacts.filter(item => item.id !== id);
      return { contacts: newContact };
    });
  };

  handlefilter = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  filterOption = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterContact = contacts.filter(({ name }) => {
      const result = name.toLowerCase().includes(filter.toLowerCase());
      return result;
    });
    return filterContact;
  };
  
  render() {
    return (
      <>
      <h1>Phonebook</h1>
        <Phonebook
          onAddContact={this.addContact}
        />
        {this.state.contacts.length !== 0 && (
          <>
            <h2>Contacts :</h2>
            <PhonebookFilter
              onFilter={this.handlefilter}
              value={this.state.filter}
            />
            <PhonebookList
              list={this.filterOption()}
              onContactRemover={this.removeContact}
            />
          </>
        )}
      </>
    );
  }
}

export {App}
