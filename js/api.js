export async function getProducts(){

  const res = await fetch("https://dummyjson.com/products")
 
  const data = await res.json()
 
  return data.products
  
 
 }
 const products = await getProducts();
 console.log(products);
 