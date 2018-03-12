'use strict';


var mongoose = require('mongoose'),
  Data = mongoose.model('Data');

exports.list_all_data = function(req, res) {
  Data.find({}, function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });
};

exports.create_data = function(req, res) {
  var new_info = new Data(req.body);
  new_info.save(function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });
};


exports.read_data = function(req, res) {
  Data.findById(req.params.infoId, function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });
};

exports.update_data = function(req, res) {
  Data.findOneAndUpdate({_id: req.params.poolId}, req.body, {new: true}, function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });
};


exports.delete_data = function(req, res) {
//  console.log("req = " + JSON.stringify(req.params));
  Data.remove({
    _id: req.params.poolId
  }, function(err, info) {
    if (err)
      res.send(err);
    res.json({ message: 'Info successfully deleted' });
  });
};
