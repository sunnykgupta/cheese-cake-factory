(function ($) {

  var timeout = 10;

  var mock = function (obj, fail) {
    var deferred = new $.Deferred();
    var handler = fail ? deferred.reject : deferred.resolve;
    setTimeout(function () {
      handler(obj);
    }, timeout);
    return deferred.promise();
  };

  var UserService = window.UserService = {

    getCurrentUser: function () {
      var deferred = new $.Deferred();
      $.get('/me/', function (response) {
        if (typeof response == "string") {
          response = JSON.parse(response);
        }
        deferred.resolve(response);
      });
      return deferred.promise();
    },

    getUser: function (username) {
      var deferred = new $.Deferred();
      $.get('/users/' + username + '/', function (response) {
        if (typeof response == "string") {
          response = JSON.parse(response);
        }
        deferred.resolve(response);
      });
      return deferred.promise();
    }

  };

}(jQuery));