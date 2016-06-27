define([
			'backbone', 
			'hbs!app/templates/found1'
		], function(
			Backbone, 
			found1Template
) {

	var Found1View = Backbone.View.extend({

		template: found1Template,

		initialize: function(params) {
		
		},

	});

	return Found1View;

});
