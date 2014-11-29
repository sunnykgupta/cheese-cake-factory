<?php

class UsersController extends BaseController{
	function store(){
		if ($this->validateUsername(Input :: get ('username'))) {
			$user = new User;
			$user->username = Input :: get ('username');
			$user->password = Hash::make(Input :: get ('password'));
			$user->email = Input :: get ('email');
			$user->save();
		} else {
			return View::make('signup',['username_error'=>'The username is already taken!']);
		}
		
		return Redirect::to('/');
	}

	function getByUsername($username) {
		if ($username == "me") return Auth::user();
		return User::where('username', '=', $username)->get()->first();
	}

	function validateUsername($username) {
		return User::isValidUsername($username);
	}
}