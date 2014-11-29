(function (Backbone, $) {

  var UserTimelineView = window.UserTimelineView = window.BaseView.extend({

    container: 'body',

    template: 'UserTimeline',

    children: [],

    initialize: function (data) {
      
      BaseView.prototype.initialize.apply(this, arguments);

      this.setElement(this.$container);
      this.render();

      this.children.push(new CurrentUserSidebarView(data.sidebarUser));
      this.children.push(new TimelineView({ collection: data.tweetCollection }));

      if (data.isMyPage) {
        this.children.push(new CreateTweetView({ user: data.currentUser, collection: data.tweetCollection }));
      }
      this.children.push(new PendingTweetsView(data.pendingTweets));
    },

    beforeRemove: function () {
      _.invoke(this.children, 'remove');
      this.children.length = 0;
    }

  });

}(Backbone, jQuery));