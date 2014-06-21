define(['require','text!views/form/PictureResizer/template/PictureResizer.html','css!views/form/PictureResizer/css/PictureResizer.css',"plupload","imgareaselect","holder"],function(require,tpl) {"use strict";
 
	var template = _.template(tpl);
	return Backbone.View.extend({
		defaults: {
			allowed : /.jpg|.png|.gif|.jpeg$/i,			
            height: 200,			
            width: "100%",
            max_size: 500000000,
            aspectRatio: "1",
            url: "",
            text:"VOTRE IMAGE",
            fileId: "",
            maxHeight: 2048,
            maxWidth: 2048       
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
            if($(this.el).data("additional"))
            {
                this.options.additional = $(this.el).data("additional");
            }
            if($(this.el).data("order"))
            {
                this.options.order = $(this.el).data("order");
            }
            if($(this.el).data("x1") != "undefined")
            {
                this.options["x1"] = $(this.el).data("x1");
            }
             if($(this.el).data("x2") !== "undefined")
            {
                this.options["x2"] = $(this.el).data("x2");
            }
            if($(this.el).data("y1") !== "undefined")
            {
                this.options["y1"] = $(this.el).data("y1");
            }
            if($(this.el).data("y2") !== "undefined")
            {
                this.options["y2"] = $(this.el).data("y2");
            }
            this.options.className = $(this.el).attr("class");
            this.options.style = $(this.el).attr("style");
            this.render();
		},
		render : function() {
            var self = this;
            var positioningProps = ["height","width","float","left","top","margin-left","margin-top","margin-bottom","padding-bottom","margin-right","padding-right","padding-left","padding-top","padding","margin"];
            var style= {};
            for(var i in positioningProps ){
                style[positioningProps[i]] = $(this.el).css(positioningProps[i]);
            }
            if(typeof this.options.width === 'string' && this.options.width.indexOf("%") > -1)
            {
                this.options.placeHolderWidth = (parseInt(this.options.width)/100)*$(this.el).parent().width();
            }
            else
            {
                this.options.placeHolderWidth = this.options.width;
            }
            this.options.widthPlaceHolder =          
		    $(this.el).replaceWith(template(this.options));	

            var div =  $("#"+this.options.id+"_thumbnail");
            $("#"+this.options.id+"_thumbnail img").attr("class",this.options.className);
            for(var i in positioningProps ){
                if(style[positioningProps[i]] != 0)
                {
                    div.css(positioningProps[i],style[positioningProps[i]]||""); 
                }
                
            }
            console.log(this.options.width);
            $("#"+self.options.id+"_thumbnail img").width( this.options.width);
            
            $("#"+self.options.id+"_thumbnail").width( this.options.width);
            
            $("#"+self.options.id+"_thumbnail img").height($("#"+self.options.id+"_thumbnail").height());
            
            if($("#"+self.options.id+"_thumbnail").height() == 0)
            {
                $("#"+self.options.id+"_thumbnail").height($("#"+self.options.id+"_thumbnail img").width());
                $("#"+self.options.id+"_thumbnail img").height($("#"+self.options.id+"_thumbnail img").width());
            }
            if(this.options.order)
            {
                $("#"+this.options.id+"_thumbnail img").data("order",this.options.order);
            }
            if(this.options.file)
            {
                $("#"+this.options.id+"_thumbnail_modal").height(this.options.height);
                $("#"+this.options.id+"_thumbnail_modal").width(this.options.width);	
                $("#"+this.options.id+"_thumbnail_modal img").height(this.options.height);
                $("#"+this.options.id+"_thumbnail_modal img").width(this.options.width);
            }
            else
            {
                $("#"+this.options.id+"_thumbnail_modal").height(345);
                $("#"+this.options.id+"_thumbnail_modal").width(345);	
                $("#"+this.options.id+"_thumbnail_modal img").height(345);
                $("#"+this.options.id+"_thumbnail_modal img").width(345);
            }		
            var id = this.options.id;
            //INIT PLUPLOAD
            var uploader = new plupload.Uploader({
                runtimes : 'html5,flash,silverlight,html4',
                 
                browse_button : self.options.id+"_btn-add", // you can pass in id...
                container: self.options.id+"_container", // ... or DOM Element itself
                resize: {
                  height: self.options.maxHeight,
                  width: self.options.maxWidth  
                },
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
                           
                        });
                      
                      
                    },
                    
                    UploadProgress: function(up, file) {
                        document.getElementById(self.options.id+'_filelist').innerHTML = '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
                        $("#"+self.options.id+"_btn-crop").hide();
                    }, 
             
                    Error: function(up, err) {
                        console.log(err);
                        uploader.splice();
                    },
                    BeforeUpload: function(up, file) {
                    
                        // Called right before the upload for a given file starts, can be used to cancel it if required
                        uploader.settings.multipart_params["id"] = self.options.fileId;
                        uploader.settings.multipart_params["x1"] = parseInt($('#'+id+'_x1').val());
                        uploader.settings.multipart_params["x2"] = parseInt($('#'+id+'_x2').val());
                        uploader.settings.multipart_params["y1"] = parseInt($('#'+id+'_y1').val());
                        uploader.settings.multipart_params["y2"] = parseInt($('#'+id+'_y2').val());
                        uploader.settings.multipart_params["height"] =  parseInt($('#'+id+'_h').val());
                        uploader.settings.multipart_params["width"] = parseInt($('#'+id+'_w').val());
                        uploader.settings.multipart_params["order"] = parseInt($("#"+self.options.id+"_thumbnail img").data("order"));
                        console.log(self.options.additional);
                        if(self.options.additional)
                        {
                           var data = self.options.additional;
                           console.log(self.options.additional);
                            _.extend(uploader.settings.multipart_params,uploader.settings.multipart_params,data); 
                        }
                        console.log(  uploader.settings.multipart_params);
                        $("#"+self.options.id+"_btn-crop").hide();
                        $("#"+self.options.id+"_modal .close").prop('disabled', true);
                        $("#"+self.options.id+"_modal .validate").prop('disabled', true);
                        
                    },
                    UploadComplete: function(up, files){
                        $("#"+self.options.id+"_modal .close").prop('disabled',false);
                        $("#"+self.options.id+"_modal .validate").prop('disabled',false);
                        uploader.splice();
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
                if(self.options.fileFull)
                {
                    $("#"+self.options.id+"_logo").attr("src",self.options.fileFull);
                }
                $("#"+self.options.id+"_logo_modal").attr("src",$("#"+self.options.id+"_logo").attr("src"));
                $("#"+self.options.id+"_modal").modal({backdrop: 'static'});
            });
            $("#"+self.options.id+"_logo").click(function(e){
                 e.preventDefault();
                 $("#"+self.options.id+"_btn-crop").click();
            });
            
            
            if(!this.options.file )
            {
               $("#"+this.options.id+"_btn-crop").hide();
               $("#"+this.options.id+"_btn-upload").hide();
               
            }
            else
            {
                $("#"+this.options.id+"_btn-crop").hide();
                $("#"+this.options.id+"_btn-upload").hide();  
                if(!self.options.fileFull)
                {
                     $("#"+self.options.id+"_preview").attr("src",self.options.file);
                }
                else
                {
                     $("#"+self.options.id+"_preview").attr("src",self.options.fileFull);  
                }
                $("#"+self.options.id+"_preview").load(function(){
                    self.imgAreaSelect = $('#'+self.options.id+'_preview').imgAreaSelect({
                        onSelectChange: self.updateInfo,
                        parent : $("#"+self.options.id+"_imgarea-parent"),
                        instance: true,
                        aspectRatio: self.options.aspectRatio,
                        movable: true,
                        onInit: function(){
                            console.log(self.options);
                            var x1 = Math.round((self.options["x1"]*$("#"+id+"_preview").get(0).width)/$("#"+id+"_preview").get(0).naturalWidth);
                            var y1 = Math.round((self.options["y1"]*$("#"+id+"_preview").get(0).height)/$("#"+id+"_preview").get(0).naturalHeight);
                            var x2 = Math.round((self.options["x2"]*$("#"+id+"_preview").get(0).width)/$("#"+id+"_preview").get(0).naturalWidth);
                            var y2 = Math.round((self.options["y2"]*$("#"+id+"_preview").get(0).height)/$("#"+id+"_preview").get(0).naturalHeight);	
                            console.log(x1,y1,x2,y2);	
                            self.imgAreaSelect.setSelection(x1,y1,x2,y2);
                            self.imgAreaSelect.setOptions({ show: true });
                            self.imgAreaSelect.update();    
                            $('#'+id+'_x1').val(self.options["x1"]);
                            $('#'+id+'_y1').val(self.options["y1"]);
                            $('#'+id+'_x2').val(self.options["x2"]);
                            $('#'+id+'_y2').val(self.options["y2"]);
                            $('#'+id+'_h').val(parseInt($("#"+id+"_thumbnail").height()));
                            $('#'+id+'_w').val(parseInt($("#"+id+"_thumbnail").width()));
                        }
                    });	
                });
                
            }
            $("#"+self.options.id+"_modal").on('hide.bs.modal', function (e) {
                
                var data = {
                        "x1":  parseInt($('#'+id+'_x1').val()),
                        "x2":  parseInt($('#'+id+'_x2').val()),
                        "y1":  parseInt($('#'+id+'_y1').val()),
                        "y2":  parseInt($('#'+id+'_y2').val()),
                        "width":  parseInt(  $('#'+id+'_w').val()),
                        "height":  parseInt(  $('#'+id+'_h').val()),
                        "id": $("#"+id+"_preview").data("fileid")
                };
                if(self.options.file)
                {
                    if(data.x1  || data.x2  || data.y1  || data.y2)
                    {
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
                    }
                    else
                    {
                        alert("Vous devez selectionner un zone");
                        e.preventDefault();
                    }
                }
                $('#'+self.options.id+"_thumbnail").parent().parent().trigger("pictureResizer.updated"); 
               
            });
            $('#'+id+'_ratio').change(function(){
               self.imgAreaSelect.setOptions({show:true, aspectRatio: $(this).val()});
                 var x1 = Math.round(($(self.el).data("x1")*$("#"+id+"_preview").get(0).width)/$("#"+id+"_preview").get(0).naturalWidth);
                var y1 = Math.round(($(self.el).data("y1")*$("#"+id+"_preview").get(0).height)/$("#"+id+"_preview").get(0).naturalHeight);
                var x2 = Math.round(($(self.el).data("x2")*$("#"+id+"_preview").get(0).width)/$("#"+id+"_preview").get(0).naturalWidth);
                var y2 = Math.round(($(self.el).data("y2")*$("#"+id+"_preview").get(0).height)/$("#"+id+"_preview").get(0).naturalHeight);	
               self.imgAreaSelect.setSelection(x1,y1,x2,y2);
               self.imgAreaSelect.update();  
            });
            $("#"+id+"_delete").click(function(e){
                e.preventDefault();
                if(confirm("Êtes vous sûr de vouloir supprimer cette image ?"))
                {
                  
                    $('#'+id+"_thumbnail").parent().fadeOut(1000,function(){
                        var parent = $('#'+id+"_thumbnail").parent();
                        $('#'+id+"_thumbnail").parent().parent().trigger("pictureResizer.deleted",[parent]);
                    });
                    console.log({id:self.options.fileId,action:"delete"});
                    $.ajax({
                       url: $("#"+id+"_preview").data("url"),
                       type: 'POST',
                       data:{id:self.options.fileId,action:"delete"},
                       success: function(response) {
                            console.log(response);
                          
                       }
                    });
                }
                else
                {
                    
                }
            });
		},
        updateInfo: function(img,selection) {
            console.log(selection);
            if (!selection.width || !selection.height)
                return;
            var id = $(img).data("id");
            var thumbnail = $("#"+id +"_thumbnail_modal");
            var preview = $("#"+id +"_preview");
            var scaleX =  $('#'+id+"_thumbnail").width()  / selection.width;
            var scaleY =  $('#'+id+"_thumbnail").height()  / selection.height;
            var x1 = Math.round((selection.x1*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width());
            var y1 = Math.round((selection.y1*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height());
            var x2 = Math.round((selection.x2*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width());
            var y2 = Math.round((selection.y2*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height());
            var w = Math.round((selection.width*$("#"+id+"_preview").get(0).naturalWidth)/$("#"+id+"_preview").width());
            var h = Math.round((selection.height*$("#"+id+"_preview").get(0).naturalHeight)/$("#"+id+"_preview").height());
            
            var height = parseInt((     $('#'+id+"_thumbnail").width() * h)/w);

            var oImage = $("#"+id+"_preview");
            $('#'+id+"_thumbnail").height(height);
            $('#'+id+"_thumbnail_modal").height(height);

            var css = {
                width: Math.round(scaleX * oImage.width()),
                height: Math.round(scaleY * oImage.height()),
                marginLeft: -Math.round(scaleX * selection.x1),
                marginTop: -Math.round(scaleY * selection.y1),
                'min-height': $('#'+id+"_thumbnail").height(),
                'min-width':   $('#'+id+"_thumbnail").width()
            };
            var scaleX =  $('#'+id+"_thumbnail_modal").width()  / selection.width;
            var scaleY =  $('#'+id+"_thumbnail_modal").height()  / selection.height;
            $('#'+id+"_thumbnail img").css(css);
            $('#'+id+"_thumbnail_modal img").css({
                width: Math.round(scaleX * oImage.width()),
                height: Math.round(scaleY * oImage.height()),
                marginLeft: -Math.round(scaleX * selection.x1),
                marginTop: -Math.round(scaleY * selection.y1),
                'min-height': $('#'+id+"_thumbnail_modal").height(),
                'min-width':   $('#'+id+"_thumbnail_modal").width()
            });
         
            $('#'+id+'_x1').val(x1);
            $('#'+id+'_y1').val(y1);
            $('#'+id+'_x2').val(x2);
            $('#'+id+'_y2').val(y2);
            $('#'+id+'_w').val($('#'+id+"_thumbnail").width());
            $('#'+id+'_h').val(height ); 
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
                        $("#"+self.options.id+"_logo_modal").attr("src",e.target.result);
                        $("#"+self.options.id+"_logo_modal").fadeIn(1000);
                        $("#"+self.options.id+"_thumbnail_modal img").attr("src",e.target.result);
                    });
                      //RESIZE
                    var tempImg = new Image();
                    tempImg.src = oReader.result;
                    var MAX_WIDTH = self.options.maxWidth;
                    var MAX_HEIGHT = self.options.maxHeight;
                    var tempW = tempImg.width;
                    var tempH = tempImg.height;
                    if (tempW > tempH) {
                        if (tempW > MAX_WIDTH) {
                           tempH *= MAX_WIDTH / tempW;
                           tempW = MAX_WIDTH;
                        }
                    } else {
                        if (tempH > MAX_HEIGHT) {
                           tempW *= MAX_HEIGHT / tempH;
                           tempH = MAX_HEIGHT;
                        }
                    }
             
                    var canvas = document.createElement('canvas');
                    canvas.width = tempW;
                    canvas.height = tempH;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(tempImg, 0, 0, tempW, tempH);
                    var dataURL = oReader.result;
                    oImage.attr("src",canvas.toDataURL("image/jpeg"));
                    self.options.fileFull = e.target.result;
                    self.options.file= canvas.toDataURL("image/jpeg");
                    oImage.load(function(){
                        ctx.clearRect(0, 0,  tempW, tempH);
                        ctx.restore();
                        self.imgAreaSelect = $('#'+self.options.id+'_preview').imgAreaSelect({
                            onSelectChange: self.updateInfo,
                            parent : $("#"+self.options.id+"_imgarea-parent"),
                            instance: true,
                            aspectRatio:   $('#'+id+'_ratio').val()
                            
                        });	
                        self.init(function(){
                                $("#"+self.options.id+"_thumbnail_modal").width(self.options.width);	
                                $("#"+self.options.id+"_thumbnail_modal img").width(self.options.width);
                                
                                var thumbnail = $("#"+self.options.id+"_thumbnail");
                                var preview = $("#"+self.options.id+"_preview");
                                console.log(thumbnail.width() ,oImage.get(0).naturalHeight,oImage.get(0).naturalWidth);
                                var height = parseInt((thumbnail.width() * oImage.get(0).naturalHeight)/oImage.get(0).naturalWidth);
                                
                                $("#"+self.options.id+"_thumbnail").width(self.options.width);	
                                $("#"+self.options.id+"_thumbnail img").width(self.options.width);
                                
                                $("#"+self.options.id+"_thumbnail").height(height);
                                $("#"+self.options.id+"_thumbnail img").height(height);
                                
                                                                
                                $("#"+self.options.id+"_thumbnail_modal").height(height);
                                $("#"+self.options.id+"_thumbnail_modal img").height(height);
                                $('#'+id+'_x1').val(0);
                                $('#'+id+'_y1').val(0);
                                $('#'+id+'_x2').val(oImage.get(0).naturalWidth);
                                $('#'+id+'_y2').val(oImage.get(0).naturalHeight);
                                $('#'+id+'_h').val(height);
                                $('#'+id+'_w').val(thumbnail.width());
                                $('#'+id+'_delete').show();	
                                $(self.el).parent().parent().trigger("pictureResizer.loaded");
                                callback();
                        });	
                    
                    }); 
                    			
            };
             // read selected file as DataURL
            oReader.readAsDataURL(oFile);
        },
        init: function(callback)
        {
            var self = this;
            var oImage = $("#"+this.options.id+"_preview");
            self.imgAreaSelect.setSelection(0, 0, oImage.width(), oImage.height());
            self.imgAreaSelect.setOptions({ show: true });
            self.imgAreaSelect.update();   			            
            callback();
        },
        guid: function()
        {
            var S4 = function() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        },
        css: function(a){
            var sheets = document.styleSheets, o = [];
            a.matches = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            for (var i in sheets) {
                var rules = sheets[i].rules || sheets[i].cssRules;
                for (var r in rules) {
                    if (a.matches(rules[r].selectorText)) {
                        o.push(rules[r].cssText);
                    }
                }
            }
            return o;
        }
	});
});