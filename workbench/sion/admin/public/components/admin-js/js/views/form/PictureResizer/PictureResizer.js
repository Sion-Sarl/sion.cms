define(['require','text!views/form/PictureResizer/template/PictureResizer.html',"imgareaselect","holder"],function(require,tpl) {"use strict";
 
	var template = _.template(tpl);
	return Backbone.View.extend({
		defaults: {
			allowed : /.jpg|.png|.gif|.jpeg$/i,			height: 200,			width: 200,
            max_size: 500000000,
            aspectRatio: "1:1"
		},
		initialize : function() {
			this.options = _.extend({}, this.defaults, this.options);
            this.options.file = $(this.el).data("file");
            this.options.id = this.guid();
            this.options.name = $(this.el).attr("name");
            if($(this.el).data("ratio"))
            {
                this.options.aspectRatio = $(this.el).data("ratio");
            }
			this.render();
		},
		render : function() {
            var self = this;
		    $(this.el).replaceWith(template(this.options));
            $("#"+this.options.id+"_btn-crop").hide();			
            $("#"+this.options.id+"_thumbnail").height(this.options.height);			
            $("#"+this.options.id+"_thumbnail img").height(this.options.height);
            $("#"+this.options.id+"_btn-add").click(function(e) {
                e.preventDefault();
                self.resetFormElement();
                $("#"+self.options.id).click();   
            });
            $("#"+self.options.id).change(function(){
                self.fileSelectHandler();
                self.resetFormElement();
            });
            $("#"+this.options.id+"_btn-crop").click(function(e){
                e.preventDefault();
                $("#"+self.options.id+"_modal").modal();
                $("#"+self.options.id+"_modal").find(".modal-dialog").css({
                  width:$("#"+self.options.id+"_logo").get(0).naturalWidth+40, //probably not needed
                  height:$("#"+self.options.id+"_logo").get(0).naturalHeight, //probably not needed 
                  'max-height':'100%'
                });
            });
		},
        updateInfo: function(img,selection) {
            if (!selection.width || !selection.height)
                return;

            var id = $(img).data("id");
            var oImage = $("#"+id+"_preview");
            var scaleX =  1;
            var scaleY =  $('#'+id+"_thumbnail").height()  / selection.height;
            $("#"+id+"_thumbnail").css({
               width: selection.width,
               height: selection.height 
            });
            $('#'+id+"_thumbnail img").css({
                width: Math.round(scaleX * oImage.get(0).naturalWidth),
                height: Math.round(scaleY * oImage.get(0).naturalHeight),
                marginLeft: -Math.round(scaleX * selection.x1),
                marginTop: -Math.round(scaleY * selection.y1),
                marginRight: -Math.round(scaleX * selection.x2)
            });
        
            $('#'+id+'_x1').val(selection.x1);
            $('#'+id+'_y1').val(selection.y1);
            $('#'+id+'_x2').val(selection.x2);
            $('#'+id+'_y2').val(selection.y2);
            $('#'+id+'_w').val(selection.width);
            $('#'+id+'_h').val(selection.height);  
        },
        clearInfo: function()
        {
            jQuery(function($) {
                $('.info #w').val('');
                $('.info #h').val('');  
            });
        },
        resetFormElement: function()
        {
            
        },
        fileSelectHandler:function()
        {
            var self = this;
            var oFile = $("#"+this.options.id)[0].files[0];
            if(this.jcrop_api && oFile)
            {
                this.jcrop_api.destroy();
            }
        
            // check for image type (jpg and png are allowed)
            var rFilter = this.options.allowed;
            if(!rFilter.test(oFile.name))
            {
                $("#"+this.options.id+"_help").addClass("has-error");
                $("#"+this.options.id+"_help").find(".help-block").text("Le format du fichier n'est pas valide");
                this.resetFormElement();
                return;
            }
            // check for file size
            else if ((oFile.size > this.options.max_size)  ) {
                $("#"+this.options.id+"_help").addClass("has-error");
                $("#"+this.options.id+"_help").find(".help-block").text("Le format du fichier n'est pas valide");
                this.resetFormElement();
                return;
            }
            else
            {
                $("#"+this.options.id+"_help").addClass("has-success");
                $("#"+this.options.id+"_help").find(".help-block").text("");
            } 
            // preview element
            var oImage = $("#"+this.options.id+"_preview");
            // prepare HTML5 FileReader
            var oReader = new FileReader();
            oReader.onloadend = function (e) {
                    // display some basic image info
                    // initialize Jcrop
                    $("#"+self.options.id+"_logo").fadeOut(1200,function() {
                        $("#"+self.options.id+"_logo").attr("src",e.target.result);
                        $("#"+self.options.id+"_logo").fadeIn(1000);
                    });
                    oImage.attr("src",e.target.result); 
                    self.imgAreaSelect = $('#'+self.options.id+'_preview').imgAreaSelect({
                        onSelectChange: self.updateInfo,
                        "parent" : ".modal-dialog",
                        instance: true,
                        aspectRatio: self.options.aspectRatio
                    });
                    $("#"+self.options.id+"_btn-crop").show();					
                    self.init();

            };
             // read selected file as DataURL
            oReader.readAsDataURL(oFile);
        },
        init: function()
        {
            var self = this;
            var oImage = $("#"+this.options.id+"_preview");
            self.imgAreaSelect.setSelection(21, 77, oImage.get(0).naturalWidth+21, oImage.get(0).naturalHeight+77);
            self.imgAreaSelect.update();			            self.imgAreaSelect.setOptions({ show: true });
        },
        guid: function()
        {
            var S4 = function() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        }
	});
});