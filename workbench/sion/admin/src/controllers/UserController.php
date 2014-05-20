<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of UserController
 *
 * @author sion
 */
class UserController extends \BaseController {

    //put your code here
    public function __construct() {

        $this->beforeFilter('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index() {
        //
        $users = User::all();
        return View::make("admin::user.manager", array("users" => $users));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create() {

        $user = new User;
        return View::make("admin::user.create", array("model" => $user,"action"=>array("action"=>"UserController@store")));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store() {
        //
        $validator = Validator::make(
            Input::All(),
            array(
                'email' => 'required|unique:users',
                'password'=>'required'
            )
        );
        if ($validator->fails())
        {
            return Redirect::action("UserController@create")->withErrors($validator)->withInput(Input::All());
        }
        else
        {
            $user = new User(Input::All());
            $user->password = Hash::make(Input::get('password'));
            $user->save();
            return Redirect::action("UserController@index");
        }
        
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        //
        $user = User::find($id);
        return View::make("admin::user.manager", array("user" => $user));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id) {
        //
    }

}
