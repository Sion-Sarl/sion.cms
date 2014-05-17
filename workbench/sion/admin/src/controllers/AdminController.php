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
        if (!Auth::attempt(array('email' => Input::get('email'), 'password' =>  Input::get('password'))))
        {
            return Redirect::intended('AdminController@getLogin')->withInput()->with("erreur","Mot de passe ou pseudo incorrect");
        }
    }
}
