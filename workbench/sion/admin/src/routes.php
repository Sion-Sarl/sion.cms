<?php

\Route::filter('auth', function() {
    $auth = \Config::get("admin::admin.permission");
    if (!$auth()) {
        // Notice that im using Redirect::guest instead of Redirect::to, 
        // this is to make the Redirect::intendeed work later on.
        return \Redirect::guest(\Config::get("admin::admin.login_path"));
    }
});
Route::when(\Config::get("admin::admin.uri").'/*', 'auth');
\Route::group(array('prefix' => \Config::get("admin::admin.uri")), function() {
    \Route::get("/", "AdminController@getIndex");
    \Route::post("image/upload", "ImageController@handleUpload");
});
\Route::get(\Config::get("admin::admin.login_path"), "AdminController@getLogin");
\Route::post(\Config::get("admin::admin.login_path"), "AdminController@postLogin");
\Route::get("logout", "AdminController@logOut");
Event::fire('admin.routes');
