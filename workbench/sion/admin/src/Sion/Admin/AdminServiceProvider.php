<?php namespace Sion\Admin;

use Illuminate\Support\ServiceProvider;

class AdminServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	/**
	 * Bootstrap the application events.
	 *
	 * @return void
	 */
	public function boot()
	{
		$this->package('sion/admin');
        \Route::filter('auth', function(){
             $auth = \Config::get("admin::admin.permission");
             if (!$auth())
              {
              // Notice that im using Redirect::guest instead of Redirect::to, 
              // this is to make the Redirect::intendeed work later on.
                return \Redirect::guest(\Config::get("admin::admin.login_path"));
              }
        });
        \Route::group(array('prefix' => \Config::get("admin::admin.uri")),function(){
            \Route::get("/","AdminController@getIndex");
            \Route::get("do-login","AdminController@postLogin");
        });
        \Route::get(\Config::get("admin::admin.login_path"),"AdminController@getLogin");
	}

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		//
	}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array();
	}

}
