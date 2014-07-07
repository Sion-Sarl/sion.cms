SION CMS
=====================

Very basic CMS for laravel

Installation
=====================
Clone this repository.Then install dependency with composer

    composer install
    
Change the database setting in the app/config/database.php:

```php
'connections' => array(

		'sqlite' => array(
			'driver'   => 'sqlite',
			'database' => __DIR__.'/../database/production.sqlite',
			'prefix'   => '',
		),

		'mysql' => array(
			'driver'    => 'mysql',
			'host'      => 'localhost',
			'database'  => 'your database name',
			'username'  => '',
			'password'  => '',
			'charset'   => 'utf8',
			'collation' => 'utf8_unicode_ci',
			'prefix'    => '',
		),

		'pgsql' => array(
			'driver'   => 'pgsql',
			'host'     => 'localhost',
			'database' => 'database',
			'username' => 'root',
			'password' => '',
			'charset'  => 'utf8',
			'prefix'   => '',
			'schema'   => 'public',
		),

		'sqlsrv' => array(
			'driver'   => 'sqlsrv',
			'host'     => 'localhost',
			'database' => 'database',
			'username' => 'root',
			'password' => '',
			'prefix'   => '',
		),

	),
```
Migrate the database:
```php
    php artisan migrate --package='sion/taxonomy'
    php artisan migrate --package='sion/admin'
    php artisan migrate
```  
Seed the database:
```php
    php artisan db:seed class='AdminSeeder'
``` 

Set up
=====================

For the admin module add 'Sion\Admin\AdminServiceProvider' in your config/app.php.
If you want to have the example 'add Sion\Admin\ExampleAdminServiceProvider.'

For more detail on the AdminServiceProvider [click here](https://github.com/UlrickAsura/sion.admin)
