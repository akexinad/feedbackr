// SurveyNew shows SurveyForm and SurveyFormReview.
import React, { Component } from 'react';

// SurveyForm shows a form for a user to add input.
import SurveyForm from './SurveyForm.js';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    )
  }
}

export default SurveyNew;
