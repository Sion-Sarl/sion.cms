@extends("casual.layouts.master")

@section("css")
    @parent
    @include("portfolio.partials.css")
@overwrite

@section("content")
    <div class="container">
        <div class="row">
            <div class="box">
                <div class="col-lg-12">
                        {{Html::threeColGallery(1,320,220,'320/260')}}
                </div>
            </div>
        </div>
    </div>
@overwrite