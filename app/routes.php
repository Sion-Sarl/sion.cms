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
Route::get('about', function()
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
Route::get('contact', function()
{
	return View::make('contact');
});
Route::get('portfolio',function(){
    return View::make('portfolio');
});
Route::post('contact',function(){
    $rules = \Config::get("contact.rule");
    $validator = Validator::make(Input::all(), $rules);
    if ($validator->fails())
    {
        return Redirect::to('contact')->withInput(Input::all())->withErrors($validator)->with('error',"Votre message n'a pas ete envoyee");
    } 
    else {
        Mail::send('emails.welcome',Input::all(), function($message)
        {
            $message->to('foo@example.com', 'John Smith')->subject('Contact via le site!');
        });
    }
});