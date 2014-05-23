<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGalleriesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
            Schema::dropIfExists('galleries');
            Schema::create("galleries",function($table){
                $table->increments("id");
                $table->datetime("created_at")->nullable();
                $table->datetime("updated_at")->nullable();
                $table->datetime("deleted_at")->nullable();
                $table->string("name");
            });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
            DB::table("galleries")->drop();
	}

}
