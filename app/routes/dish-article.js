import Ember from 'ember';
import dishArticles from 'dishcrawl/utils/dish-article';	
export default Ember.Route.extend({
	model: function(params){
	return dishArticles.findBy('id', params.id);
	}
});
