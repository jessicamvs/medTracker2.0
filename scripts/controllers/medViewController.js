(function(module) {
  var medViewController = {};

  medViewController.index = function() {
    console.log('running medViewController');
    $('.tab-content').hide();
    $('.home').show();
  };

  module.medViewController = medViewController;
})(window);
