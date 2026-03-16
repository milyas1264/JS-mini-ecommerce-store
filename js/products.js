import { addToCart } from "./cart.js";

export function displayProducts(products) {
  const container = document.querySelector("#products");

  container.innerHTML = "";

  products.forEach(function (product) {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
    <a href="product.html?id=${product.id}">

<img src="${product.thumbnail}" width="150">

</a>
  
  <h3>${product.title}</h3>
  
  <p>Price: $${product.price}</p>
  
  <button>Add To Cart</button>
  
  `;

    const btn = card.querySelector("button");

    btn.addEventListener("click", function () {
      addToCart(product);
    });

    container.appendChild(card);
  });
}
