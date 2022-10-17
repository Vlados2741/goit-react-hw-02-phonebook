export const PhonebookList = ({ list, onContactRemover }) => {
  const itemList = list.map(({ id, name, number }) => {
    return (
      <li key={id} className="list-item">
        {name}: {number}
        <button
          className="delete-btn"
          type="button"
          onClick={() => onContactRemover(id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul>{itemList}</ul>;
};
