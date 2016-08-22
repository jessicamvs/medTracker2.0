(function(module) {
  var archivesController = {};
  archivesController.index = function () {
    console.log('running archivesController');
    $('.tab-content').hide();
    $('#archiveMedList').show();
  };

  module.archivesController = archivesController;
})(window);
