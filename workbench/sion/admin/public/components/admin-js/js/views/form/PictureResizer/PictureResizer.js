define(['require','text!views/form/PictureResizer/template/PictureResizer.html','css!views/form/PictureResizer/css/PictureResizer.css',"plupload","imgareaselect","holder"],function(require,tpl) {"use strict";
 
	var template = _.template(tpl);
	return Backbone.View.extend({
		defaults: {
			allowed : /.jpg|.png|.gif|.jpeg$/i,			
            height: 200,			
            width: 200,
            max_size: 500000000,
            aspectRatio: "1",
            url: "",
            text:"VOTRE IMAGE",
            fileId: ""       
		},
		initialize : function(options) {
            var self = this;
			this.options = _.extend({},this.defaults,options);
            this.options.file = ($(this.el).data("file"))?$(this.el).data("file"):$(this.el).attr("src");
            if($(this.el).data("filefull"))
            {
                this.options.fileFull = $(this.el).data("filefull");
            }
            if($(this.el).data("id"))
            {
                this.options.fileId = $(this.el).data("id");
            }
            this.options.id = this.guid();
            this.options.name = $(this.el).attr("name");
            if($(this.el).data("ratio"))
            {
                this.options.aspectRatio = $(this.el).data("ratio");
            }
            if($(this.el).css("height"))
            {
                this.options.height = $(this.el).css("height");
            }
            if($(this.el).css("width"))
            {
                 this.options.width = $(this.el).css("width");
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
            $("#"+this.options.id+"_thumbnail").height(this.options.height);
            $("#"+this.options.id+"_thumbnail").width(this.options.width);			
            $("#"+this.options.id+"_thumbnail img").height(this.options.height);
            $("#"+this.options.id+"_thumbnail img").width(this.options.width);
            var id = this.options.id;
            //INIT PLUPLOAD
            var uploader = new plupload.Uploader({
                runtimes : 'html5,flash,silverlight,html4',
                 
                browse_button : self.options.id+"_btn-add", // you can pass in id...
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
                    Init: function(up){
                        if(self.options.file )
                        {
                            var file = new plupload.File({
                                "name": $(self.el).data("name"),
                                "size": $(self.el).data("size")
                            });
                            file.percent = 100;
                            file.loaded = $(self.el).data("size");
                            file.status = plupload.DONE;
                            uploader.addFile(file, $(self.el).data("name"));
                        }
                        
                    },
                    FilesAdded: function(up, files) {
                         if (uploader.files.length == 2) {
                            try
                            {
                                uploader.removeFile(uploader.files[0]);
                            }
                            catch(e)
                            {
                                
                            }
                            document.getElementById(self.options.id+'_filelist').innerHTML = '';
                        }
                        plupload.each(files, function(file) {
                            try
                            {
                                self.fileSelectHandler(file.getNative(),function(){
                                    $("#"+self.options.id+"_btn-upload").click();
                                    if(self.options.callback)
                                    {
                                         self.options.callback();
                                    }
                                }); 
                            }
                            catch(e)
                            {
                                
                            }
                            document.getElementById(self.options.id+'_filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                        });
                        
                      
                    },
             
                    UploadProgress: function(up, file) {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
                        $("#"+self.options.id+"_btn-crop").hide();
                    }, 
             
                    Error: function(up, err) {
                        console.log(err);
                    },
                    BeforeUpload: function(up, file) {
                    
                        // Called right before the upload for a given file starts, can be used to cancel it if required
                        uploader.settings.multipart_params["x1"] = parseInt($('#'+id+'_x1').val());
                        uploader.settings.multipart_params["x2"] = parseInt($('#'+id+'_x2').val());
                        uploader.settings.multipart_params["y1"] = parseInt($('#'+id+'_y1').val());
                        uploader.settings.multipart_params["y2"] = parseInt($('#'+id+'_y2').val());
                        uploader.settings.multipart_params["height"] = parseInt(self.options.height);
                        uploader.settings.multipart_params["width"] = parseInt(self.options.width);
                        console.log(  uploader.settings.multipart_params);
                        $("#"+self.options.id+"_btn-crop").hide();
                          
                    },
                    UploadComplete: function(up, file){
                        $("#"+self.options.id+"_btn-crop").show();
                    },
                    FileUploaded:function(up,file,info){
                        console.log(info);
                        var json = jQuery.parseJSON(info.response);
                        if(json.id)
                        {
                            console.log(json.id);
                            $("#"+self.options.id+"_preview").data("fileid",json.id);
                        }
                    }
                }
            });
            uploader.init();
            $("#"+this.options.id+"_btn-add").click(function(e) {
                e.preventDefault();
            });
            $("#"+self.options.id+"_modal").appendTo($("body"));
            $("#"+this.options.id+"_btn-crop").click(function(e){
                e.preventDefault();
           
                $("#"+self.options.id+"_modal").modal({backdrop: 'static'});
                $("#"+self.options.id+"_modal").find(".modal-dialog").css({
                  width:($(window).width() < $("#"+self.options.id+"_preview").get(0).naturalWidth)?$(window).width():$("#"+self.options.id+"_preview").get(0).naturalWidth, //probably not needed
                  height:($(window).height() < $("#"+self.options.id+"_preview").get(0).naturalHeight)?$(window).height():$("#"+self.options.id+"_preview").get(0).naturalHeight, //probably not needed 
                  'max-height':'100%'
                });
                if(self.options.fileFull)
                {
                    $("#"+self.options.id+"_logo").attr("src",self.options.fileFull);
                }
             
            });
            if(!this.options.file )
            {
               $("#"+this.options.id+"_btn-crop").hide();
               $("#"+this.options.id+"_btn-upload").hide();
               
            }
            else
            {
                $("#"+this.options.id+"_btn-upload").hide();  
                if(!self.options.fileFull)
                {
                     $("#"+self.options.id+"_preview").attr("src",self.options.file);
                }
                else
                {
                     $("#"+self.options.id+"_preview").attr("src",self.options.fileFull);  
                }
                self.imgAreaSelect = $('#'+self.options.id+'_preview').imgAreaSelect({
                        onSelectChange: self.updateInfo,
                        parent : $("#"+self.options.id+"_imgarea-parent"),
                        instance: true,
                        aspectRatio: self.options.aspectRatio,
                        movable: true,
                        onInit: function(){
                            var x1 = Math.round(($(self.el).data("x1")*$("#"+id+"_preview").get(0).width)/$("#"+id+"_preview").get(0).naturalWidth);
                            var y1 = Math.round(($(self.el).data("y1")*$("#"+id+"_preview").get(0).height)/$("#"+id+"_preview").get(0).naturalHeight);
                            var x2 = Math.round(($(self.el).data("x2")*$("#"+id+"_preview").get(0).width)/$("#"+id+"_preview").get(0).naturalWidth);
                            var y2 = Math.round(($(self.el).data("y2")*$("#"+id+"_preview").get(0).height)/$("#"+id+"_preview").get(0).naturalHeight);	
                            console.log(x1,y1,x2,y2);	
                            self.imgAreaSelect.setSelection(x1,y1,x2,y2);
                            self.imgAreaSelect.setOptions({ show: true });
                            self.imgAreaSelect.update();       
                        }
                });	
            }
            $("#"+self.options.id+"_modal").on('hidden.bs.modal', function () {
                
                var data = {
                        "x1":  parseInt($('#'+id+'_x1').val()),
                        "x2":  parseInt($('#'+id+'_x2').val()),
                        "y1":  parseInt($('#'+id+'_y1').val()),
                        "y2":  parseInt($('#'+id+'_y2').val()),
                        "width":  parseInt(self.options.width),
                        "height":  parseInt(self.options.height),
                        "id": $("#"+id+"_preview").data("fileid")
                };
                console.log(data);
                $.ajax({
                   url: $("#"+id+"_preview").data("url"),
                   type: 'POST',
                   dataType: 'json',
                   data:data,
                   success: function(response) {
                        console.log(response);
                      
                   }
                });
            })	
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
            var x1 = Math.round((selection.x1*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width());
            var y1 = Math.round((selection.y1*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height());
            var x2 = Math.round((selection.x2*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width());
            var y2 = Math.round((selection.y2*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height());
            var w = Math.round((selection.width*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width());
            var h = Math.round((selection.height*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height());
            $('#'+id+'_x1').val(x1);
            $('#'+id+'_y1').val(y1);
            $('#'+id+'_x2').val(x2);
            $('#'+id+'_y2').val(y2);
            $('#'+id+'_w').val(w);
            $('#'+id+'_h').val(h);  
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
        fileSelectHandler:function(file,callback)
        {
            var self = this;
            var oFile = file;
            var id = self.options.id;
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
                        parent : $("#"+self.options.id+"_imgarea-parent"),
                        instance: true,
                        aspectRatio: self.options.aspectRatio,
                        show: true 
                    });	
                    $('#'+id+'_x1').val(0);
                    $('#'+id+'_y1').val(0);
                    $('#'+id+'_x2').val(oImage.get(0).naturalWidth);
                    $('#'+id+'_y2').val(oImage.get(0).naturalHeight);
                    $("#"+self.options.id+"_btn-crop").show();						
                    self.init(function(){
                           callback();
                    });
                 

            };
             // read selected file as DataURL
            oReader.readAsDataURL(oFile);
        },
        init: function(callback)
        {
            var self = this;
            var oImage = $("#"+this.options.id+"_preview");
            self.imgAreaSelect.setSelection(0, 0, oImage.get(0).naturalWidth, oImage.get(0).naturalHeight);
            self.imgAreaSelect.update();			            
            callback();
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