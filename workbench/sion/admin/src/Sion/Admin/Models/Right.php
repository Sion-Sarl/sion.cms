<?php
namespace Sion\Admin\Models;

class Right extends \Eloquent {
    protected $table = 'rights';
    protected $fillable = array("name");
}