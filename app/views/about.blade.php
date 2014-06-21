@extends("simple-sidebar.layouts.master")

@section("content")
    <div class="container page">

        <div class="row">
            <div class="box">
                <div class="col-lg-12">
                    <h2 id="service.title" class="intro-text text-center" {{HTML::editable()}} >{{HTML::withTag('service.title',Faker::loremWord())}} </h2>
                    <hr />
                </div>
                <div class="col-md-6">
                    {{HTML::imageWithTag("service.image",500,256,array("class"=>"img-responsive img-border img-left"))}}
                </div>
                <div class="col-md-6" id="service.text" {{HTML::editable()}} >
                    {{HTML::withTag('service.text',Faker::loremParagraph(20))}}
                </div>
                <div class="clearfix"></div>
            </div>
        </div>

    </div>
@overwrite