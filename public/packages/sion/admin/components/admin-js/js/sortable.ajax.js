( function( $ ) {
    // The jQuery.aj namespace will automatically be created if it doesn't exist
    $.widget( "ul.sortableAjax", {
        // These options will be used as defaults
        options: {
            sortable: {
                placeholder: "sortable-li-highlight",
                itemSelector: "li",
                stop: function( event, ui ) {
                        var php =  $(this).sortableAjax("option","php");
                        var item = $(this).sortableAjax("option","itemSelector");
                        $(this).children(item ).each(function(){
                            $(this).find("[data-ordre='true']").html($(this).index()+1);
                            $.ajax({
                                  type: "POST",
                                  url: php,
                                  data: {id:$(this).data("id"),order:$(this).index()+1}
                            });
                      });
                } 
            }
        },
        _create: function() {
            // The _create method is where you set up the widget
           if(this.element.data("url"))
           {
                this.options.php = this.element.data("url");
           }
           this.element.find("[data-role='sortable']").sortableAjax(this.options); 
           this.element.sortable(this.options.sortable);
           this.element.addClass("sortable");
             
        },
        _stop: function(event,ui)
        {
            
        },
        _destroy: function() {
            // Use the destroy method to reverse everything your plugin has applied
            return this._super();
        }
    });
})( jQuery );