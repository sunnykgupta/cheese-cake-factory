(function (Backbone, $) {

  var CreateTweetView = window.CreateTweetView = window.BaseView.extend({

    container: 'divMainContent',

    template: 'CreateTweet',

    events: {
      'click .btn-create-tweet': 'onCreateTweet'
    },

    initialize: function (models) {
      this.model = models.user;
      this.collection = models.collection;
      BaseView.prototype.initialize.apply(this, arguments);
      this.render();
    },

    render: function () {
      this.$container.prepend(this.toHTML());
    },

    onCreateTweet: function () {
      var tweet = {
        content: this.$('#txtCreateTweet').val(),
        created_at: new Date().getTime(),
        author: this.model.attributes,
        numReplies: 0,
        numRetweets: 0,
        numFavorites: 0,
        favoritedBy: []
      };
      this.$('#txtCreateTweet').val('');
      this.collection.add([ tweet ]);
      return false;
    }

  });

}(Backbone, jQuery));