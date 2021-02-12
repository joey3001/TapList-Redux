import React from 'react';
import TapList from './TapList';
import ReusableForm from './ReusableForm'

class NewTapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: []
    };
  }

  handleClick = () => { 
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewtaps = (newTap) => {
    const newTapList = this.state.masterTapList.concat(newTap); 
    this.setState({
      masterTapList: newTapList, 
      formVisibleOnPage: false
    })
  }

  render() {
    let currentlyVisibleState = null; 
    let buttonText = '';
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <ReusableForm onSubmit={this.handleAddingNewTaps} />
      )
      buttonText='Return to tap list'
    } else {
      currentlyVisibleState = 
        <TapList 
        tapList = {this.state.masterTapList}
      />
      buttonText='Add a kombucha tap!'
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-primary" onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    )
  }
}

export default NewTapControl