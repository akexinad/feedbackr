// SurveyNew shows SurveyForm and SurveyFormReview.
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

// SurveyForm shows a form for a user to add input.
import SurveyForm from './SurveyForm.js';
import SurveyFormReview from './SurveyFormReview.js'

class SurveyNew extends Component {
  // The line below is a condensed verson of the usual constructor function creation.
  state = { showSurveyFormReview: false };

  renderContent() {
    if (this.state.showSurveyFormReview) {
      return (
        <SurveyFormReview
          onCancel={ () => this.setState({ showSurveyFormReview: false }) }
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={ () => this.setState({ showSurveyFormReview: true }) }
      />
    );
  }

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    )
  }
}

// connecting reduxForm in order to dump form values when user clicks cancel.
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
