define([
			'backbone', 'app/views/FindingView', 'app/views/Finished', 'app/views/FoundView1', 'app/views/FoundView2', 'app/views/FoundView3'
		], function(
			Backbone, FindingView, FinishedView, FoundView1, FoundView2, FoundView3
){

	var Router = Backbone.Router.extend({

		initialize: function() {

				console.log("Started the app");
				
				this.contentView = new Backbone.View({
					el: $('.content')
				})

				//start the app
				Backbone.history.start();
		},

		routes: {
			"": "home",
			"find/:index": "find",
			"found/:index": "found",
			"finished": "finished"
		},

		///routes
		home: function() {
			Backbone.history.navigate("#/find/1");
		},
		
		find: function (i) {
			var findView = new FindingView({
				index: i,
			});
			this.contentView.setView(findView);
			findView.render();
		},
		
		found: function (i) {
			switch (i) {
				case "1":
					var foundView = new FoundView1();
					break;
				case "2":
					var foundView = new FoundView2();
					break;
				case "3":
					var foundView = new FoundView3();
					break;
				default:
			}
			
			this.contentView.setView(foundView);
			foundView.render();
		},
		
		finished: function () {
			var finishedView = new FinishedView;
			
			this.contentView.setView(finishedView);
			finishedView.render();
		}

	});

	return Router;

});
