@extends("casual.layouts.master")
@section("content")
    <div class="container">

        <div class="row">
            <div class="box">
                <div class="col-lg-12 text-center">
                    {{HTML::slider(1)}}
                    <h2>
                        <small>Welcome to</small>
                    </h2>
                    <h1 id="index-title" {{HTML::editable()}} >
                        {{HTML::withTag('index-title',Faker::loremWord())}}
                    </h1>
                    <hr class="tagline-divider">
                    <h2>
                        <small>By <strong>Start Bootstrap</strong></small>
                    </h2>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="box">
                <div class="col-lg-12">
                    <hr>
                    <h2 class="intro-text text-center">{{Faker::loremWord()}}
                    </h2>
                    <hr>
                    {{HTML::imageWithTag("index-image",250,150,array("class"=>"img-responsive img-border img-left"))}}
                    <hr class="visible-xs">
                    <p id="index-paragraphe-one" {{HTML::editable()}} >{{HTML::withTag('index-paragraphe-one',Faker::loremParagraph(2))}}</p>
                    <p id="index-paragraphe-three" {{HTML::editable()}} >{{HTML::withTag('index-paragraphe-three',Faker::loremParagraph(2))}}</p>
                    <p id="index-paragraphe-two" {{HTML::editable()}}>{{HTML::withTag('index-paragraphe-two',Faker::loremParagraph(3))}}</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="box">
                <div class="col-lg-12">
                    <hr>
                    <h2 class="intro-text text-center">Beautiful boxes <strong>to showcase your content</strong>
                    </h2>
                    <hr>
                    <p>Use as many boxes as you like, and put anything you want in them! They are great for just about anything, the sky's the limit!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
            </div>
        </div>

    </div>
    <!-- /.container -->

@overwrite