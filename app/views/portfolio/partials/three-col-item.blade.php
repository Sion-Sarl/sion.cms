<div class="col-md-4 portfolio-item">
    <a href="{{$link or '#'}}">
        <img class="img-responsive" src="{{$image}}"/>
    </a>
    @if($name)
    <h3><a href="{{$link or '#'}}">{{$name}}</a>
    </h3>
    @endif
    @if($description)
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
    @endif
</div>