@extends("simple-sidebar.layouts.master")
@section("content")
    <div class="container page">
        @include("partials.error")
        @include("partials.success")
        <div class="row">
            <div class="col-lg-12 box">
                    <h2 class="intro-text text-center">Nous contacter
                    </h2>
                    <p>This contact form is just the form elements, it is not a working form. You will have to make the form work by yourself, or take it out if you can't figure out how to make it work.</p>
                    <form role="form" action="{{url("contact")}}" method="POST"> 
                            <div class="form-group col-lg-4">
                                <label>Nom</label>
                                <input type="text" name="name" class="form-control" value="{{Input::old('name')}}"> {{{$errors->first("name")}}}
                            </div>
                            <div class="form-group col-lg-4">
                                <label>E-mail</label>
                                <input value="{{Input::old('email')}}" type="email" name="email" class="form-control"> {{{$errors->first("email")}}}
                            </div>
                            <div class="form-group col-lg-4">
                                <label>Téléphone</label>
                                <input  value="{{Input::old('phone')}}" type="tel" name="phone" class="form-control">
                            </div>
                            <div class="clearfix"></div>
                            <div class="form-group col-lg-12">
                                <label>Message</label>
                                <textarea  class="form-control" name="message" rows="6">{{ Input::old('message') }}</textarea> {{{$errors->first("message")}}}
                            </div>
                            <div class="form-group col-lg-12">
                                <input type="hidden" name="save" value="contact">
                                <button type="submit" class="btn btn-default">Submit</button>
                            </div>
                    </form>
          </div>
        </div>
    </div>
@overwrite