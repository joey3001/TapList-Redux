import React from 'react';
import TapList from './TapList';
// import ReusableForm from './ReusableForm'
import NewTap from './NewTap'
import TapDetail from './TapDetail'

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

  handleSelectTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(
      (tap) => tap.id === id
    )[0]
    this.setState({ selectedTap: selectedTap})
  }

  render() {
    let currentlyVisibleState = null; 
    let buttonText = '';
    if(this.state.selectedTap != null) {
      currentlyVisibleState = (
        <TapDetail 
          tap = {this.state.selectedTap}
          onClickingDelete={this.handleDeletingTap}
          onClickingEdit={this.handleEditClick}
        />
      );
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

export default NewTapControl