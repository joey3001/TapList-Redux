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
          brand={merch.brand}
          pintsLeft={merch.pintsLeft}
          pricePerPint={merch.pricePerPint}
          flavor={merch.flavor}
          id={merch.id}
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