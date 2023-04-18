import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageVisible: 1
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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.pageVisible === 5) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else if(this.state.pageVisible === 2) {
      currentlyVisibleState = <FirstQuestion />;
      buttonText = "Next";
    } else if(this.state.pageVisible === 3) {
      currentlyVisibleState = <SecondQuestion />;
      buttonText = "Next";
    } else if(this.state.pageVisible === 4) {
      currentlyVisibleState = <ThirdQuestion />;
      buttonText = "Next";
    } else {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;