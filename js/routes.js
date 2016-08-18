page('/', index);

page('/medications', nameOfFunctionInController.JS goes here);

page('/archives', nameOfFunctionInController.JS goes here);

page('/about', nameOfFunctionInController.JS goes here);

page('*', function() {
  console.error("page not found");
});

page();
