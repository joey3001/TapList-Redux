import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types'; 

function TapList(props) {
  const TapListStyle = {
    fontWeight: 600,
    marginTop: 25,
    fontSize: 35
  }

  return (
    <React.Fragment>
      <p style={TapListStyle}>Tap List</p>
      {Object.values(props.tapList).map((tap) => 
        <Tap 
          name={tap.name}
          brand={tap.brand}
          pintsLeft={tap.pintsLeft}
          pricePerPint={tap.pricePerPint}
          flavor={tap.flavor}
          id={tap.id}
          selection={props.onTapSelection}
          key={tap.id}
        />
      )}
    </React.Fragment>
  );
}

TapList.propTypes = { 
  tapList: PropTypes.object,
  onTapSelection: PropTypes.func
}

export default TapList; 