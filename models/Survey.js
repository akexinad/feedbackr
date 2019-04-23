const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = require('./Recipient.js');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  //SUB-DOCUMENTS
  recipients: [RecipientSchema],
  yes: {
    Type: Number,
    default: 0
  },
  no: {
    Type: Number,
    default:0
  },
  dateSend: Date,
  lastResponded: Date,
  // ASSOCIATIONS / RELATIONSHIP FIELDS
  _user: {
    type: Schema.types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('surveys', surveySchema);
