// Importaciones
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// Función que trae los datos de la API
const fechData = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

// Generador que trae la información de la API
async function* iterData(urlApi) {
  // Capturar errores
  try {
    const products = await fechData(`${urlApi}/products`);
    // Retornar en el primer next
    yield console.log(products[107]);

    // Retornar en el segundo next
    const product = await fechData(`${urlApi}/products/${products[0].id}`);
    yield console.log(product.title);

    // Retornar en el tercer next
    const category = await fechData(`${urlApi}/categories/${product.category.id}`);
    yield console.log(category.name);
  } catch (error) {
    console.error(error);
  }
}

// Ejecutar los yields
const db = iterData(API);
db.next();
db.next();
db.next();