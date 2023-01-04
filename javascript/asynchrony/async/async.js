// Librerias
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// Función que trae los datos de la API
async function fechData(urlApi) {
  // Espera a que retorne la respuesta de la API
  const response = await fetch(urlApi);
  // Espera a que se convierta a json
  const data = await response.json();
  return data;
}

// Función que trae la información de la API
const anotherFunction = async (urlApi) => {
  // Capturar errores
  try {
    const products = await fechData(`${urlApi}/products`);
    const product = await fechData(`${urlApi}/products/${products[0].id}`);
    const category = await fechData(`${urlApi}/categories/${product.category.id}`);
    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction(API);
