@extends("casual.layouts.master")

@section("css")
    @parent
    <link rel="stylesheet" href="{{asset('packages/sion/admin/css/gallery.css')}}" />
@overwrite

@section("content")
    <div class="container">
        <div class="row">
            <div class="box">
                  {{Html::threeColGallery(1)}}
            </div>
        </div>
    </div>
@overwrite