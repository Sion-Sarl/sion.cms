<?php
namespace Sion\Admin\Models;

class Role extends \Eloquent {
    protected $table = 'roles';
    protected $fillable = array("name");
}