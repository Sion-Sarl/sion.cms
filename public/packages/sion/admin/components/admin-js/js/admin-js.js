
define(['bootstrap3','backbone'],function() {
    "use strict";
 
	return Backbone.View.extend({
		defaults: {

		},
		initialize : function() {
			this.options = _.extend({}, this.defaults, this.options);
			this.render();
		},
        render: function() {
            if($("[data-type='picture-resizer']").length > 0)
           {
                require(['views/form/PictureResizer/PictureResizer'],function(PictureResizer){
                    new PictureResizer(
                        {
                            el : $("[data-type='picture-resizer']")
                        }
                    );
                });
           }
           if($("[data-type='wysiwyg']").length > 0)
           {
                require(['views/form/Wysiwyg/Wysiwyg'],function(Wysiwyg){
                    $("[data-type='wysiwyg']").each(function() {
                         new Wysiwyg(
                            {
                                el : $(this)
                            }
                        ); 
                    });
                });
           }
           if($("[data-type='tags-input']").length > 0)
           {
                require(['views/form/TagsInput/TagsInput'],function(TagsInput){
                    new TagsInput(
                        {
                            el : $("[data-type='tags-input']")
                        }
                    );
                });
           }
           if($("[data-sortable='true']").length > 0)
           {
                require(['views/form/Sortable/Sortable'],function(Sortable){
                     $("[data-sortable='true']").each(function(){
	                    new Sortable(
	                        {
	                            el : $(this)
	                        }
	                    );
                	});
                });
           }
           if($("[data-type='data-table']").length > 0)
           {
                require(['views/form/DataTable/DataTable'],function(DataTable){
                    $("[data-type='data-table']").each(function(){
                        new DataTable(
                            {
                                el : $(this)
                            }
                        );  
                    })  
                });
           }
            if($("[data-type='select']").length > 0)
           {
                require(['views/form/Select/Select'],function(Select){
                    $("[data-type='select']").each(function(){
                        new Select(
                            {
                                el : $(this)
                            }
                        );  
                    })  
                });
           }
           if($("[data-type='datepicker']").length > 0)
           {
                require(['views/form/DatePicker/DatePicker'],function(DatePicker){
                    $("[data-type='datepicker']").each(function(){
                        new DatePicker(
                            {
                                el : $(this)
                            }
                        );  
                    })  
                });
           }
        }
	});
});