// FETCH
// Importamos fetch para hacer las peticiones al servidor
import fetch from "node-fetch";
// URI de la API
const API = "https://api.escuelajs.co/api/v1";

// Función para generar peticiones POST
function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Se pasa a texto
    body: JSON.stringify(data),
  });
  return response;
}

// Objeto del body
const data = {
  title: "New product course A",
  price: 9999,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

// Ejecución de la función postData
postData(`${API}/products`, data)
  .then((res) => res.json())
  .then((res) => console.log(res));
