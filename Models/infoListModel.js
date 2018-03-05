'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InfoSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the info'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  value: {
      type: String,
      default : "a content"
    },
});

module.exports = mongoose.model('Infos', InfoSchema);
