<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of GalleryController
 *
 * @author sion
 */
use Sion\Admin\Models\Gallery as Gallery;
class GalleryController  extends \BaseController {
    //put your code here
    /**
    * Display a listing of the resource.
    *
    * @return Response
    */
    public function index()
    {
        return View::make("admin::gallery.manager",array("galleries"=>Gallery::all()));
    }
}
