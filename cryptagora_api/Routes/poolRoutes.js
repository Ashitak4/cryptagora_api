'use strict';
module.exports = function(app) {
  var infosList = require('../Controllers/poolController');

  // infosList Routes
  app.route('/pool')
    .get(infosList.list_all_data)
    .post(infosList.create_data);


  app.route('/pool/:poolId')
    .get(infosList.read_data)
    .put(infosList.update_data)
    .delete(infosList.delete_data);
};
