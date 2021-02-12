import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTap(props) {
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onSubmit({
      name: event.target.name.value,
      brand: event.target.brand.value,
      pintsLeft: event.target.pintsLeft.value,
      pricePerPint: event.target.pricePerPint.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTapFormSubmission}
        buttonText="Submit"/>
    </React.Fragment>
  );
}

NewTap.propTypes = {
  onSubmit: PropTypes.func,
};

export default NewTap;
