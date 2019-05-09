// SurveyNew shows SurveyForm and SurveyFormReview.
import React, { Component } from 'react';

// SurveyForm shows a form for a user to add input.
import SurveyForm from './SurveyForm.js';
import SurveyFormReview from './SurveyFormReview.js'

class SurveyNew extends Component {
  // The line below is a condensed verson of the usual constructor function creation.
  state = { showSurveyFormReview: false };

  renderContent() {
    if (this.state.showSurveyFormReview) {
      return <SurveyFormReview />;
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

export default SurveyNew;
