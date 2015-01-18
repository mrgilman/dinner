import Ember from "ember";

export default Ember.ArrayController.extend({
  newRecipe: function() {
    return this.store.createRecord("recipe");
  }.property(),
  actions: {
    createRecipe: function() {
      var controller = this;
      this.get("newRecipe").save().then(function(recipe) {
        controller.get("model").addObject(recipe);
      });
    }
  }
});
