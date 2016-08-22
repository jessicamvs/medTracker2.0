(function(module) {
  var archivesController = {};
  archivesController.index = function () {
    console.log('running archivesController');
    $('#home').hide();
    $('#archives').show();
  };

  module.aboutController = aboutController;
})(window);
