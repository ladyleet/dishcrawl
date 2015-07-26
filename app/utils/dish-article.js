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
		cardTitle:"San Francisco - Eat Your Way Through These Dishes",
		image:"assets/img/dish-articles/sf.jpg",
		imageCredit: "www.themes.com",
		cardContent:"Explore the Tasty Crevices of This City With Us.",
		bodyPartial: 'dish-articles/sf-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: sfDishes
	},{
		cardTitle:"DC Dishes - Our Foodie Finds",
		image:"assets/img/dish-articles/dc.jpg",
		imageCredit: "stipcommonslab.github.io",
		cardContent:"We've Sampled the Capitol So You Don't Have To. Enjoy!",
		bodyPartial: 'dish-articles/dc-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: dcDishes
	},{
		cardTitle:"San Jose Foodies - Dishes to Try",
		image:"assets/img/dish-articles/san-jose.jpg",
		imageCredit: "www.stevekepple.com",
		cardContent:"The Silicon Valley is Delicious and Bursting with Flavor!",
		bodyPartial: 'dish-articles/sj-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: sjDishes
	},{
		cardTitle:"Montreal, Eat These Foodie Dishes",
		image:"assets/img/dish-articles/montreal.jpg",
		imageCredit: "www.wikimedia.org",
		cardContent:"One of Our Favourite Frenchie Foodie Cities to Explore.",
		bodyPartial: 'dish-articles/montreal-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: montrealDishes
	},{
		cardTitle:"Toronto Foodie Dishes to Find and Try",
		image:"assets/img/dish-articles/toronto.jpg",
		imageCredit: "www.extendcreative.com",
		cardContent:"Taste Your Way Around Town With Us!",
		bodyPartial: 'dish-articles/toronto-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: torontoDishes
	},{
		cardTitle:"New York City - Explore These Dishes",
		image:"assets/img/dish-articles/nyc.jpg",
		imageCredit: "www.collegestartup.org",
		cardContent:"We've Literally Taken a Bite Out of The Big Apple.",
		bodyPartial: 'dish-articles/nyc-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: nycDishes
	},{
		cardTitle:"Los Angeles - Spilling These Foodie Dishes to Try",
		image:"assets/img/dish-articles/los-angeles.jpg",
		imageCredit: "www.urbanlaliving.com",
		cardContent:"The City of Angels is Full of Heavenly Good Eats!",
		bodyPartial: 'dish-articles/la-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: laDishes
	},{
		cardTitle:"Memphis - Here are Some Dishes to Try",
		image:"assets/img/dish-articles/memphis.jpg",
		imageCredit: "www.jamesparkerphoto.com",
		cardContent:"Get Down and Dirty with the Delicious South.",
		bodyPartial: 'dish-articles/memphis-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: memphisDishes
	},{
		cardTitle:"Rochester, Eat Like a Foodie",
		image:"assets/img/dish-articles/rochester.jpg",
		imageCredit: "www.sheridanvincentphotography.com",
		cardContent:"A City That's Surprisingly Full of Delightful Food.",
		bodyPartial: 'dish-articles/rochester-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: rochesterDishes
	},{
		cardTitle:"Miami - Eat Your Dishes Out",
		image:"assets/img/dish-articles/miami.jpg",
		imageCredit: "www.eci.com",
		cardContent:"The Miami Heat Pairs Perfectly with These Yummy Finds.",
		bodyPartial: 'dish-articles/miami-dishes',
		author: 'Nicole Benziger and Tracy Lee',
		dishes: miamiDishes
	}].map(article => {
		article.id = article.cardTitle.classify().dasherize().replace(/\,/, '-');
		// if (article.id.length > 40) {
		// 	article.id = article.id.substring(0, 40);
		// }
		return article;
	});