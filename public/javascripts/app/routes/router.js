(function (Backbone) {

  var TwitterRouter = Backbone.Router.extend({

    routes: {
      "": "homepage",
      "@:handle": "userPage"
    },

    homepage: function () {
      HomepageController.initialize();
    },

    userPage: function(handle) {
      console.log(handle);
    }

  });

  var twitterRouter = new TwitterRouter();
  Backbone.history.start();

}(Backbone));