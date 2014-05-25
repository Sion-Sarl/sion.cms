requirejs.config({
   "paths": {
        "js": "admin-js/js",
        "views": "admin-js/js/views",
        "jcrop": "https://cdnjs.cloudflare.com/ajax/libs/jquery-jcrop/0.9.12/js/jquery.Jcrop.min",
        "wysihtml5": "https://cdnjs.cloudflare.com/ajax/libs/wysihtml5/0.3.0/wysihtml5.min",
        "text": "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text.min",
        "css": "https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.1/css",
        "holder": "https://cdnjs.cloudflare.com/ajax/libs/holder/2.2.0/holder",
        "imgareaselect": "admin-js/js/jquery.imgareaselect/scripts/jquery.imgareaselect",
        "ckeditor": "admin-js/js/ckeditor/adapters/jquery",
        "plupload": "admin-js/js/moxiecode/plupload.full.min"
   },
   "shim" : {
       "imgareaselect":
       {
           "deps":["jquery","css!js/jquery.imgareaselect/css/imgareaselect-animated.css"]
       },
       "bootstrap-wysihtml5-0.0.2.min":
       {
            "deps":["bootstrap3","css!https://www.site.sion.nc/codelgniter/application/modules/admin/views/templates-admin/js/lib/css/wysiwyg-color.css','css!https://www.site.sion.nc/codelgniter/application/modules/admin/views/templates-admin/js/lib/css/bootstrap-wysihtml5-0.0.2.css","wysihtml5"]
       },
       "ckeditor":
       {
            "deps":["admin-js/js/ckeditor/ckeditor"]
       },
       "backbone":
       {
            "deps":["jquery","underscore"]
       }
    }
});
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
           if($("[data-type='photo-gallery']").length > 0)
           {
                require(['views/form/PhotoGallery/PhotoGallery'],function(PhotoGallery){
                    $("[data-type='photo-gallery']").each(function(){
                        new PhotoGallery(
                            {
                                el : $(this)
                            }
                        );  
                    })  
                });
           }
           if($("[contenteditable='true']").length > 0)
           {
                require(['views/form/HtmlEditor/HtmlEditor'],function(HtmlEditor){
                     new HtmlEditor(
                            {
                                editable : $("[contenteditable='true']")
                            }
                     );  
                });
           }
        }
	});
});