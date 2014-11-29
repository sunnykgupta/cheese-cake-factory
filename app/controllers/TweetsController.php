<?php

class TweetsController extends BaseController{

    public function index(){
      $tweets = Tweet::all();
      $retObj = new stdClass();
      foreach($tweets as $tweet){
        $tweet->author;
      }
      $retObj->tweets = $tweets->reverse();
      return json_encode($retObj);
    }
  
	public function store(){

		if(Auth::check()){
            $tweet = new Tweet;
            $tweet->user_id = Auth::user()->id;
            $tweet->content = Input::get('content');
            $tweet->save();
		}
		else{
          return View::make('login',['response'=>'Please verify username and password']);
		}
    }

    function getTweetsByUsername($username) {
      if (Auth::check()) {
        if ($username == 'me') {
          $username = Auth::user()->username;
        }
        if (count(User::where('username','=',$username)->get()->first()) == 0) {
          return array();
        } else {
          return User::where('username','=',$username)->get()->first()->tweets;
        }
      }
      else {
        return array();
      }
    }
}