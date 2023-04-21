import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.roast} </p>
      <p>{props.origin}</p>
      <p>{props.quantity}</p>
      <p>{props.price}</p>
      <hr/>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  name: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Inventory;