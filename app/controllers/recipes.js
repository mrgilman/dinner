import Ember from "ember";

export default Ember.ArrayController.extend({
  existing: function() {
    return this.filterBy("isNew", false);
  }.property("model")
});
