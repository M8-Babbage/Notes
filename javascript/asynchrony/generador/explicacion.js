// Generadores - si se acaban los yield retorna undefined
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);

// Palabra reservada para el generador
function* iterable(array) {
  for (let value of array) {
    yield value;
  }
}

// Se asigna a una variable el generador con su argumento 
const it = iterable([1, 2, 3, 4, 5]);
// Se ejecutan los yield con el método next
console.log(it.next().value);
console.log(it.next().value);