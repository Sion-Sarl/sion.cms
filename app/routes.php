<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('index');
});
Route::get('service', function()
{
	return View::make('about');
});
Route::get('blog', function()
{
	return View::make('blog');
});
Route::get('contact', function()
{
	return View::make('contact');
});
Route::post('contact',function(){
    $rules = \Config::get("contact.rule");
    $validator = Validator::make(Input::all(), $rules);
    if ($validator->fails())
    {
        return Redirect::to('contact')->withInput(Input::all())->withErrors($validator)->with('error',"Votre message n'a pas été envoyée");
    } 
    else {
        Mail::send('emails.contact',Input::all(), function($message)
        {
            $name = Input::get("name");
            $message->to( \Config::get("contact.to"), 'Contact')->replyTo(Input::get("email"),$name)->subject('Contact via le site!');
        });
        return Redirect::to('contact')->with('success',"Votre message a bien été envoyée");
    }
});
Route::get('portfolio',function(){
    return View::make('portfolio');
});