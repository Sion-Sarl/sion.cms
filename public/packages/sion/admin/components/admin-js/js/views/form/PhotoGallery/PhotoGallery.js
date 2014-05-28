


define(['require','views/form/PictureResizer/PictureResizer','views/form/Sortable/Sortable',"imagesloaded","lightbox"],function(require,PictureResizer,Sortable,imagesLoaded) {"use strict";
 
	return Backbone.View.extend({

		initialize : function(options) {
            var self = this;
			this.options = _.extend({}, this.defaults,options);
              this.options = _.extend({},this.defaults,$(this.el).data());
            this.options.container = $(this.el).data("container");
            this.options.itemSelector = this.options.container+" "+$(this.el).data("itemselector");
            this.options.baseItemSelector = $(this.el).data("itemselector");
			this.render();
            
           
		},
		render : function() {
            var self = this;
            imagesLoaded($(this.el).get(0),function(){
                if($(self.el).hasClass("masonry"))
                {
                    $(self.el).masonry();
                }
        
                var itemSelector = this.options.itemSelector;
                var container = $(self.options.container);
                var item = $(self.options.itemSelector);
                new Sortable(
                    {
                        el: self.el,
                        itemSelector : self.options.container,
                        php: $(self.el).data("upload"),
                        callback: function(el,old_order,new_order){
                            el.find(self.options.baseItemSelector).data("order",new_order)
                        },
                        sortable: {
                            distance: 12,
                            forcePlaceholderSize: true,
                            items: self.options.container,
                            tolerance: 'pointer', 
                            stop: function( event, ui ) {
                               $(this).sortableAjax("stop",this,event,ui);
                               ui.item.parent().masonry('reloadItems');
                               ui.item.parent().masonry('layout');
                                 
                            },
                            start:function(event,ui){
    
                            },
                            change:function(event,ui)
                            {
                             
                  
                              
                            }
                        }
                    }
                );
                item.each(function(){
                    $(this).data("url",$(self.el).data("upload"));
                    $(this).data("additional",$(self.el).data("additional"));
                    $(this).data("height",$(self.el).data("height"));
                    $(this).data("width",$(self.el).data("width"));
                    $(this).parent().data("id", $(this).data("id"));
                    $(this).data("order",$(this).parent().data("order"));
                    new PictureResizer({
                        el:$(this)
                    
                    });
                });
                if($(self.el).data("add"))
                { 
                    self.createEmptyElement();
                }
                $(self.el).on("pictureResizer.deleted",function(event,el){
                   if($(self.el).hasClass("masonry"))
                    {
                        $(self.el).masonry('remove',el.get(0));
                        $(self.el).masonry('layout');
                    }
                });
                $(self.el).on("pictureResizer.loaded",function(event,el){
                     if($(self.el).hasClass("masonry"))
                    {
                        $(self.el).masonry('layout');
                    }
                });
                $(self.el).on("pictureResizer.updated",function(event){
                     if($(self.el).hasClass("masonry"))
                    {
                        console.log("updated");
                        $(self.el).masonry('layout');
                    }
                });
            })
            
		},
        createEmptyElement: function()
        {
             var self= this;
             var item = $(this.options.itemSelector);
             var element = self.createElement(  this.options.baseItemSelector );
             $(element).data("url",$(self.el).data("upload"));
             $(element).data("additional",$(self.el).data("additional"));
             var newContainer =  self.createElement(this.options.container);
             newContainer.append(element );
             element.data("url",$(self.el).data("upload"));
             $(this.el).append(newContainer);
             $(element).data("width",$(this.el).data("width"));
             console.log($(this.el).data("width"));
             $(this.el).trigger("sortable.added",[ newContainer,function(){
                 new PictureResizer({
                     el:element,
                    text:"AJOUTER UNE IMAGE",
                     callback:function(){
                         self.createEmptyElement();
                     }
               });
                $(element).data("order",newContainer.data("order"));
                 if($(self.el).hasClass("masonry"))
                 {
                    $(self.el).masonry('reloadItems');
                    $(self.el).masonry('layout');
                 }
             }]);
              
             
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