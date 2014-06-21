<div class="portfolio-item"  @if(Auth::is('admin')) data-id="{{$file->id}}" @endif>
    @if(Auth::is('admin'))
        {{Html::resizer($file,$height,"100%",$ratio)}}
    @else
        <a data-lightbox="gallery" href="{{Croppa::url('/'.$file->path,  $file->width,$file->height,array("trim"=>array($file->x1,$file->y1,$file->x2,$file->y2),"resize"))}}">
            <img class="img-responsive photo" src="{{Croppa::url('/'.$file->path, $width,$image->height,array("trim"=>array($file->x1,$file->y1,$file->x2,$file->y2),"resize"))}}"/>
        </a>
    @endif
    @if(isset($name))
    <h3><a href="{{$link or '#'}}">{{$name}}</a>
    </h3>
    @endif
    @if(isset($description))
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
    @endif
</div>