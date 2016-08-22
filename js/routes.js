page('/', medViewController.index);

page('/medications', medListController.index);

page('/archives', archivesController.index);

page('/about', aboutController.index);

page('*', function() {
  console.error("page not found");
});

page();
