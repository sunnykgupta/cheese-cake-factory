@extends('layout')

@section('body')
<div class="container">
    <div class="row">
      <div class="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 well login-well">
        <form role="form" action="/forgot-password" method="POST">

          <legend>Forgot Password</legend>

          <!-- Email -->
          <div class="form-group">
            <label class="control-label" for="txtUsername">Email</label>
            <input type="email" class="form-control" name="username" maxlength="30" placeholder="Enter your email address" id="txtUsername">
            <p class="help-block">Enter your email address that you used to sign up to The Cheesecake Factory. We will send you an email with further instructions on how to reset your password.</p>
          </div>

          <input type="submit" class="btn btn-primary pull-left" value="Login">
          <a href="/login.html" class="btn btn-link pull-right">Log In</a>

        </form>
      </div>
    </div>
  </div>
@stop