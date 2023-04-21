import React from 'react';
import Inventory from './Merch';
import MerchControl from './MerchControl';
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
        <h3>Description</h3>
        <p>{visibleItem.description}</p>
        <h3>Quantity in Stock</h3>
        <p>{visibleItem.quantity}</p>
        <h3>{visibleItem.price}</h3>
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
        <div>
          <Inventory 
            name = {item.name}
            description = {item.description}
            quantity = {item.quantity}
            price = {item.price}
            key = {item.id}
          />
          <button value={item.id} onClick={handlePassingOnlyOneItem}>Details</button>
        </div>
      ))};
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
