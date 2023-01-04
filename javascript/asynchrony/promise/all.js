// Importamos axios para hacer las peticiones al servidor
import axios from "axios";
// URI de la API
const API = "https://api.escuelajs.co/api/v1";

// AXIOS
// Función que trae los productos de la API
const getProductos = () => {
  return axios.get(`${API}/products`);
};

// Función que trae las categoiras de la API
const getCategorias = () => {
  return axios.get(`${API}/categories`);
};

// Resolver todas las peticiones y retornar sus valores
Promise.all([getProductos(), getCategorias()]).then((results) => {
  const [products, categories] = results;
  console.log(products.data[0]);
  console.log(categories.data[0]);
});
