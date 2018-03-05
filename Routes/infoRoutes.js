'use strict';
module.exports = function(app) {
  var infosList = require('../Controllers/infoListController');

  // infosList Routes
  app.route('/infos')
    .get(infosList.list_all_infos)
    .post(infosList.create_an_info);


  app.route('/infos/:infoId')
    .get(infosList.read_an_info)
    .put(infosList.update_an_info)
    .delete(infosList.delete_an_info);
};
