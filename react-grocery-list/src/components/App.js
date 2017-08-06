import React from 'react';
import ListItem from './ListItem';

const App = props => {
  let groceryData = [
    {id: 1, groceryItem: "Oranges"},
    {id: 2, groceryItem: "Banans"},
    {id: 3, groceryItem: "Bread"}
  ]

  let items = groceryData.map(item => {
    return (
      < ListItem
        key={item.id}
        groceryItem={item.groceryItem}
      />
    );
  });

  return(
    <div>
      <h1>Grocery List</h1>
        
      <ul>
        {items}
      </ul>
    </div>
  );
};

export default App;
