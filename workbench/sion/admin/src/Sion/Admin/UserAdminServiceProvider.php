<?php namespace Sion\Admin;

use Illuminate\Support\ServiceProvider;

class UserAdminServiceProvider extends ServiceProvider {

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
                $uri = \Config::get("admin::admin.uri");
                \Route::group(array("prefix"=>$uri),function(){
                    \Route::resource(\Config::get("admin::user.uri"), 'UserController');
                    $menu = array_merge_recursive(\Config::get("admin::navbar.menu"),\Config::get("admin::user.menu"));
                    \Config::set("admin::navbar.menu",$menu);
                });
                
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
