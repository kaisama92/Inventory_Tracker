import React from "react";

function NewTicketForm(props){
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
          placeholder="Quantity of burlap bags" />
        <input 
          type="text"
          name="price"
          placeholder="$1.99" />
        <button type='submit'>Add!</button>
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;