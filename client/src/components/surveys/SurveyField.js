// SurveyField conatins logic to render a single label and text input.
import React from 'react';

// Here is an example of ES6 nested destructuring
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div
        className="red-text"
        style={{ marginBottom: '2em' }}
      >
        { touched && error }
      </div>
    </div>
  )
}
