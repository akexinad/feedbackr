const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = require('./Recipient.js');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: {
    Type: Number,
    default: 0
  },
  no: {
    Type: Number,
    default:0
  }
});

mongoose.model('surveys', surveySchema);
