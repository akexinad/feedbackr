import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h2>Please confirm your entries</h2>
      <button
        className="yellow darken-3 btn-flat"
        onClick={ onCancel }
      >
        Go Back
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps)(SurveyFormReview);
