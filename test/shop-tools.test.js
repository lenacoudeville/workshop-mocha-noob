var expect = require('chai').expect;
const shop_tools = require ("../src/shop-tools.js")


describe('LISTE DES PRIX PAR PRODUIT : { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 }', function(){
	var prices = shop_tools.getPrices();
	it('GETPRICES DEVRAIT AVOIR LE MEME RESULTAT: ', function() {
		expect(prices).to.eql({ banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
	})
});

describe('NOMBRE DE PRODUITS : ', function(){
	var articles = [ 'tomato', 'cucumber' ]
		var nbArticles = shop_tools.countArticles(articles);
	it('COUNTARTICLES DEVRAIT AVOIR LE MEME RESULTAT: ', function() {
		expect(nbArticles).to.eql(2);
	})
});