<div class="masonry gallery" data-masonry-options='{"itemSelector": "div.portfolio-item-3" }' @if(Auth::is('admin')) data-width='100%' data-additional='{"imageable_id":{{{$gallery->id}}},"imageable_type":"Sion\\Admin\\Models\\Gallery"}' data-add='true' data-upload='{{action("ImageController@handleUpload")}}' data-type='photo-gallery' data-container='div.portfolio-item-3' data-itemselector='img.photo' @endif>
            @foreach($gallery->images()->orderBy('order')->get() as $index=>$image)
                <div class="portfolio-item-3">
                    @if(Auth::is('admin'))
                         <img class="photo img-responsive" data-name='{{isset($image) ? basename($image->path) : ""}}' data-filefull='{{asset($image->path)}}' src='{{isset($image)?Croppa::url(@"/".$image->path, $image->width, $image->height,array("trim"=>array($image->x1,$image->y1,$image->x2,$image->y2),"resize")) : ""}}' data-size='{{{$image->size}}}' data-x1="{{{$image->x1}}}" data-x2="{{{$image->x2}}}" data-y1="{{{$image->y1}}}" data-y2="{{{$image->y2}}}"   data-id='{{{$image->id}}}' />
                    @else
                        <a data-lightbox="gallery" href="{{$image->path}}">
                            <img class="img-responsive photo" src="{{Croppa::url('/'.$image->path, $image->width,$image->height,array("trim"=>array($image->x1,$image->y1,$image->x2,$image->y2),"resize"))}}"/>
                        </a>
                    @endif
                    <div class="overlay @if($index != 3) active @endif"></div>
                    @if($index == 3)
                        <div class="portfolio-item-desc">Peintures chromées sur véhicule</div>
                    @endif
                </div>
            @endforeach
</div>