import DS from "ember-data";

var Recipe = DS.Model.extend({
  title: DS.attr("string"),
  url: DS.attr("string"),
  image: DS.attr("string")
});

Recipe.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "pull apart cheesy garlic knots",
      url: "http://comfortablefood.com/pull-apart-cheesy-garlic-knots/",
      image: "http://comfortablefood.com/wp-content/uploads/2013/05/cheesy_garlic_pull_apart_knots1.jpg"
    },
    {
      id: 2,
      title: "Creamy Chicken Stew",
      url: "http://norecipes.com/creamy-chicken-stew/",
      image: "http://cdn2.norecipes.com/wp-content/uploads/2015/01/creamy-chicken-stew-4.jpg?883503"
    }
  ]
});

export default Recipe;
