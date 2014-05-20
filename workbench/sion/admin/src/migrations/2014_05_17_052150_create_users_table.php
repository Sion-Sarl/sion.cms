<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
            //
            Schema::dropIfExists('users');
            Schema::create('users', function($table)
            {
                $table->increments('id');
                $table->dateTime('created_at')->nullable();
                $table->dateTime('updated_at')->nullable();
                $table->string('email')->unique();
                $table->string('password');
                $table->string('remember_token')->nullable();
                $table->string('pseudo')->nullable();
            });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
            DB::table('users')->delete();
		//
	}

}
