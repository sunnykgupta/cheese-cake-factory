(function (Backbone, $) {

  var PendingTweetsView = window.PendingTweetsView = window.BaseView.extend({

    container: 'divMainContent',

    template: 'PendingTweets',

    refreshInterval: 30000,

    events: {
      'click a': 'onClick'
    },

    initialize: function (models) {
      this.user = models.user;
      this.timeline = models.collection;

      BaseView.prototype.initialize.apply(this, arguments);

      this.setElement(this.$container);
      this.render();
      this.model.on('set:num', this.render.bind(this));
      
      this.refreshHandle = setInterval(this.refresh.bind(this), this.refreshInterval);
    },

    refresh: function () {
      TimelineService
        .getCurrentUserTimeline(this.user.attributes)
          .then(this.model.processTimeline.bind(this.model));
    },

    render: function () {
      var html;
      this.$('.pending-tweets').remove();
      if (this.model.get('num') > 0) {
        html = this.toHTML({
          tweet: (this.model.get('num') > 1 ? 'tweets' : 'tweet')
        });
        this.$container.prepend(html);
      }
    },

    onClick: function () {
      window.location.reload();
      // this.model.set('num', 0);
      // this.model.timeline.add(this.model.get('tweets'));
      // this.render();
    },

    beforeRemove: function () {
      clearInterval(this.refreshHandle);
    }

  });

}(Backbone, jQuery));