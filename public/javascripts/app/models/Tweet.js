(function (Backbone, $) {

  var Tweet = window.Tweet = Backbone.Model.extend({

    initialize: function () {
      var that = this;
      if (!this.get('numReplies'))
        this.set('numReplies', 0);
      if (!this.get('numRetweets'))
        this.set('numRetweets', 0);
      if (!this.get('numFavorites'))
        this.set('numFavorites', 0);

      this.set('created_at', new Date(this.get('created_at')).getTime() + (5 * 3600 + 30 * 60) * 1000)
      console.log(this.get('created_at'));
    },

    save: function () {
      $.post('/tweets', {
        content: this.get('content')
      })
    }
    
  });

}(Backbone, jQuery));