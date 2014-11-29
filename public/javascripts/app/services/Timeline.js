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

  var TimelineService = window.TimelineService = {

    getCurrentUserTimeline: function () {
      return TimelineService.getUserTimeline('me');
    },

    getUserTimeline: function (handle) {
      var deferred = new $.Deferred();
      $.get('/tweets/', function (response) {
        if (typeof response == "string") {
          try {
            response = JSON.parse(response);
          } catch(e) { response = { err: "Invalid JSON!" }; }
        }
        deferred.resolve(response);
      });
      return deferred.promise();
      




      var result = { tweets: [] };
      for (var i = 0; i < 10 + (~~(Math.random() * 20)); i += 1) {
        result.tweets.push({
          id: ~~(Math.random() * 10000),
          content: faker.hacker.phrase(),
          timestamp: faker.date.past().getTime(),
          author: {
            email: faker.internet.email(),
            name: faker.name.findName(),
            handle: faker.hacker.noun().replace(' ', '')
          },
          numReplies: ~~(Math.random() * 10),
          numRetweets: ~~(Math.random() * 20),
          numFavorites: ~~(Math.random() * 30),
          favoritedBy: (function () {
            var f = [];
            for (j = 0; j < 10; j += 1) {
              f.push({
                name: faker.name.findName(),
                email: faker.internet.email()
              });
              return f;
            }
          }())
        });
      }
      return mock(result);


      return mock({
        tweets: [
          {
            id: ~~(Math.random() * 10000),
            content: 'Goodbye World!!!',
            timestamp: new Date().getTime(),
            author: {
              email: 'sunnykrgupta@gmail.com',
              name: 'Sunny Kr Gupta',
              handle: '@theWhineyBoy'
            },
            favoritedBy: [
              { name: 'Biswarup', profilePictureUrl: '/', email: 'biswarup.chakravarty@gmail.com' }
            ]
          },

          {
            id: ~~(Math.random() * 10000),
            content: 'Hello World!!!',
            timestamp: new Date().getTime(),
            author: {
              email: 'biswarup.chakravarty@gmail.com',
              handle: 'biswarup',
              name: 'Biswarup Chakravarty',
              handle: '@biswarup'
            },
            favoritedBy: [
              { name: 'Biswarup', profilePictureUrl: '/', email: 'biswarup.chakravarty@gmail.com' },
              { name: 'Sunny', profilePictureUrl: '/', email: 'sunnykrgupta@gmail.com' }
            ]
          }
        ]
      });
      return $.get('/api/timeline');
    }

  };

}(jQuery));