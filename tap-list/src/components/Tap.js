import React from 'react'; 
import PropTypes from 'prop-types'; 

function Tap(props) {
  return (
    <React.Fragment> 
      <div onClick={() => props.selection(props.id)}>
        <p>Name: {props.name}</p>
        <p>Brand: {props.brand}</p>
        <p>Flavor: {props.flavor}</p>
        <p>Pints Left: {props.pintsLeft}</p>
        <p>Price per Pint: {props.pricePerPint}</p>
      </div>
        <hr/>
    </React.Fragment>
  )
}

Tap.propTypes = { 
  name: PropTypes.string, 
  brand: PropTypes.string, 
  flavor: PropTypes.string, 
  pintsLeft: PropTypes.string, 
  pricePerPint: PropTypes.number,
  id: PropTypes.string, 
  selection: PropTypes.func
}

export default Tap; 