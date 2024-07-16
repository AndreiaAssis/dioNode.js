import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

console.log("Welcome to the your Shopee Cart!");

// criando os itens
const item1 = await createItem("hotwheels Ferrari", 20.99, 1);

const item2 = await createItem("hotwheels Lamborghini", 39.99, 3);

//adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, 1);

await cartService.displaycart(myCart);

// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

//console.log("Shopee Cart TOTAL IS: ");
await cartService.calculateTotal(myCart);


