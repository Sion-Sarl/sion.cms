define(['require','views/form/PictureResizer/PictureResizer','views/form/Sortable/Sortable'],function(require,PictureResizer,Sortable) {"use strict";
 
	return Backbone.View.extend({

		initialize : function() {
            var self = this;
			this.options = _.extend({}, this.defaults, this.options);
            this.options.container = $(this.el).data("container");
            this.options.itemSelector = this.options.container+" "+$(this.el).data("itemselector");
			this.render();
            
           
		},
		render : function() {
            var self = this;
            console.log(this.options);
            var itemSelector = this.options.itemSelector;
            var container = $(this.options.container);
            var item = $(this.options.itemSelector);
            new Sortable(
                {
                    el: this.el,
                    itemSelector : itemSelector
                }
            );
            item.each(function(){
                self.clone = $(this).clone(false,false);
                self.clone.removeData();
                self.clone.attr("src",null);
                $(this).data("url",$(self.el).data("upload"));
                new PictureResizer({
                    el:$(this)
                
                });
            });
            if($(this.el).data("add"))
            {
                
                this.createEmptyElement();
               
            }
		},
        createEmptyElement: function()
        {
             var self= this;
             var item = $(this.options.itemSelector);
             var element = self.clone.clone();
             var newContainer =  $(this.options.container).first().clone(false,false);
             newContainer.empty();
             newContainer.append(element );
             element.data("url",$(self.el).data("upload"));
             $(this.el).append(newContainer);
                new PictureResizer({
                    el:element,
                    text:"AJOUTER UNE IMAGE",
                    callback:function(){
                        self.createEmptyElement();
                    }
             });
        }
	});
});