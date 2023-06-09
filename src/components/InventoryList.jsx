import React from 'react';
import Inventory from './Inventory';
import InventoryControl from './InventoryControl';
import PropTypes from 'prop-types';

export function InventoryItem(props){
  console.log("got past the button");
  console.log(props);
  const { visibleItem } = props;
  console.log(props.visibleItem.name);
  console.log("^ This should be the Inventory Item");
  return (
    <React.Fragment>
      <hr/> 
        <h1>Item Detail</h1>
        <h2><em>{visibleItem.name}</em></h2>
        <h3>Roast</h3>
        <p>{visibleItem.roast}</p>
        <h3>Origin</h3>
        <p>{visibleItem.origin}</p>
        <h3>Quantity in Stock</h3>
        <p>{visibleItem.quantity*130}lb(s)</p>
        <h3>{visibleItem.price}</h3>
        <button onClick={props.onCheckout}>Checkout</button>
        <button onClick={props.viewUpdateForm}>Update</button>
    </React.Fragment>
  );
}

export function InventoryList(props){
  function handlePassingOnlyOneItem(event) {
    console.log("" + event.target.value + " <-- Value on button ");
    props.onClickButton(event.target.value)
  }
  return (
    <React.Fragment>
      <hr/>
      {props.mainInventoryList.map((item) => (
        <div key={item.id}>
          <Inventory 
            name = {"Coffee Name: " + item.name}
            roast = {"Roast: " + item.roast}
            quantity = {item.quantity * 130 + "lbs"}
            origin = {"Origin: " + item.origin}
            price = {"Price Per lb: " + item.price}
          />
          <button value={item.id} onClick={handlePassingOnlyOneItem}>Details</button>
        </div>
      ))}
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  onClickButton: PropTypes.func,
  mainInventoryList: PropTypes.array
};

InventoryItem.propTypes = {
  item: PropTypes.object
};
