export const PhonebookList = ({ items, onRemove }) => {
  const itemList = items.map(({ id, name, number }) => {
    return (
      <li key={id} className="list-item">
        {name}: {number}
        <button
          className="delete-btn"
          type="button"
          onClick={() => onRemove(id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul>{itemList}</ul>;
};