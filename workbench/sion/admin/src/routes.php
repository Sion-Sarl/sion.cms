<?php
\Route::filter('auth', function(){
     $auth = \Config::get("admin::admin.permission");
     if (!$auth())
      {
      // Notice that im using Redirect::guest instead of Redirect::to, 
      // this is to make the Redirect::intendeed work later on.
        return \Redirect::guest(\Config::get("admin::admin.login_path"));
      }
});
\Route::group(array('prefix' => \Config::get("admin::admin.uri"),'before' => 'auth'),function(){
    \Route::get("/","AdminController@getIndex");
    \Route::group(array('prefix' => "example"),function(){
       \Route::get("{folder}/{page}",function($folder="",$page){
            try{
               return View::make("admin::examples.".$folder.".".$page);  
            }
            catch(InvalidArgumentException $e)
            {
                App::abort(404);
            }
        }); 
        \Route::get("{page}",function($page){
            try{
               return View::make("admin::examples.".$page); 
            }
            catch(InvalidArgumentException $e)
            {
                App::abort(404);
            }
        }); 
    });
});
\Route::get(\Config::get("admin::admin.login_path"),"AdminController@getLogin");
\Route::post(\Config::get("admin::admin.login_path"),"AdminController@postLogin");