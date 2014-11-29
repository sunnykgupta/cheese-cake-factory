(function () {

  var HomepageController = window.HomepageController = {

    initialize: function () {

      $('#container')
        .html($('#tmplHomepage').html());

      // $('[data-has-boxy]').each(function () {
      //   var boxy = new Boxy();
      //   $(this).empty().append(boxy.canvas);
      //   $(this).data('boxy-instance', boxy);
      //   boxy.start();
      // });

      $.when(
          UserService.getCurrentUser(),
          TimelineService.getCurrentUserTimeline()
        ).then(function (currentUserJSON, timeline) {
          this.sidebarUserView = new CurrentUserSidebarView(new User(currentUserJSON));
          this.timelineView = new TimelineView({ collection: new Timeline(timeline.tweets) });
          this.createTweetView = new CreateTweetView({ user: new User(currentUserJSON), collection: new Timeline(timeline.tweets) });
        }).fail(function () {
          console.error(arguments);
        });
    }.bind(HomepageController)

  };

}());