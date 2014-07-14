_.mixin({
  getTemplate: function (name) {
    return _.template( $('#templates .' + name).html() );
  }
});
