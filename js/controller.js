// this is the skeleton for all the functions that page.js will call.  within this, i need to rename all the methods and then target whatever class/id she sets up for each section in index.

(function(module) {
  var medViewController = {};
  // Projects.fetchAll(projControl.initIndexPage);
  medViewController.index = function() {
    console.log('running medViewController');
    $('.tab-content').hide();
    $('.home').show();
  };

  var addMedController = {};
  addMedController.index = function () {
    $('.home').hide();
    $('#addmed').show();
  };

  module.medViewController = medViewController;
  module.addMedController = addMedController;
  module.medListController = medListController;
})(window);




// hide addmed, archives, about us and medlist (both with tab-content as the class)
