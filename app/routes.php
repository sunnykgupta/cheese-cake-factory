<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

/*Route to install 
//Whenever you do not have  
admin credentials present in the Users table 
ie Username:admin and Password:password it will create 
*/
Route::get('/install',function(){

	if(count(User::where('username','=','admin')->get()))
		return "Already Installed.";

	$user = new User;
	$user->username = "admin";
	$user->password = Hash::make('password');
	$user->save();

	return "Admin created with standard username and password.";
});

Route::Resource('sessions', 'SessionsController');