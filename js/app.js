import { getProducts } from "./api.js";
import { displayProducts } from "./products.js";
import { initCart } from "./cart.js";

let allProducts = [];


async function start(){

initCart();

const products = await getProducts();

allProducts = products;

displayProducts(products);

}

const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");

searchInput.addEventListener("input", function(){

const value = searchInput.value.toLowerCase();

const filtered = allProducts.filter(function(product){

return product.title.toLowerCase().includes(value);

});

categorySelect.addEventListener("change", function(){

  const selected = categorySelect.value;
  
  if(selected === "all"){
  
  displayProducts(allProducts);
  
  return;
  
  }
  
  const filtered = allProducts.filter(function(product){
  
  return product.category === selected;
  
  });
  
  displayProducts(filtered);
  
  });

displayProducts(filtered);

});
start();