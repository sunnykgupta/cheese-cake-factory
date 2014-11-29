(function (Backbone, $) {

  var BaseView = window.BaseView = Backbone.View.extend({

    initialize: function (model) {
      if (model && !this.model) {
        this.model = model;
      }

      this.templateHTML = this.template ? $('#tmpl' + this.template).html() : void(0);
      this.$container = this.container ? $('#' + this.container) : void(0);
      this.removeLoaders();

      if (this.model instanceof Backbone.Model) {
        this.listenTo(this.model, "change", this.render);
      }

      this.setElement(this.$container);
      this.delegateEvents();
      this.bindEvents();
    },

    bindEvents: function () {

    },

    removeLoaders: function () {
      return
      if (this.$container && this.$container.data('boxy-instance')) {
        this.$container.data('boxy-instance').stop();
        this.$container.empty();
      }
    },

    render: function () {
      this.$container.html(this.toHTML());
      return this;
    },

    toHTML: function (overrides) {
      var attributes  = (this.model || {}).attributes;
      var data = $.extend(true, {}, attributes, overrides);
      return _.template(this.templateHTML)(data);
    },

    remove: function () {
      this.beforeRemove && this.beforeRemove();
      Backbone.View.prototype.remove.apply(this, arguments);
    }

  });

}(Backbone, jQuery));