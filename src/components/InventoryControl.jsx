import React from 'react';
import NewCoffeeForm from './AddNewInventory';
import { InventoryList, InventoryItem } from './InventoryList';
import UpdateCoffeeForm from './UpdateCoffee';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDetailsVisible: false,
      isOnHomePage: true,
      isUpdateFormVisible: false,
      detailsVisible: null,
      mainInventoryList: []
    };
  }

  handleClick = () => {
    if (this.state.isOnHomePage){
      this.setState(prevState => ({
        isOnHomePage: !prevState.isOnHomePage
      }))
    } else {
      this.setState(prevState => ({
        isOnHomePage: !prevState.isOnHomePage
      }))
    }
  }

  handleAddingNewTicketToList = (newCoffee) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newCoffee);
    this.setState({mainInventoryList: newMainInventoryList,
                  isOnHomePage: true });
    }

  handleDetails = (id) => {
    if (this.state.detailsVisible === null){
      console.log(id + "handleDetails log");
      const item = this.state.mainInventoryList.filter(merch => merch.id === id)[0];
      console.log(item);
      console.log("^ This is the item received")
      this.setState({detailsVisible: item });
    } else {
      this.setState({detailsVisible: null});
    }
  }

  handleUpdate = (coffee) => {
    const editedCoffeeList = this.state.mainInventoryList
          .filter(item => item.id !== coffee.id)
          .concat(coffee);
    this.setState({
      mainInventoryList: editedCoffeeList,
      isUpdateFormVisible: false,
      detailsVisible: null
    });
  }

  viewUpdate = () => {
    this.setState({isUpdateFormVisible: true})
  }

  handleCheckout = () => {
    const coffee = this.state.detailsVisible
    const checkedOutCoffee = {
      name: coffee.name,
      roast: coffee.roast,
      origin: coffee.origin,
      quantity: (coffee.quantity - (1/130)),
      price: coffee.price,
      id: coffee.id
    }
    const updatedList = this.state.mainInventoryList.filter(item => item.id !== coffee.id).concat(checkedOutCoffee);
    this.setState({
      mainInventoryList: updatedList,
    isUpdateFormVisible: false,
    detailsVisible: null
    });
  }  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.isUpdateFormVisible){
      currentlyVisibleState = <UpdateCoffeeForm itemToUpdate={this.state.detailsVisible} onCoffeeUpdate={this.handleUpdate}/>
    } else if (this.state.detailsVisible != null){
      currentlyVisibleState = <InventoryItem visibleItem={this.state.detailsVisible} viewUpdateForm={this.viewUpdate} onCheckout={this.handleCheckout}/>;
      buttonText= "Return to List";
    } else if (this.state.isOnHomePage) {
      currentlyVisibleState = <InventoryList mainInventoryList={this.state.mainInventoryList} onClickButton={this.handleDetails}/>;
      buttonText= "Add New Coffee";
    } else if(this.state.isUpdateFormVisible){
      currentlyVisibleState = <UpdateCoffeeForm coffee={this.state.detailsVisible} />
    } else {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewTicketToList} />;
      buttonText= "Return to Main List";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {this.state.detailsVisible === null && <button onClick={this.handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}


export default InventoryControl;