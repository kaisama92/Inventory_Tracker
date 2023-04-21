import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewCoffeeForm(props){

  function handleNewInventoryItemSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value, 
      roast: event.target.roast.value, 
      origin: event.target.origin.value, 
      quantity: event.target.quantity.value,
      price: event.target.price.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewInventoryItemSubmission}>
        <input
          type='text'
          name='name'
          placeholder='name of coffee' />
        <input
          type='text'
          name='roast'
          placeholder='Roast Type i.e. "Dark"' />
        <input
          type="text"
          name="origin"
          placeholder="Origin i.e. Cambodia" />
        <input 
          type="number"
          name="quantity"
          placeholder="Quantity of burlap bags*" />
        <input 
          type="text"
          name="price"
          placeholder="$1.99" />
        <button type='submit'>Add!</button>
      </form>
      <p>*Burlap Bags Represent 130lbs of coffee</p>
    </React.Fragment> 
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
}

export default NewCoffeeForm; 