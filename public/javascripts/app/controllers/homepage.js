(function () {

  var HomepageController = window.HomepageController = {

    initialize: function (options) {

      $('#container').empty();
      $('<div></div>').addClass('container').attr('id', 'container').appendTo($('body'));

      $('#container')
        .html($('#tmplHomepage').html());

      var that = this,
        handle = options.username;

      UserService.getCurrentUser()
        .then(function (currentUserJSON) {
          $.when(TimelineService.getUserTimeline(handle))
            .then(function (timeline) {
              UserService.getUser(handle)
                .then(function (userJSON) {
                  var currentUser = new User(currentUserJSON),
                    sidebarUser = new User(userJSON),
                    tweetCollection = new Timeline(timeline.tweets),
                    pendingTweets = new PendingTweets({ user: currentUser, collection: tweetCollection });
                
                  if (this.userTimelineView) {
                    this.userTimelineView.remove();
                  }

                  this.userTimelineView = new UserTimelineView({
                    currentUser: currentUser,
                    sidebarUser: sidebarUser,
                    tweetCollection: tweetCollection,
                    pendingTweets: pendingTweets,
                    handle: handle,
                    isMyPage: (currentUser.get('username') === handle || handle === 'me')
                  });
                });
            });
        })
        .fail(function () {
          console.error(arguments);
        });
    }

  };

}());