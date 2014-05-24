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
                        {{Html::threeColGallery(1,300,300,'1:1')}}
                </div>
            </div>
        </div>
    </div>
@overwrite
@section("js")
    @if(Auth::is("admin"))
        <script src="{{asset('packages/sion/admin/components/require.js')}}"></script>
        <script>
            requirejs({
                baseUrl:'packages/sion/admin/components'
            })
            require(["admin-js"],function(Admin){
                new  Admin();
            });
        </script>
    @endif
@overwrite