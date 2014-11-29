<?php

class TweetsController extends BaseController{

    public function index(){
      return Auth::user()->tweets;
    }
  
	public function store(){

		if(Auth::check()){
            $tweet = new Tweet;
            $tweet->user_id = Auth::user()->id;
            $tweet->text = Input::get('content');
            $tweet->save();
		}
		else{
          return View::make('login',['response'=>'Please verify username and password']);
		}
    }
}