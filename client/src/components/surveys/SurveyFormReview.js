import _ from 'underscore'
import React from 'react';
import { connect } from 'react-redux';

import formFields from './formFields.js';

const SurveyFormReview = ({ onCancel, formValues }) => {

  const reviewFeilds = _.map(formFields, field => {
    return (
      <div key={field.name} >
        <label>{ field.label }</label>
        <div>
          { formValues[field.name] }
        </div>
      </div>
    )
  })

  return (
    <div>
      <h3>Please confirm your entries</h3>
      { reviewFeilds }
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
