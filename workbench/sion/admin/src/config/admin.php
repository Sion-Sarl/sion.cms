<?php

return array(

	/**
	 * Package URI
	 *
	 * @type string
	 */
	'uri' => 'admin',

	/**
	 * Page title
	 *
	 * @type string
	 */
	'title' => 'Administration',
	/**
	 * The menu structure of the site.
	 * @type array
	 *
	 * 	array(
	 *		'E-Commerce' => array('collections', 'products', 'product_images', 'orders'),
	 *		'homepage_sliders',
	 *		'users',
	 *		'roles',
	 *		'colors',
	 *		'Settings' => array('settings.site', 'settings.ecommerce', 'settings.social'),
	 * 		'Analytics' => array('E-Commerce' => 'page.ecommerce.analytics'),
	 *	)
	 */
	'menu' => array(
       'Images accueil' => "accueil_images",
	   'Configurations' => array("Configuration site"=>'settings.site')
    ),

	/**
	 * The permission option is the highest-level authentication check that lets you define a closure that should return true if the current user
	 * is allowed to view the admin section. Any "falsey" response will send the user back to the 'login_path' defined below.
	 *
	 * @type closure
	 */
	'permission'=> function()
	{
		return Auth::check();
	},

	/**
	 * This determines if you will have a dashboard (whose view you provide in the dashboard_view option) or a non-dashboard home
	 * page (whose menu item you provide in the home_page option)
	 *
	 * @type bool
	 */
	'use_dashboard' => false,

	/**
	 * If you want to create a dashboard view, provide the view string here.
	 *
	 * @type string
	 */
	'dashboard_view' => '',

	/**
	 * The menu item that should be used as the default landing page of the administrative section
	 *
	 * @type string
	 */
	'home_page' => 'settings.site',

	/**
	 * The route to which the user will be taken when they click the "back to site" button
	 *
	 * @type string
	 */
	'back_to_site_path' => '/',

	/**
	 * The login path is the path where Administrator will send the user if they fail a permission check
	 *
	 * @type string
	 */
	'login_path' => 'connexion',

	/**
	 * The logout path is the path where Administrator will send the user when they click the logout link
	 *
	 * @type string
	 */
	'logout_path' => false,

	/**
	 * This is the key of the return path that is sent with the redirection to your login_action. Session::get('redirect') will hold the return URL.
	 *
	 * @type string
	 */
	'login_redirect_key' => 'redirect',

	/**
	 * Global default rows per page
	 *
	 * @type NULL|int
	 */
	'global_rows_per_page' => 20,

	/**
	 * An array of available locale strings. This determines which locales are available in the languages menu at the top right of the Administrator
	 * interface.
	 *
	 * @type array
	 */
	'locales' => array(),

);
