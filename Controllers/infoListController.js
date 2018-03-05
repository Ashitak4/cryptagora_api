'use strict';


var mongoose = require('mongoose'),
  Info = mongoose.model('Infos');

exports.list_all_infos = function(req, res) {
  Info.find({}, function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });
};

exports.create_an_info = function(req, res) {
  var new_info = new Info(req.body);
  new_info.save(function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });
};


exports.read_an_info = function(req, res) {
  Info.findById(req.params.infoId, function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });
};

exports.update_an_info = function(req, res) {
  Info.findOneAndUpdate({_id: req.params.InfoId}, req.body, {new: true}, function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });
};


exports.delete_an_info = function(req, res) {


  Info.remove({
    _id: req.params.infoId
  }, function(err, info) {
    if (err)
      res.send(err);
    res.json({ message: 'Info successfully deleted' });
  });
};
