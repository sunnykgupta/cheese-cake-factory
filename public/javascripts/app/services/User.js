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
      return mock({
        name: 'Biswarup Chakravarty',
        handle: 'biswarup',
        tweets: 404,
        followers: 420,
        following: 302,
        profilePictureUrl: '/',
        email: 'biswarup.chakravarty@gmail.com'
      });
      return $.get('/api/me');
    }

  };

}(jQuery));