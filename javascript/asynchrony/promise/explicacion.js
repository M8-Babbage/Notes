// Variable con un valor primitivo
const cows = 9;

// Promesa, se genera una instancia de la clase Promise con su resolución y rechazo
const countCows = new Promise((resolve, reject) => {
  // Si las vacas son mayor a 10 se resuelve la promesa
  if (cows > 10) {
    // Resolución de la promesa
    resolve(`We have ${cows} cows on the farm`);
  }
  // Si las vacas son menores a 10 se rechaza la promesa
  else {
    // Rechazo de la promesa
    reject(`There is no cows on the farm`);
  }
});

// Se llama la promesa con su condición interna y se validad los resultados
countCows
  // Si se cumple correctamente el valor de resolve se recibe en .then
  .then((response) => console.log(response))
  // Si falla el valor del reject se recibe en el .catch
  .catch((error) => console.error(error))
  // Cuando la promesa finaliza sea exitosa o no se ejecuta el .finally
  .finally(() => console.log("Finally"));
