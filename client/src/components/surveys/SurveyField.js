// SurveyField conatins logic to render a single label and text input.
import React from 'react';

export default ({ input, label }) => {
  console.log(input);
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  )
}