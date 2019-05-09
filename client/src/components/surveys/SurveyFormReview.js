import React from 'react';

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

export default SurveyFormReview;
