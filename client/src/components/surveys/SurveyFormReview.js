import _ from 'underscore'
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import formFields from './formFields.js';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {

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
      <button
        className="green btn-flat right"
        onClick={ () => submitSurvey(formValues) }
      >
        Send Survey
      <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(
  mapStateToProps,
  actions
)(SurveyFormReview);
