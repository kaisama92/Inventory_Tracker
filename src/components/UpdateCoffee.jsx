import React from "react";
import PropTypes from "prop-types";

function UpdateCoffeeForm(props){

  function handleCoffeeUpdate(event){
    event.preventDefault();
    props.onCoffeeUpdate(event.target.id.value, {

    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleCoffeeUpdate}>
        <input
          type='text'
          name='name'
          value={props.name} />
        <input
          type='text'
          name='roast'
          value={props.roast} />
        <input
          type="text"
          name="origin"
          value={props.origin} />
        <input 
          type="number"
          name="quantity"
          value={props.quantity} />
        <input 
          type="text"
          name="price"
          value={props.price} />
        <button type='submit'>Add!</button>
      </form>
      <p>*Burlap Bags Represent 130lbs of coffee</p>
    </React.Fragment> 
  );
}

UpdateCoffeeForm.propTypes = {
  onCoffeeUpdate: PropTypes.func
}

export default UpdateCoffeeForm; 