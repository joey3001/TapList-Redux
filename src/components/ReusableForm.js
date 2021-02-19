import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" placeholder="Brand" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="brand">Flavor</label>
          <input type="text" name="flavor" placeholder="Flavor" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="pricePerPint">Price Per Pint</label>
          <input type="number" name="pricePerPint" step="0.01" placeholder="$0.00" className="form-control"/>
        </div>
        <button type='submit'>{props.buttonText}</button>
      </form>
      <br />
    </React.Fragment>
  );
}

ReusableForm.propTypes = { 
  formSubmissionHandler: PropTypes.func, 
  buttonText: PropTypes.string
}

export default ReusableForm; 