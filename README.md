Installation
=====================

    1.composer install 
    2.change the database setting in app/config/database
    4.make php artisan migrate
    3.seed the application with AdminSeeder

Set up
=====================

For the admin module add 'Sion\Admin\AdminServiceProvider' in your config/app.php.
If you want to have the example 'add Sion\Admin\ExampleAdminServiceProvider.'