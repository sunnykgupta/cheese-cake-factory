(function (Backbone, $) {

  var CreateTweetView = window.CreateTweetView = window.BaseView.extend({

    container: 'divMainContent',

    template: 'CreateTweet',

    events: {
      'click .btn-create-tweet': 'onCreateTweet'
    },

    initialize: function (models) {
      this.model = models.user;
      BaseView.prototype.initialize.apply(this, arguments);
      this.render();
    },

    render: function () {
      this.$container.prepend(this.toHTML());
    },

    onCreateTweet: function () {

      return false;
    }

  });

}(Backbone, jQuery));