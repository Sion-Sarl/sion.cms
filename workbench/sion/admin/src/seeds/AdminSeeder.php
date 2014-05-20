<?php

class AdminSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('UserTableSeeder');
	}

}
class UserTableSeeder extends Seeder {

    public function run()
    {
        User::create(array('pseudo'=>'dartuchiwa','email' => 'dartuchiwa@gmail.com',"password"=>Hash::make('Ulrick01')));
    }

}