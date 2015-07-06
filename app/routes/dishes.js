import Ember from 'ember';
import dishArticle from 'dishcrawl/utils/dish-article';	
export default Ember.Route.extend({
	model: function(){
	return dishArticle;
	}
});
