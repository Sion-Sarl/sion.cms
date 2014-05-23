<?php
namespace Sion\Admin\Models;

class Image extends \Eloquent {
    protected $table = 'images';
    protected $fillable = array('path', 'imageable_id', 'imageable_type','x1','x2','y1','y2',"width","height","order");
}