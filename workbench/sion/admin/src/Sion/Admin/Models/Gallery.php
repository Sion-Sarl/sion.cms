<?php
namespace Sion\Admin\Models;

class Gallery extends \Eloquent {
    protected $table = 'galleries';
    protected $fillable = array('name');
}