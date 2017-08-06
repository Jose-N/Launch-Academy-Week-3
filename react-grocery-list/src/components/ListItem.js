import React from 'react';

const ListItem = prop => {
  let groceryItem = prop.groceryItem

  return (
    <li>
      {groceryItem}
      <button type="button"
        onClick={(event) => {alert('Button was clicked')}} >
        Delete
      </button>
    </li>
  );
}; 

export default ListItem;
