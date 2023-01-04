// FETCH
// Importamos fetch para hacer las peticiones al servidor
import fetch from "node-fetch";
// URI de la API
const API = "https://api.escuelajs.co/api/v1";

// Se genera una petición a la API con su endpoint productos
fetch(`${API}/products`)
  // Se convierte la información recibida a JSON, proceso asíncrono, se retorna una promesa "then"
  .then((response) => response.json())
  // Se recibe el JSON y se retorna otra petición que nos devuelve una promesa "FETCH"
  .then((products) => {
    return fetch(`${API}/products/${products[0].id}`);
  })
  // Se convierte a JSON
  .then((response) => response.json())
  // Se hace otra petición
  .then((product) => fetch(`${API}/categories/${product?.category?.id}`))
  // Se convierte a JSON
  .then((response) => response.json())
  // Se muesrta la información en pantalla
  .then((category) => console.log(category.name))
  // Si hay un error se muestra en pantalla
  .catch((error) => console.error(error))
  // Cuando finalice, se muestra un mensaje en pantalla
  .finally(() => console.log("Finalizo"));
