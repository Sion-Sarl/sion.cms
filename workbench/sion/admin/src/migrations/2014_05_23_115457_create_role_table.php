<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoleTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
            Schema::dropIfExists("roles");
            Schema::dropIfExists("roles_users");
            Schema::dropIfExists("rights");
            Schema::dropIfExists("rights_roles");
            Schema::create("roles",function($table){
               $table->increments("id");
               $table->string("name");
               $table->datetime("created_at")->nullable();
               $table->datetime("updated_at")->nullable();
               $table->datetime("deleted_at")->nullable();
            });
            Schema::create("roles_users",function($table){
                $table->increments("id");
                $table->integer("user_id")->references("id")->on("users");
                $table->integer("role_id")->references("id")->on("roles");
            });
            Schema::create("rights",function($table){
                $table->increments("id");
                $table->string("name");
                $table->softDeletes();
                $table->timestamps();
            });
            Schema::create("rights_roles",function($table){
                $table->increments("id");
                $table->string("right_id")->references("id")->on("rights");
                $table->string("role_id")->references("id")->on("roles");
            });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
            Schema::dropIfExists("roles");
            Schema::dropIfExists("roles_users");
            Schema::dropIfExists("rights");
            Schema::dropIfExists("rights_roles");
	}

}
