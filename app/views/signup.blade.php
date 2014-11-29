@extends('layout')

@section('body')
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 well login-well">
        <form role="form" action="/signup" method="POST">

          <!-- Username -->
          @if($username_error)
          <div class="form-group has-error">
          @else
          <div class="form-group">
          @endif
            <label class="control-label" for="txtUsername">Username</label>
            <input type="text" class="form-control" name="username" maxlength="30" placeholder="Enter your email/username" id="txtUsername">
            <span class="text-danger">{{$username_error}}</span>
          </div>
            
          <!-- Email -->
          <div class="form-group">
            <label class="control-label" for="txtUsername">Email</label>
            <input type="email" class="form-control" name="email" maxlength="60" placeholder="Enter your email/username" id="txtEmail">
          </div>

          <!-- Password -->
          <div class="form-group">
            <label class="control-label" for="txtPassword">Password</label>
            <input type="password" class="form-control" name="password" maxlength="30" placeholder="Enter your password" id="txtPassword">
          </div>

          <input type="submit" class="btn btn-primary pull-left" value="Signup">

        </form>
      </div>
    </div>
  </div>
@stop