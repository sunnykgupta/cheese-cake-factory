(function (Backbone, $) {

  var TimelineView = window.TimelineView = window.BaseView.extend({

    container: 'divMainContent',

    events: {

    },

    tweetViews: [],

    initialize: function () {
      var tweetView;
      BaseView.prototype.initialize.apply(this, arguments);

      // render the tweet collection
      this.collection.each(this.renderTweet.bind(this));

      // cache the DOM
      this.$container = $('#' + this.container);

      this.collection.on('add', this.onCreateTweet.bind(this));
    },

    onCreateTweet: function (tweet) {
      tweet.save();
      this.renderNewTweet(tweet);
    },

    renderTweet: function (tweet) {
      tweetView = new TweetSummaryView(tweet);
      this.tweetViews.push(tweetView);
      this.$container.append(tweetView.render().$el);
    },

    renderNewTweets: function (tweets) {
      _.each(tweets, this.renderNewTweet.bind(this));
    },

    renderNewTweet: function (tweet) {
      tweetView = new TweetSummaryView(tweet);
      this.tweetViews.push(tweetView);
      tweetView.render().$el.insertBefore(this.$('.tweet').eq(0));
    }

  });

}(Backbone, jQuery));