const PRODUCTS_URL = "https://gistore20-ec60.restdb.io/rest/products";
const API_KEY = "6b030bf9cb1c240688625fca";

window.addEventListener("load", async () => { await getProducts();
  renderProducts();
})

const productsList = document.getElementById("products");

let products = []

function renderProducts() {
  products.forEach(({ name }) => { 
    const el = document.createElement("li");
    el.innerText = name;
    productsList.appendChild(el);
  });
 }
async function getProducts() {
  try{
    const res = await fetch(PRODUCTS_URL, {
    headers: {
      "content-type": "application/json",
      "x-apikey": API_KEY,
      "cache-contol": "no-cache",
    },
   });
    const data = await res.json();
    console.log(data);
    products = data;
  } catch (error) {
    console.error(error);
  }
}