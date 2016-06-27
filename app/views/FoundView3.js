define([
			'backbone', 
			'hbs!app/templates/found3'
		], function(
			Backbone, 
			found3Template
) {

	var Found3View = Backbone.View.extend({

		template: found3Template,

		initialize: function(params) {
		
		},

	});

	return Found3View;

});
