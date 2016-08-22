(function(module) {
  var aboutController = {};
  aboutController.index = function () {
    console.log('running aboutController');
    $('#home').hide();
    $('#aboutUs').show();
  };

  module.aboutController = aboutController;
})(window);
