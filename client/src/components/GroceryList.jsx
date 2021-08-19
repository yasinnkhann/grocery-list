import React from 'react';

const GroceryList = (props) => (
  <div className="groceries">    
      {props.GroceryDetails.map(groceryObj => <div key={groceryObj.id}>{groceryObj.description} {groceryObj.quantity}</div>)}
  </div>
)

export default GroceryList;