// this is the skeleton for all the functions that page.js will call.  within this, i need to rename all the methods and then target whatever class/id she sets up for each section in index.

(function(module) {

  var addMedController = {};

  addMedController.index = function () {
    console.log('addMedController.index running');
    $('.tab-content').hide();
    $('#addMed').show();
  };

  module.addMedController = addMedController;
})(window);
