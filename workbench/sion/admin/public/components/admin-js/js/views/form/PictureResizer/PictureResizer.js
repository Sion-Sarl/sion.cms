define(['require','text!views/form/PictureResizer/template/PictureResizer.html',"plupload","imgareaselect","holder"],function(require,tpl) {"use strict";
 
	var template = _.template(tpl);
	return Backbone.View.extend({
		defaults: {
			allowed : /.jpg|.png|.gif|.jpeg$/i,			
            height: 200,			
            width: 200,
            max_size: 500000000,
            aspectRatio: "1",
            url: ""            
		},
		initialize : function() {
            var self = this;
			this.options = _.extend({}, this.defaults, this.options);
            this.options.file = $(this.el).data("file");
            this.options.id = this.guid();
            this.options.name = $(this.el).attr("name");
            if($(this.el).data("ratio"))
            {
                this.options.aspectRatio = $(this.el).data("ratio");
            }
            if($(this.el).data("height"))
            {
                this.options.height = $(this.el).data("height");
            }
            if($(this.el).data("width"))
            {
                this.options.width = $(this.el).data("width");
            }
            if($(this.el).data("url"))
            {
                this.options.url = $(this.el).data("url");
            }
            
			this.render();
            
           
		},
		render : function() {
            var self = this;
		    $(this.el).replaceWith(template(this.options));
            $("#"+this.options.id+"_btn-crop").hide();			
            $("#"+this.options.id+"_thumbnail").height(this.options.height);
            $("#"+this.options.id+"_thumbnail").width(this.options.width);			
            $("#"+this.options.id+"_thumbnail img").height(this.options.height);
            var id = this.options.id;
            //INIT PLUPLOAD
            var uploader = new plupload.Uploader({
                runtimes : 'html5,flash,silverlight,html4',
                 
                browse_button : self.options.id, // you can pass in id...
                container: self.options.id+"_container", // ... or DOM Element itself
                 
                url : this.options.url,
  
             
                // Flash settings
                flash_swf_url : 'admin-js/js/moxiecode/Moxie.swf',
             
                // Silverlight settings
                silverlight_xap_url : 'admin-js/js/moxiecode/Moxie.xap',
                multi_selection:false,
                max_file_count: 1,
                multipart_params : {
                    "x1" : 0,
                    "x2" : 0,
                    "y1" :0,
                    "y2" : 0,
                    "height" : 0,
                    "width": 0
                },
                init: {
                    
                    PostInit: function() {
                        document.getElementById(self.options.id+'_filelist').innerHTML = '';
             
                        document.getElementById(self.options.id+"_btn-upload").onclick = function() {
                            uploader.start();
                            return false;
                        };
                    },
                    FilesAdded: function(up, files) {
                         if (uploader.files.length == 2) {
                            uploader.removeFile(uploader.files[0]);
                            document.getElementById(self.options.id+'_filelist').innerHTML = '';
                        }
                        plupload.each(files, function(file) {
                            self.fileSelectHandler(file.getNative());
                            console.log(file);
                            document.getElementById(self.options.id+'_filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                        });
                    },
             
                    UploadProgress: function(up, file) {
                        console.log(file.percent );
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
                    }, 
             
                    Error: function(up, err) {
                        console.log(err);
                        document.getElementById('console').innerHTML += "\nError #" + err.code + ": " + err.message;
                    },
                    BeforeUpload: function(up, file) {
                           console.log(this.settings);
                            // Called right before the upload for a given file starts, can be used to cancel it if required
                            uploader.settings.multipart_params["x1"] = parseInt($('#'+id+'_x1').val());
                            uploader.settings.multipart_params["x2"] = parseInt($('#'+id+'_x2').val());
                            uploader.settings.multipart_params["y1"] = parseInt($('#'+id+'_y1').val());
                            uploader.settings.multipart_params["y2"] = parseInt($('#'+id+'_y2').val());
                            uploader.settings.multipart_params["height"] = self.options.height;
                            uploader.settings.multipart_params["width"] = self.options.width;
                          
                    }
                }
            });
            uploader.init();
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
                  width:($(window).width() < $("#"+self.options.id+"_logo").get(0).naturalWidth)?$(window).width():$("#"+self.options.id+"_logo").get(0).naturalWidth, //probably not needed
                  height:($(window).height() < $("#"+self.options.id+"_logo").get(0).naturalHeight)?$(window).height():$("#"+self.options.id+"_logo").get(0).naturalHeight, //probably not needed 
                  'max-height':'100%'
                });
            });
		},
        updateInfo: function(img,selection) {
            if (!selection.width || !selection.height)
                return;

            var id = $(img).data("id");
            var oImage = $("#"+id+"_preview");
            var scaleX =  $('#'+id+"_thumbnail").width()  / selection.width;
            var scaleY =  $('#'+id+"_thumbnail").height()  / selection.height;
  	         $('#'+id+"_thumbnail img").css({
                width: Math.round(scaleX * oImage.width()),
                height: Math.round(scaleY * oImage.height()),
                marginLeft: -Math.round(scaleX * selection.x1),
                marginTop: -Math.round(scaleY * selection.y1),
                'min-height': $('#'+id+"_thumbnail").height(),
                'min-width':   $('#'+id+"_thumbnail").width()
            });
        
            $('#'+id+'_x1').val(Math.round((selection.x1*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width()));
            $('#'+id+'_y1').val(Math.round((selection.y1*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height()));
            $('#'+id+'_x2').val(Math.round((selection.x2*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width()));
            $('#'+id+'_y2').val(Math.round((selection.y2*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height()));
            $('#'+id+'_w').val(Math.round((selection.width*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width()));
            $('#'+id+'_h').val(Math.round((selection.height*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height()));  
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
        upload: function()
        {
            
        },
        fileSelectHandler:function(file)
        {
            var self = this;
            var oFile = file;
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
                    $("#"+self.options.id+"_btn-upload").show();						
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