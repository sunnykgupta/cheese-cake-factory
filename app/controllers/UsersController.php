<?php

class UsersController extends BaseController{
 function store(){
        $user = new User;
        $user->username = Input :: get ('username');
        $user->password = Hash::make(Input :: get ('password'));
        $user->email = Input :: get ('email');
        $user->save();
   
    return Redirect::to('/');
    }
}