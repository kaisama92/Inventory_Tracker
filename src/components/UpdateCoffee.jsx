import React from "react";
import PropTypes from "prop-types";
import InventoryControl from "./InventoryControl";

function UpdateCoffeeForm(props){
  const { itemToUpdate } = props;

  function handleCoffeeUpdate(event){
    event.preventDefault();
    props.onCoffeeUpdate({
    name: event.target.name.value,
    roast: event.target.roast.value,
    origin: event.target.origin.value,
    quantity: event.target.quantity.value,
    price: event.target.price.value,
    id: event.target.id.value
    })
  }

  return (
    <React.Fragment>
      <h2>Update {itemToUpdate.name}</h2>
      <form onSubmit={handleCoffeeUpdate}>
        <label for="name">Coffee Name</label>
        <input
          id="name"
          type='text'
          name='name'
          defaultValue={itemToUpdate.name} />
        <br />
        <label for="roast">What roast is this?</label>
        <input
          id="roast"
          type='text'
          name='roast'
          defaultValue={itemToUpdate.roast} />
        <br />
        <label for="origin">Country of Origin</label>
        <input
          id="origin"
          type="text"
          name="origin"
          defaultValue={itemToUpdate.origin} />
        <br />
        <label for="quantity">Quantity of Burlap Bags</label>
        <input 
          id="quantity"
          type="number"
          name="quantity"
          defaultValue={itemToUpdate.quantity} />
        <br />
        <label for="price">Price in US Dollars</label>
        <input 
          id="price"
          type="text"
          name="price"
          defaultValue={itemToUpdate.price} />
        <input 
          type="hidden"
          name="id"
          defaultValue={itemToUpdate.id}/>
        <br />
        <button type='submit'>Update!</button>
      </form>
      <p>*Burlap Bags Represent 130lbs of coffee</p>
    </React.Fragment> 
  );
}

UpdateCoffeeForm.propTypes = {
  onCoffeeUpdate: PropTypes.func
}

export default UpdateCoffeeForm; 