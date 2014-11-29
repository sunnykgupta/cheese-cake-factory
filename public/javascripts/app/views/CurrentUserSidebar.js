(function (Backbone, $) {

  var CurrentUserSidebarView = window.CurrentUserSidebarView = window.BaseView.extend({

    container: 'divSidebar',

    template: 'SidebarUser',

    events: {

    },

    initialize: function() {
      BaseView.prototype.initialize.apply(this, arguments);
      this.render();
    }

  });

}(Backbone, jQuery));