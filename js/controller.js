// this is the skeleton for all the functions that page.js will call.  within this, i need to rename all the methods and then target whatever class/id she sets up for each section in index.

(function(module) {
  var projectsController = {};
  Projects.fetchAll(projControl.initIndexPage);
  projectsController.index = function() {
    $('.tab-content').hide();
    $('#home').show();
  };

  module.projectsController = projectsController;
})(window);
