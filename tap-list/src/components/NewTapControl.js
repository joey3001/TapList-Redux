import React from 'react';
import TapList from 'TapList';

class NewTapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    let currentlyVisibleState = null; 
    if(this.state.formVisibleOnPage) {
    } else {
      currentlyVisibleState = 
        <TapList 
        taplist = {this.state.masterTapList}
      />
    }
  }
}