import React from 'react';
import NewTicketForm from './NewTicketForm';
import { MerchList, MerchItem } from './MerchList';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageVisible: 1,
      isDetailsVisible: false,
      isOnHomePage: true,
      detailsVisible: null,
      mainInventoryList: []
    };
  }

  handleClick = () => {
    if (this.state.pageVisible >= 5){
      this.setState(prevState => ({
        pageVisible: prevState.pageVisible - 4
      }))
    } else {
      this.setState(prevState => ({
        pageVisible: prevState.pageVisible +1
      }))
    }
  }

  handleDetails = (id) => {
    console.log(id + "handleDetails log");
    const item = this.state.mainMerchList.filter(merch => merch.id === id)[0];
    console.log(item);
    console.log("^ This is the item received")
    this.setState({detailsVisible: item });
  }

  // handleViewDetails = () => {}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.detailsVisible != null){
      currentlyVisibleState = <MerchItem visiblemerch={this.state.detailsVisible}/>
    } else if (this.state.isOnHomePage) {
      currentlyVisibleState = <MerchList mainMerchList={this.state.mainMerchList} onClickButton={this.handleDetails}/>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {this.state.detailsVisible === null && <button onClick={this.handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}


export default MerchControl;