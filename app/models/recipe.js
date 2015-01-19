import DS from "ember-data";

var Recipe = DS.Model.extend({
  title: DS.attr("string"),
  url: DS.attr("string")
});

Recipe.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "pull apart cheesy garlic knots",
      url: "http://comfortablefood.com/pull-apart-cheesy-garlic-knots/"
    },
    {
      id: 2,
      title: "Creamy Chicken Stew",
      url: "http://norecipes.com/creamy-chicken-stew/"
    }
  ]
});

export default Recipe;
