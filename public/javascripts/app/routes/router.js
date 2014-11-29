(function (Backbone) {

  var safely = function (delegate) {
    try {
      delegate();
    } catch (e) {
      console.error(e);
    }
  }

  var TwitterRouter = Backbone.Router.extend({

    routes: {
      "": "homepage",
      "@:username": "userPage"
    },

    homepage: function () {
      safely(function () {
        HomepageController.initialize({
          username: 'me'
        });
      });
    },

    userPage: function(username) {
      safely(function () {
        HomepageController.initialize({
          username: username
        });
      });
    }

  });

  var twitterRouter = new TwitterRouter();
  Backbone.history.start();

}(Backbone));