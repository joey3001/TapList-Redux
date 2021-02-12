import React from "react";
import PropTypes from "prop-types";

function TapDetail(props) {
  const { tap, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1>tap Detail</h1>
      <h3>{tap.name}</h3>
      <h3>{tap.brand}</h3>
      <h3>{tap.pintsLeft}</h3>
      <h3>{tap.pricePerPint}</h3>
      <button onClick={onClickingEdit}>edit tap</button>
      <button onClick={() => onClickingDelete(tap.id)}>delete tap</button>
      <hr />
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TapDetail;
