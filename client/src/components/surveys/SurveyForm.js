// SurveyForm shows a form for a user to add input.
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

// utils
import validateEmails from '../../utils/validateEmails.js';

// Components
import SurveyField from './SurveyField.js';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title'
  },
  {
    label: 'Subject Line',
    name: 'subject'
  },
  {
    label: 'Email Body',
    name: 'body'
  },
  {
    label: 'Recipient List',
    name: 'emails'
  }
];

class SurveyForm extends Component {
  renderFields() {
    return (
      _.map(FIELDS, ({ label, name }) => {
        return (
          <Field
            key={ name }
            component={ SurveyField }
            type="text"
            label={ label }
            name={ name }
          />
        )
      })
    )
  }

  render() {
    return(
      <div>
        <form
          onSubmit={ this.props.handleSubmit( this.props.onSurveySubmit ) }
        >
          { this.renderFields() }
          <Link
            to="/surveys"
            className="red btn-flat left white-text"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="teal btn-flat right white-text"
          >
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `Missing input: ${ name }`
    }
  })

  return errors;
}

export default reduxForm({
  validate,
  // this tells redux how to name our key value pairs inside our redux-form reducer
  form: 'surveyForm',
  // When you click 'go back', the form data will not be deleted
  destroyOnUnmount: false
})(SurveyForm);
