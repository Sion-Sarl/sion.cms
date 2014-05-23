requirejs.config({
   shim : {
        "js/bootstrap-select/bootstrap-select.min": {
            deps: ["bootstrap3"]
        }
   } 
});
define(['require',"js/bootstrap-select/bootstrap-select.min","css!js/bootstrap-select/bootstrap-select.min.css"],function(require) {"use strict";
 
	return Backbone.View.extend({
		defaults: {

		},
		initialize : function() {
			this.options = _.extend({}, this.defaults, this.options);
			this.render();
		},
		render : function() {
            $(this.el).selectpicker();
		}
	});
});