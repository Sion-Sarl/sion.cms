<?php
 
namespace Sion\Admin;

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
    public function boot() {
        $this->package('sion/admin');
        include __DIR__ . "/../../routes.php";
        
        //MACRO
        \HTML::macro('resizer', function($file,$height="200",$width="200",$ratio="")
        {
            echo \View::make("admin::macro.resizer",array("file"=>$file,"height"=>$height,"width"=>$width,"ratio"=>$ratio))->render();
        });
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register() {
        //
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides() {
        return array();
    }

}