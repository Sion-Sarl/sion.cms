( function( $ ) {
    // The jQuery.aj namespace will automatically be created if it doesn't exist
    $.widget( "ul.sortableAjax", {
        // These options will be used as defaults
        options: {
            sortable: {
                placeholder: "sortable-li-highlight",
                stop: function( event, ui ) {
                       $(this).sortableAjax("stop",this,event,ui);
                } 
            }
        },
        _create: function() {
            // The _create method is where you set up the widget
            var self = this;
            self.length = 0;
           if(this.element.data("url"))
           {
                this.options.php = this.element.data("url");
           }
           this.element.find("[data-role='sortable']").sortableAjax(this.options); 
           this.element.sortable(this.options.sortable);
           this.element.addClass("sortable");
           $(this.element).children(this.options.itemSelector).each(function(){
                $(this).data("order",$(this).index()+1);   
                self.length += 1;
                      
           });
           $(this.element).on("sortable.added",function(e,el,callback){
                 console.log("sortable.added");
                 self.length += 1;
                 var order = self.length;
                 el.data("order",order);
                 callback();
           });
             
        },
        stop: function(el,event,ui)
        {
            var php =  $(el).sortableAjax("option","php");
            var item = $(el).sortableAjax("option","itemSelector");
            var callback =  $(el).sortableAjax("option","callback");
            $(el).children(item ).each(function(){
                var old_order =$(this).data("order");
                $(this).find("[data-ordre='true']").html($(this).index()+1);
                $(this).data("order",$(this).index()+1);
                if(callback)
                {
                    callback($(this),old_order,$(this).index()+1);
                }
                if($(this).data("id"))
                {
                    $.ajax({
                      type: "POST",
                      url: php,
                      data: {id:$(this).data("id"),order:$(this).index()+1}
                    });
                                                    
                }
                            
            });
        },
        _destroy: function() {
            // Use the destroy method to reverse everything your plugin has applied
            return this._super();
        }
    });
})( jQuery );