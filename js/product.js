const params = new URLSearchParams(window.location.search);

const id = params.get("id");

async function loadProduct(){

const res = await fetch(`https://dummyjson.com/products/${id}`);

const product = await res.json();

const container = document.querySelector("#product-details");

container.innerHTML = `

<h2>${product.title}</h2>

<img src="${product.thumbnail}" width="250">

<p>${product.description}</p>

<h3>Price: $${product.price}</h3>

`;

}

loadProduct();