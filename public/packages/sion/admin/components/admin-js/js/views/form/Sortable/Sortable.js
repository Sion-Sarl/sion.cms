requirejs.config({
   shim : {
        "js/sortable.ajax": {
            deps: ["https://code.jquery.com/ui/1.10.4/jquery-ui.js","css!https://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css"]
        }
   } 
});
define(['require',"js/sortable.ajax"],function(require) {"use strict";
 
	return Backbone.View.extend({
		defaults: {

		},
		initialize : function() {
			this.options = _.extend({}, this.defaults, this.options);
			this.render();
		},
		render : function() {
            $(this.el).sortableAjax();
		}
	});
});