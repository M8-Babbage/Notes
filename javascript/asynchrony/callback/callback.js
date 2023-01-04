// Se crea una instancia de la clase XMLHttpRequest
import { XMLHttpRequest } from "xmlhttprequest";
const API = "https://api.escuelajs.co/api/v1";

// Función para realizar una petición a la API y obtener un objeto
function fetchData(urlApi, callback) {
  // Generar un objeto de tipo XMLHttpRequest
  let xhttp = new XMLHttpRequest();
  // Se genera una conexión a la API, Método HTTP, URL, true para que sea asíncrono
  xhttp.open("GET", urlApi, true);
  // Es llamado cuando el estado de la petición cambie "Event Handler"
  xhttp.onreadystatechange = (event) => {
    // Validamos si se completó la petición
    if (xhttp.readyState === 4) {
      // Si el estado de la petición es 200, se recibe la información y se convierte en objeto
      if (xhttp.status === 200) {
        // callback(posición, información)
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // Se inicializa un objeto de tipo error
        const error = new Error("Error: " + urlApi);
        return callback(error, null);
      }
    }
  };
  // Envía la petición al servidor
  xhttp.send();
}

// Ejecución de la función fetchData
fetchData(`${API}/products`, (error1, data1) => {
  // Si hay un error en la petición1, mostrar, salir
  if (error1) return console.error(error1);
  // Segunda llamada a la API con la información de data 1
  fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
    // Si hay un error en la petición 2, mostrar, salir
    if (error2) return console.error(error2);
    // Tercera petición a la API con la información de data 2
    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      // Si hay error en la petición 3, mostrar, salir
      if (error3) return console.error(error3);

      // Mostrar la información de cada una de las data de las peticiones
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});
