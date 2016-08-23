(function(module) {
  var aboutController = {};
  aboutController.index = function () {
    console.log('running aboutController');
    $('.tab-content').hide();
    $('#aboutUs').show();
  };

  module.aboutController = aboutController;
})(window);
