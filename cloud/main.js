
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.beforeSave("Question", function(request, response) {
	request.object.set("status", "Assigned to Squad 18");
  response.success();
});