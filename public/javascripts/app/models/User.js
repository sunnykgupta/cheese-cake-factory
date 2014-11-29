(function (Backbone, $) {

  var User = window.User = Backbone.Model.extend({

    initialize: function () {
      this.setGravatar();
      this.setProfileURL();
    },

    getGravatar: function () {
      return 'http://gravatar.com/avatar/' + md5(this.get('email'));
    },

    setGravatar: function () {
      this.set('gravatar', this.getGravatar());
    },

    setProfileURL: function () {
      this.set('profileURL', '#' + this.get('handle'));
    }

  });

}(Backbone, jQuery));