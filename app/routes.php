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
    if(Auth::check())
        return View::make('index');
	return View::make('login');
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

Route::get('/create', 'PostsController@create');
Route::get('/login', 'SessionsController@create');
Route::get('/logout', 'SessionsController@destroy');
Route::get('/view/{postid}', 'PostsController@show');

Route::get('/signup',function(){
    if(Auth::check())
        return "Already logged in.";
    return View::make('signup');
});

Route::post('/signup','UsersController@store');
Route::post('/login', 'SessionsController@store');
Route::get('/api/me', 'SessionsController@index');

Route::Resource('sessions', 'SessionsController');
Route::Resource('tweets', 'TweetsController');
Route::Resource('comments', 'CommentsController');