$(document).ready(function() {

	// Grab the template script
  	var TemplateScript = $("#ColorTemplate").html();

  	// Compile the template
  	var Template = Handlebars.compile(TemplateScript);

	$.ajax({
		url: "data.json",
		context: document.body
	}).done(function(response) {
		console.log(response);

		// output using jQuery
		// var i = 0;
		// while (i < response.length) {
		// 	$("#Main").append("<div class='ColorDiv' style='background-color:" + response[i].value + "'><p>" + response[i].color + "</p></div>");
		// 	i++;
		// }

		// make object of returned data for Handlebars output
		var wrapper  = {objects: response};	

		// Pass our data to the template
 		var CompiledHTML = Template(wrapper);

  		// Add the compiled html to the page
  		$(".ContentPlaceholder").html(CompiledHTML);

	});

})