// Object literal
const myObject = {
  name: "Edwin J",
  lastname: "Páez R"
}

// Ver las llaves de un objeto
console.log(Object.keys(producto2));
// Ver los values de un objeto
console.log(Object.values(producto2));
// Obtener un array con llave, valor
console.log(Object.entries(producto2));

// Añadir propiedades a un objeto
myObject.newProperty = "Nueva propiedad"

// Ir directamente a una propiedad de un objeto
console.log(myObject.name);
console.log(myObject['name']);

// Eliminar propiedades de un objeto
delete myObject.newProperty;

// Destructuring en objetos con ecmascript
const { name: nameWithEcma } = myObject;

// Destructuring de objetos anidados
const family =   {
  name: 'Mike Smith',
  family: {
    mother: 'Jane Smith',
    father: 'Harry Smith',
    sister: 'Samantha Smith',
    cousin: {
      firstOne: "Matias Páez Florez"
    }
  },
  age: 35
}

// Mostrar el nombre de la mamá de Mike
const { family: {mother: madre} } = family;

// Mostrar el primo de Mike
const { family: { cousin: {firstOne: matias}} } = family; 
