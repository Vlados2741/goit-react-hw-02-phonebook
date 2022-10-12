import { nanoid } from 'nanoid';

const filterId = nanoid(5);

export const PhonebookFilter = ({ onFilter, value }) => {
  return (
    <form className="phonebook__form">
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        autoComplete="off"
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </form>
  );
};