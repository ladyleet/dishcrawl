import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('media');
  this.route('cookbook');
  this.route('dishes');
  this.route('newsletter');
  this.route('recipes');
  this.route('about');
  this.route('brands');
  this.route('dish-article', {path:'dish-article/:id'});
});

export default Router;
