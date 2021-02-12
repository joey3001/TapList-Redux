import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid'; 

function ReusableForm(props) {
  function handleNewTapFormSubmission(event) {
    event.preventDefault(); 
    props.onSubmission({
      name: event.target.name.value,
      brand: event.target.brand.value,
      pintsLeft: event.target.pintsLeft.value,
      pricePerPint: event.target.pricePerPint.value,
      id: v4(),
    })
  }
  return (
    <React.Fragment>
      <form onSubmit = {handleNewTapFormSubmission}>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Name" class="form-control"/>
        </div>
        <div class="form-group">
          <label for="brand">Brand</label>
          <input type="text" name="brand" placeholder="Brand" class="form-control"/>
        </div>
        <div class="form-group">
          <label for="pintsLeft">Pints Left</label>
          <input type="number" name="pintsLeft" placeholder='Pints Left' class="form-control" />
          <br />
        </div>
        <div class="form-group">
          <label for="pricePerPint">Price Per Pint</label>
          <input type="number" name="pricePerPint" step="0.01" placeholder="$0.00" class="form-control"/>
        </div>
        <button type='submit'>{props.buttonText}</button>
      </form>
      <br />
    </React.Fragment>
  );
}

ReusableForm.propTypes = { 
  onNewTapSubmission: PropTypes.func, 
  buttonText: PropTypes.string
}

export default ReusableForm; 