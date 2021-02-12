import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types'; 

function TapList(props) {
  return (
    <React.Fragment>
      <h1>Tap List</h1>
      {props.tapList.map((tap) => (
        <Tap 
          name={tap.name}
          brand={tap.brand}
          pintsLeft={tap.pintsLeft}
          pricePerPint={tap.pricePerPint}
          flavor={tap.flavor}
          id={tap.id}
          selection={props.onTapSelection}
        />
      ))}
    </React.Fragment>
  )
}

TapList.propTypes = { 
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
}

export default TapList; 