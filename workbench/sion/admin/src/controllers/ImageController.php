<?php
use Sion\Admin\Models\Image as Image;
class ImageController extends \BaseController {
    /**
     * Instantiate a new AdminController instance.
     */
    public function __construct()
    {

        $this->beforeFilter('auth', array('except' => array('postLogin','getLogin')));
    }
	/**
	 * handle upload , crop and resize of image.
	 *
	 * @return Response
	 */
	public function handleUpload()
	{
		$method = Request::method();
        if (Request::isMethod('post'))
        {
             if( Input::file('file'))
             {
                 $file = Image::find(Input::get("id"));
                 if($file)
                 {
                    
                 }
                 else
                 {
                    $destinationPath = 'uploads';
                    $filename = str_random(12);
                    //$filename = $file->getClientOriginalName();
                    $extension =Input::file('file')->getClientOriginalExtension(); 
                    $upload_success = Input::file('file')->move($destinationPath, $filename.".".$extension);
                     
                    if( $upload_success ) {
                       $file = new Image(Input::all());
                       $file->path = $destinationPath."/".$filename.".".$extension;
                       $file->size = Input::file('file')->getSize();
                       $file->save();
                       return Response::json('success', 200);
                    } else {
                       return Response::json('error', 400);
                    }
                    
                 }
             }
             else
             {
                 $file = Image::find(Input::get("id"));
                 if($file)
                 {
                    
                 }
             }
        }
	}
}
