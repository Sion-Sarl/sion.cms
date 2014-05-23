<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('images');
                Schema::create('images', function($table)
                {
                    $table->increments('id');
                    $table->string("path");
                    $table->dateTime('created_at')->nullable();
                    $table->dateTime('updated_at')->nullable();
                    $table->integer('imageable_id')->default(0);
                    $table->string('imageable_type')->default("");
                    $table->integer('x1');
                    $table->integer('x2');
                    $table->integer('y1');
                    $table->integer('y2');
                    $table->integer('width');
                    $table->integer('height');
                    $table->integer('size');
                });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
	   Schema::dropIfExists('images');
	}

}
