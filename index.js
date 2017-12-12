let chalk = require("chalk");

const shop_tools = require ("./src/shop-tools.js")
const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];


console.log(chalk.green("Hello world"));

console.log(shop_tools.getPrices());

console.log(shop_tools.countArticles(products));