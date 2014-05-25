


define(['require','views/form/PictureResizer/PictureResizer','views/form/Sortable/Sortable'],function(require,PictureResizer,Sortable) {"use strict";
 
	return Backbone.View.extend({

		initialize : function(options) {
            var self = this;
			this.options = _.extend({}, this.defaults,options);
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
            item.each(function(){
                $(this).data("url",$(self.el).data("upload"));
                $(this).data("additional",$(self.el).data("additional"));
                $(this).css({
                    height: $(self.el).data("height"),
                    width: $(self.el).data("width")
                });
                console.log($(this).data("additional"));
                $(this).parent().data("id", $(this).data("id"));
                new PictureResizer({
                    el:$(this)
                
                });
            });
            new Sortable(
                {
                    el: this.el,
                    itemSelector : this.options.container,
                    php: $(self.el).data("upload")
                }
            );
            if($(this.el).data("add"))
            {
                
                this.createEmptyElement();
               
            }
		},
        createEmptyElement: function()
        {
             var self= this;
             var item = $(this.options.itemSelector);
             var element = self.createElement(this.options.itemSelector);
             $(element).css({
                height: $(self.el).data("height"),
                width: $(self.el).data("width")
             });
             $(element).data("url",$(self.el).data("upload"));
             $(element).data("additional",$(self.el).data("additional"));
             var newContainer =  self.createElement(this.options.container);
             newContainer.data("order",$(this.options.container).length+1);
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
        },
        createElement: function(selector){
             if(/^</.test(selector)){
                return $(selector);
            }
            var tag = selector.match(/^\w+/)[0];
            var dom = document.createElement(tag);
            var element = $(dom);
            var pattern = /\.([\w|-]+)/g;
            var classes = pattern.exec(selector);
            while(classes != null){
               element.addClass(classes[1]);
               classes = pattern.exec(selector);
            }
            pattern = /#([\w|-]+)/;
            var id = pattern.exec(selector);
            if(id != null){
                element.attr('id', id[1]);
            }
            return element;
        }
	});
});