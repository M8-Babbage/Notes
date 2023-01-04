// Función simple que realiza una suma
function sum(num1, num2) {
  return num1 + num2;
}

// Función que recibe una función como argumento
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

// No se coloca los paréntesis al final de la función sum, ya que se está pasando la función como argumento y no se está invocando.
console.log(calc(1, 2, sum));

// ----------------------------------------------------------------------------

// Se ejecutará 2 segundos después
setTimeout(() => {
  console.log("Hello World");
}, 2000);

// Función que saluda al usuario
function gretting(name) {
  console.log(`Hello ${name}`);
}

// Así se le envían los argumentos a la función gretting
setTimeout(gretting, 2000, "Edwin");
