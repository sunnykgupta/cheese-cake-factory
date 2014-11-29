@extends('layout')

@section('body')
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">The Cheesecake Factory</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">About</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Biswarup
            <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <script type="text/x-template" id="tmplSidebarUser">
    <img src="{{gravatar}}">
    <div>Name: {{name}}</div>
    <div>Handle: {{handle}}</div>
    <div>Tweets: {{tweets}}</div>
    <div>Followers: {{followers}}</div>
    <div>Following: {{following}}</div>
  </script>

  <script type="text/x-template" id="tmplTweetSummary">
    <div class="tweet-summary">
      <div style="height: 100%; width: 48px; float: left;">
        <a href="{{author.profileURL}}">
          <img src="{{author.gravatar}}" alt="{{author.name}}" width="48" height="48">
        </a>
      </div>
      <div style="width: calc(100% - 60px); margin-left: 56px;">
        <div class="tweet-top-line">
          <span class="media-heading">{{author.name}}</span>
          <a class="author-handle text-muted" href="#/{{author.handle}}">@{{author.handle}}</a>
          <small class="text-muted time-ago">{{moment(timestamp).fromNow()}}</small>
        </div>
        <div class="tweet-content">
          <p>{{content}}</p>
        </div>
        <div class="tweet-footer clearfix">
          <div class="tweet-stats"><i class="fa fa-reply"></i> {{numReplies}}</div>
          <div class="tweet-stats"><i class="fa fa-retweet"></i> {{numRetweets}}</div>
          <div class="tweet-stats"><i class="fa fa-star"></i> {{numFavorites}}</div>
        </div>
      </div>
    </div>
  </script>

  <script type="text/x-template" id="tmplCreateTweet">
    <div class="tweet-summary create-tweet clearfix">
      <form action="/new-tweet" method="POST">
        <img class="gravatar" src="{{gravatar}}" alt="{{name}}" width="48" height="48">
        <input type="text" class="form-control" name="tweet" maxlength="140" placeholder="What's happening?" id="txtCreateTweet">
        <input type="submit" class="btn btn-primary btn-create-tweet" value="Tweet!">
      </form>
    </div>
  </script>

  <script type="text/x-template" id="tmplHomepage">
    <div class="row">
      <div class="col-xs-3 well well-sm" id="divSidebar" data-has-boxy>
        
      </div>
      <div class="col-xs-9" id="divMainContent" data-has-boxy>
        
      </div>
    </div>
  </script>





  <div class="container" id="container">
    
  </div>

  <!-- Application Javascripts -->
  <script type="text/javascript" src="/javascripts/app/models/User.js"></script>
  <script type="text/javascript" src="/javascripts/app/models/Tweet.js"></script>
  <script type="text/javascript" src="/javascripts/app/models/Timeline.js"></script>
  <script type="text/javascript" src="/javascripts/app/models/TweetCollection.js"></script>
  <script type="text/javascript" src="/javascripts/app/services/User.js"></script>
  <script type="text/javascript" src="/javascripts/app/services/Timeline.js"></script>
  <script type="text/javascript" src="/javascripts/app/views/BaseView.js"></script>
  <script type="text/javascript" src="/javascripts/app/views/CurrentUserSidebar.js"></script>
  <script type="text/javascript" src="/javascripts/app/views/CreateTweetView.js"></script>
  <script type="text/javascript" src="/javascripts/app/views/TweetSummaryView.js"></script>
  <script type="text/javascript" src="/javascripts/app/views/TimelineView.js"></script>
  <script type="text/javascript" src="/javascripts/app/controllers/homepage.js"></script>
  <script type="text/javascript" src="/javascripts/app/routes/router.js"></script>

@stop