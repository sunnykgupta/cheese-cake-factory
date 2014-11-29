(function (Backbone, $) {

  var Followers = window.Followers = Backbone.Collection.extend({
    model: User
  });

}(Backbone, jQuery));