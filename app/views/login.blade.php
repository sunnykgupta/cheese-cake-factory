@extends('layout')

@section('body')
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 well login-well">
        <form role="form" action="/login" method="POST">

          <!-- Username -->
          <div class="form-group">
            <label class="control-label" for="txtUsername">Username</label>
            <input type="text" class="form-control" name="username" maxlength="30" placeholder="Enter your email/username" id="txtUsername">
          </div>

          <!-- Password -->
          <div class="form-group">
            <label class="control-label" for="txtPassword">Password</label>
            <input type="password" class="form-control" name="password" maxlength="30" placeholder="Enter your password" id="txtPassword">
          </div>

          <input type="submit" class="btn btn-primary pull-left" value="Login">
          <a href="/signup" class="btn btn-link pull-right">Sign Up</a>

        </form>
      </div>
    </div>
  </div>
@stop