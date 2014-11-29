(function (Backbone, $) {

  var TweetSummaryView = window.TweetSummaryView = Backbone.View.extend({

    tagName: 'div',

    attributes: {},

    template: _.template($('#tmplTweetSummary').html()),

    events: {
      'click': 'onClick'
    },

    onClick: function () {
      alert(this.model.get('id'));
    },

    initialize: function (tweet) {
      this.model = tweet;
      this.author = new User(tweet.get('author'));
      this.delegateEvents();
    },

    updateTimeAgo: function () {
      this.model.set('tweetTimeAgo', moment(this.model.get('timestamp')).fromNow(), true);
      this.$timeAgo.html(moment(this.model.get('timestamp')).fromNow());
    },

    render: function () {
      var model = $.extend(true, {}, this.model.toJSON(), {
        author: this.author.toJSON()
      });
      this.setElement($(this.template(model)));
      this.$timeAgo = this.$('.time-ago');
      setInterval(this.updateTimeAgo.bind(this), 1000);
      return this;
    }

  });

}(Backbone, jQuery));