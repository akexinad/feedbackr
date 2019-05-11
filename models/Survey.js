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
    default: 0
  },
  // ASSOCIATIONS / RELATIONSHIP FIELD
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateSend: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
