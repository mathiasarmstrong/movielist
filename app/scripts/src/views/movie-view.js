(function () {

  // SINGLE VIEW
  window.MovieView = Backbone.View.extend({

    // By default, a view creates an empty div for its element.
    // This tells backbone to set a class name on that empty div.
    className: 'movie',

    // This adds a property `template` to the TaskView prototype,
    // which is accessible inside any view via this.template
    template: _.getTemplate('movie'),

    events: {
      'change .check': 'toggleComplete'
    },

    initialize: function (options) {
      // Listen to model changes and call our render function when they occur.
      this.listenTo(this.model, 'change', this.render);
    },

    toggleComplete: function (e) {
      // Grab checked status from the checkbox element that caused the changed event
      var isChecked = $(e.currentTarget).is(':checked');

      // Set the new complete status in our task model.
      // Since we're listening to changes, this will automatically call our render function.
      this.model.set({ complete: isChecked });
    },

    render: function () {
      // Generate html using our model for the template data
      var newHtml = this.template( this.model.toJSON() );
      $(this.el).html(newHtml);

      // Grab the complete status of the task
      var isChecked = this.model.get('complete');

      // Toggle the 'done' class based on our model's complete state
      $(this.el).find('.check').prop('checked', isChecked);
      // Toggle the checkbox based on our model's complete state
      $(this.el).toggleClass('done', isChecked);
    }
  });

})();
