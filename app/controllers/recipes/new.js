import Ember from "ember";

export default Ember.ObjectController.extend({
  newRecipe: function() {
    return this.store.createRecord("recipe");
  }.property(),
  actions: {
    createRecipe: function() {
      var controller = this;
      var recipes = this.get("model");
      this.get("newRecipe").save().then(function(recipe){
        recipes.get("existing").addObject(recipe);
        controller.set("newRecipe", controller.store.createRecord("recipe"));
      });
    }
  }
});
