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

  isDublicate = ({ name }) => {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name);
    return result;
  };

  addContacts = data => {
    if (this.isDublicate(data)) {
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

  filterChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  getFilter = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalaizedFilter = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
    return filterContact;
  };

  render() {
    return (
      <>
      <h1>Phonebook</h1>
        <Phonebook
          onAddContacs={this.addContacts}
        />
        {this.state.contacts.length !== 0 && (
          <>
            <h2>Contacts :</h2>
            <PhonebookFilter
              onChange={this.filterChange}
              value={this.state.filter}
            />
            <PhonebookList
              items={this.getFilter()}
              onRemove={this.removeContact}
            />
          </>
        )}
      </>
    );
  }
}

export {App}