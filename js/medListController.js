(function(module) {
  var medListController = {};
  medListController.index = function () {
    $('.tab-content').hide();
    console.log('running medListController');
    $('#medList').show();
  };

  module.medListController = medListController;
})(window);
