import React from "react";
import PropTypes from "prop-types";

function TapDetail(props) {
  const { tap, onClickingSell } = props;
  let message; 
  if(tap.pintsLeft < 1) {
    message = <h1>This tap is dry</h1>
  }
  return (
    <React.Fragment>
      {message}
      <h1>tap Detail</h1>
      <h3>Name: {tap.name}</h3>
      <h3>Brand: {tap.brand}</h3>
      <h3>Pints Left: {tap.pintsLeft}</h3>
      <h3>Price per Pint: {tap.pricePerPint}</h3>
      <button className='btn btn-primary' onClick={() => onClickingSell(tap.id)}>Sell 1 pint</button>
      <hr />
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  // was planning on adding the two functions below
  // onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func, 
  onClickingSell: PropTypes.func
};

export default TapDetail;
