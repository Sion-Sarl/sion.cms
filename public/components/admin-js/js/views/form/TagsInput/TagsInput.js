define(['require','js/bootstrap-tagsinput/bootstrap-tagsinput.min',"css!js/bootstrap-tagsinput/bootstrap-tagsinput.css"],function(require) {"use strict";
 
	return Backbone.View.extend({
		defaults: {

		},
		initialize : function() {
			this.options = _.extend({}, this.defaults, this.options);
			this.render();
		},
		render : function() {
            $(this.el).tagsinput({
            });
		}
	});
});