define([
			'backbone', 
			'hbs!app/templates/found2'
		], function(
			Backbone, 
			found2Template
) {

	var Found2View = Backbone.View.extend({

		template: found2Template,

		initialize: function(params) {
		
		},

	});

	return Found2View;

});
