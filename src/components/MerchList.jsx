import React from 'react';
import Merch from './Merch';
import MerchControl from './MerchControl';
import PropTypes from 'prop-types';

// export function MerchItem(props, id){
//   const merchItem = props.mainMerchList[id]
//   return (
//     <React.Fragment>
//       <hr/> 
//         <Merch 
//           name = {merchItem.name}
//           description = {merchItem.description}
//           quantity = {merchItem.quantity}
//           price = {merchItem.price}
//         />
//     </React.Fragment>
//   );
// }

export function MerchItem(props){
  console.log("got past the button");
  console.log(props);
  const { visiblemerch } = props;
  console.log(props.visiblemerch.name);
  console.log("^ This should be the merch");
  return (
    <React.Fragment>
      <hr/> 
        <h1>Item Detail</h1>
        <h2><em>{visiblemerch.name}</em></h2>
        <h3>Description</h3>
        <p>{visiblemerch.description}</p>
        <h3>Quantity in Stock</h3>
        <p>{visiblemerch.quantity}</p>
        <h3>{visiblemerch.price}</h3>
    </React.Fragment>
  );
}

export function MerchList(props){
  function handlePassingOnlyOneItem(event) {
    console.log("" + event.target.value + " <-- Value on button ");
    props.onClickButton(event.target.value)
  }
  return (
    <React.Fragment>
      <hr/>
      {props.mainMerchList.map((merch) => (
        <div>
          <Merch 
            name = {merch.name}
            description = {merch.description}
            quantity = {merch.quantity}
            price = {merch.price}
            key = {merch.id}
          />
          <button value={merch.id} onClick={handlePassingOnlyOneItem}>Details</button>
        </div>
      ))};
    </React.Fragment>
  );
}

MerchList.propTypes = {
  onClickButton: PropTypes.func,
  mainMerchList: PropTypes.array
};

MerchItem.propTypes = {
  item: PropTypes.object
};
