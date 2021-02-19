import React from 'react';
import TapList from './TapList';
import NewTap from './NewTap';
import TapDetail from './TapDetail';
import { connect } from 'react-redux'; 

class NewTapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null
    };
  }

  handleClick = () => { 
    if(this.state.selectedTap === null) {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    } else {
      this.setState(() => ({
        formVisibleOnPage: false,
        selectedTap: null
      }));
    }
  }

  handleAddingNewtaps = (newTap) => {
    const newTapList = this.state.masterTapList.concat(newTap); 
    this.setState({
      masterTapList: newTapList, 
      formVisibleOnPage: false
    })
  }

  handleSelectTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(
      (tap) => tap.id === id
    )[0]
    this.setState({ selectedTap: selectedTap})
  }

  handleSellClick = () => {
    if(this.state.selectedTap.pintsLeft >=1) {
      const updatedPints = this.state.selectedTap.pintsLeft-1
      const updatedTap = {...this.state.selectedTap, pintsLeft: updatedPints}
      const editedTapList = this.state.masterTapList.filter( 
        (tap) => tap.id !== this.state.selectedTap.id) 
        .concat(updatedTap)
      this.setState({
        masterTapList: editedTapList, 
        selectedTap: updatedTap
      })
    }
  }

  render() {
    let currentlyVisibleState = null; 
    let buttonText = '';
    if(this.state.selectedTap != null) {
      currentlyVisibleState = (
        <TapDetail 
          tap = {this.state.selectedTap}
          // onClickingDelete={this.handleDeletingTap}
          // onClickingEdit={this.handleEditClick}
          onClickingSell={this.handleSellClick}
        />
      );
      buttonText='Return to tap list'
    }
    else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewTap 
          onSubmit={this.handleAddingNewtaps} 
          buttonText="submit"
        />
      )
      buttonText='Return to tap list'
    } else {
      currentlyVisibleState = 
        <TapList 
        tapList = {this.state.masterTapList}
        onTapSelection = {this.handleSelectTap}
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

NewTapControl = connect()(NewTapControl); 
export default NewTapControl; 