import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.description} </p>
      <p>{props.quantity}</p>
      <p>{props.price}</p>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string //"$4.99" 
};

export default Merch;