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
      this.collection.each(function (tweet) {
        tweetView = new TweetSummaryView(tweet);
        this.tweetViews.push(tweetView);
        this.$container.append(tweetView.render().$el);
      }, this);

      // cache the DOM
      this.$container = $('#' + this.container);
    }

  });

}(Backbone, jQuery));