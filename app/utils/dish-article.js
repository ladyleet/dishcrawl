import sfDishes from './dishes-sf';
import nycDishes from './dishes-nyc';
import dcDishes from './dishes-dc';
import sjDishes from './dishes-sj';
import montrealDishes from './dishes-montreal';
import torontoDishes from './dishes-toronto';
import laDishes from './dishes-la';
import memphisDishes from './dishes-memphis';
import rochesterDishes from './dishes-rochester';
import miamiDishes from './dishes-miami';

export default [{
		cardTitle:"Dishes to Try in San Francisco",
		image:"assets/img/dish-articles/sf.jpg",
		imageCredit: "www.themes.com",
		cardContent:"Dishcrawl San Francisco with these dishes we've sampled.",
		bodyPartial: 'dish-articles/sf-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: sfDishes
	},{
		cardTitle:"Dishes to Try in DC",
		image:"assets/img/dish-articles/dc.jpg",
		imageCredit: "stipcommonslab.github.io",
		cardContent:"Dishcrawl DC with these dishes we've sampled.",
		bodyPartial: 'dish-articles/dc-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: dcDishes
	},{
		cardTitle:"Dishes to Try in San Jose",
		image:"assets/img/dish-articles/san-jose.jpg",
		imageCredit: "www.stevekepple.com",
		cardContent:"Dishcrawl San Jose with these dishes we've sampled.",
		bodyPartial: 'dish-articles/sj-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: sjDishes
	},{
		cardTitle:"Dishes to Try in Montreal",
		image:"assets/img/dish-articles/montreal.jpg",
		imageCredit: "www.wikimedia.org",
		cardContent:"Dishcrawl Montreal with these dishes we've sampled.",
		bodyPartial: 'dish-articles/montreal-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: montrealDishes
	},{
		cardTitle:"Dishes to Try in Toronto",
		image:"assets/img/dish-articles/toronto.jpg",
		imageCredit: "www.extendcreative.com",
		cardContent:"Dishcrawl Toronto with these dishes we've sampled.",
		bodyPartial: 'dish-articles/toronto-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: torontoDishes
	},{
		cardTitle:"Dishes to Try in New York City",
		image:"assets/img/dish-articles/nyc.jpg",
		imageCredit: "www.collegestartup.org",
		cardContent:"Dishcrawl NYC with these dishes we've sampled.",
		bodyPartial: 'dish-articles/nyc-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: nycDishes
	},{
		cardTitle:"Dishes to Try in Los Angeles",
		image:"assets/img/dish-articles/los-angeles.jpg",
		imageCredit: "www.urbanlaliving.com",
		cardContent:"Dishcrawl LA with these dishes we've sampled.",
		bodyPartial: 'dish-articles/la-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: laDishes
	},{
		cardTitle:"Dishes to Try in Memphis",
		image:"assets/img/dish-articles/memphis.jpg",
		imageCredit: "www.jamesparkerphoto.com",
		cardContent:"Dishcrawl Memphis with these dishes we've sampled.",
		bodyPartial: 'dish-articles/memphis-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: memphisDishes
	},{
		cardTitle:"Dishes to Try in Rochester",
		image:"assets/img/dish-articles/rochester.jpg",
		imageCredit: "www.sheridanvincentphotography.com",
		cardContent:"Dishcrawl Rochester with these dishes we've sampled.",
		bodyPartial: 'dish-articles/rochester-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: rochesterDishes
	},{
		cardTitle:"Dishes to Try in Miami",
		image:"assets/img/dish-articles/miami.jpg",
		imageCredit: "www.eci.com",
		cardContent:"Dishcrawl Miami with these dishes we've sampled.",
		bodyPartial: 'dish-articles/miami-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: miamiDishes
	}].map(article => {
		article.id = article.cardTitle.classify().dasherize();
		// if (article.id.length > 40) {
		// 	article.id = article.id.substring(0, 40);
		// }
		return article;
	});