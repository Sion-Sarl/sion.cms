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
        if (Request::isMethod('post'))
        {
             if( Input::file('file'))
             {
                 $file = Image::find(Input::get("id"));
                 //UPLOAD THE FILE
                 $destinationPath = 'uploads';
                 $filename = str_random(12);
                 //$filename = $file->getClientOriginalName();
                 $extension =Input::file('file')->getClientOriginalExtension(); 
                 $upload_success = Input::file('file')->move($destinationPath, $filename.".".$extension);
                 
                 if($file)
                 {
                    $old_path = $file->path;
                    $file->fill(Input::all());
                    $file->path = $destinationPath."/".$filename.".".$extension;
                    $file->size = Input::file('file')->getSize();
                    $file->save();
                    Croppa::delete(public_path()."/".$old_path);
                 }
                 else
                 {
                     
                    if( $upload_success ) {
                       $file = new Image(Input::all());
                       $file->path = $destinationPath."/".$filename.".".$extension;
                       $file->size = Input::file('file')->getSize();
                       $file->save();
                       return Response::json(array('id'=>$file->id), 200);
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
                    $path = public_path()."/uploads/".basename(Croppa::url("/".$file->path, $file->width, $file->height, array("trim"=>array($file->x1,$file->y1,$file->x2,$file->y2),'resize')));
                    File::delete($path); 
                    $file->fill(Input::all());
                    $file->save();
                 }
             }
        }
	}
}
