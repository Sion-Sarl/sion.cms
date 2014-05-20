<?php

class AdminController extends \BaseController {
    /**
     * Instantiate a new AdminController instance.
     */
        public function __construct()
        {

            $this->beforeFilter('auth', array('except' => array('postLogin','getLogin')));
        }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		//
           return View::make("admin::index");
	}
        public function getLogin()
        {
            return View::make("admin::login");
        }
        public function postLogin()
        {
            if (!Auth::attempt(array('pseudo' => Input::get('pseudo'), 'password' =>  Input::get('password')),Input::get('remember')))
            {
               return Redirect::action('AdminController@getLogin')->with("erreur","Mot de passe ou pseudo incorrect");
            }
            else {
               return Redirect::action('AdminController@getIndex');
            }
        }
        public function logOut()
        {
            Auth::logout();
            return Redirect::to(\Config::get("admin::admin.back_to_site_path"));
        }
}
