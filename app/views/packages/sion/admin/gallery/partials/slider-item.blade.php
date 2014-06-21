<div class="item @if($index == 0) active @endif"  @if(Auth::is('admin')) data-id="{{$file->id}}" @endif >
    @if(Auth::is('admin'))
        {{Html::resizer($file,$height,$width,$ratio)}}
    @else
         <img id class="img-responsive img-full"  data-width={{$width}} src="{{Croppa::url('/'.$file->path, $width, $width,array("trim"=>array($file->x1,$file->y1,$file->x2,$file->y2),"resize"))}}"/>
    @endif
</div>