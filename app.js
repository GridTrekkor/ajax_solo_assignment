$(document).ready(function() {

	$.ajax({
		url: "data.json",
		context: document.body
	}).done(function(response) {

	    $.ajax({
	        url: "Handlebars.hbs"
	    }).done(function(HandlebarsData) {

			var TemplateScript = HandlebarsData;
			var Template = Handlebars.compile(TemplateScript);

	        var Wrapper = {objects: response};
	        var CompiledHTML = Template(Wrapper);

	        $('.ContentPlaceholder').html(CompiledHTML);

		});

	});

});