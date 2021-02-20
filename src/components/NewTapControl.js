import React from 'react';
import TapList from './TapList';
import NewTap from './NewTap';
import TapDetail from './TapDetail';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types'; 

class NewTapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
    const { dispatch } = this.props;
    const { name, brand, flavor, pintsLeft, pricePerPint, id } = newTap; 
    const action = {
      type: 'ADD_TICKET',
      name: name,
      brand: brand,
      flavor: flavor, 
      pintsLeft: pintsLeft, 
      pricePerPint: pricePerPint,
      id: id
    }; 

    dispatch(action);
    this.setState({formVisibleOnPage: false}); 
  }

  handleSelectTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
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
        tapList = {this.props.masterTapList}
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

NewTapControl.propTypes = {
  masterTapList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTapList: state
  }
}

NewTapControl = connect(mapStateToProps)(NewTapControl); 
export default NewTapControl; 