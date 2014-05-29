<div id="carousel-generic" class="carousel slide">
                        <!-- Indicators -->
                        <ol class="carousel-indicators hidden-xs">
                            @foreach($gallery->images as $index=>$image)
                                <li data-target="#carousel-generic" data-slide-to="{{$index}}" @if($index == 0)class="active" @endif ></li>
                            @endforeach
                        </ol>

                        <!-- Wrapper for slides -->
                       <div class="carousel-inner" @if(Auth::is('admin')) data-width="{{$width}}" data-additional='{"imageable_id":{{{$gallery->id}}},"imageable_type":"Sion\\Admin\\Models\\Gallery"}' data-add='true' data-upload='{{action("ImageController@handleUpload")}}' data-type='photo-gallery' data-container='div.item' data-itemselector='img' @endif>
                                    @foreach($gallery->images as $index=>$image)
                                        <div class="item @if($index == 0) active @endif" >
                                            @if(Auth::is('admin'))
                                                   <img style="height: 692px;" id class="img-responsive img-full"  data-name='{{isset($image) ? basename($image->path) : ""}}' data-filefull='{{isset($image)?asset($image->path) : ""}}' src='{{isset($image)?Croppa::url(@"/".$image->path, 1110, 740,array("trim"=>array($image->x1,$image->y1,$image->x2,$image->y2),"resize")) : ""}}' data-size='{{{$image->size}}}' data-x1="{{{$image->x1}}}" data-x2="{{{$image->x2}}}" data-y1="{{{$image->y1}}}" data-y2="{{{$image->y2}}}"   data-id='{{{$image->id}}}' />
                                            @else
                                                 <img id class="img-responsive img-full" src="{{Croppa::url('/'.$image->path, $width, $width,array("trim"=>array($image->x1,$image->y1,$image->x2,$image->y2),"resize"))}}"/>
                                            @endif
                                        </div>
                                    @endforeach
                       </div>

                        <!-- Controls -->
                        <a class="left carousel-control" href="#carousel-generic" data-slide="prev">
                            <span class="icon-prev"></span>
                        </a>
                        <a class="right carousel-control" href="#carousel-generic" data-slide="next">
                            <span class="icon-next"></span>
                        </a>
</div>