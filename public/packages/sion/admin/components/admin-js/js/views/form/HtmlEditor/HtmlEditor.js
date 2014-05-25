define(['require','text!views/form/HtmlEditor/template/HtmlEditor.html','css!//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min','css!views/form/HtmlEditor/css/HtmlEditor','ckeditor'],function(require,tpl) {"use strict";
    var template = _.template(tpl);
	return Backbone.View.extend({
		defaults: {  
		},
		initialize : function(options) {
            var self = this;
			this.options = _.extend({},this.defaults,options);
            this.options = _.extend({},  this.options,$("[data-type='html-editor-save-btn']").data());
			this.render();
		},
        render: function()
        {
            var self = this;
            $("[data-type='html-editor-save-btn']").replaceWith(template());
            $("#html-editor-save").click(function(){
                var data = self.getDataJson();
                $.post(self.options.url,data,function(){
                    alert("Données enregistrées");
                }).fail(function(){
                    alert("Impossible de sauvegarder les données");
                });
                
            });
        },
        getDataJson: function(){
            var self = this;
            var json= [];
            $(self.options.editable).each(function(){
                    var data = CKEDITOR.instances[$(this).attr('id')].getData();
                    json.push({id:$(this).attr('id'),data:data});
            });
            return json;
        }
	});
});