let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartUI(){

const counter = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const totalEl = document.querySelector("#cart-total");

if(counter){
counter.innerText = `Cart (${cart.length})`;
}

if(cartItems){

cartItems.innerHTML = "";

cart.forEach(function(item,index){

cartItems.innerHTML += `
<div>

${item.title} - $${item.price}

<button onclick="removeItem(${index})">Remove</button>

</div>
`;

});

}

if(totalEl){

const total = cart.reduce(function(sum,item){

return sum + item.price;

},0);

totalEl.innerText = `Total: $${total}`;

}

}

export function addToCart(product){

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartUI();

}

export function initCart(){

updateCartUI();

}

window.removeItem = function(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartUI();

};