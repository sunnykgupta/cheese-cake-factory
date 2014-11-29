(function (Backbone, $) {

  var PendingTweets = window.PendingTweets = Backbone.Model.extend({
    
    initialize: function (models) {
      this.user = models.user;
      this.timeline = models.collection;

      this.set('num', 0);
      this.set('tweets', _.pluck(this.timeline.models, 'attributes'));
    },

    processTimeline: function (refreshedTimeline) {
      if (refreshedTimeline.tweets.length > this.timeline.length) {
        this.trigger('new_tweets');
        this.set('tweets', this.calculateDifference(refreshedTimeline.tweets));
        this.set('num', refreshedTimeline.tweets.length - this.timeline.length);
      }
      // this.timeline = new Timeline(refreshedTimeline.tweets);
    },

    calculateDifference: function (current) {
      var old = this.get('tweets');
      var tweetIds = _.difference(_.pluck(current, 'id'), _.pluck(old, 'id'));
      return _.map(tweetIds, function (id) {
        return _.where(current, { id: id })[0];
      });
    }

  });

}(Backbone, jQuery));