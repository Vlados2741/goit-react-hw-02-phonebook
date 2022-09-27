import React from 'react';
import { nanoid } from 'nanoid';

export class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContacs({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const nameId = nanoid(5);
    const numberId = nanoid(5);
    return (
      <form className="phonebook__form" onSubmit={this.handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          type="text"
          name="name"
          id={nameId}
          value={this.state.name}
          onChange={this.handleChange}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={numberId}>Number</label>
        <input
          type="tel"
          name="number"
          id={numberId}
          value={this.state.number}
          onChange={this.handleChange}
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">
          Add contact
        </button>
      </form>
    );
  }
}