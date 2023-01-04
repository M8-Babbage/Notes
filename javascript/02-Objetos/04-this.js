"use strict";

// Object literal
const product = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(`${this.nombre}\n${this.precio}\n${this.disponible}`);
  },
};
product.mostrarInfo();

// Object constructor
function objectConstructor(name, price) {
  this.name = name;
  this.price = price;
  this.isAvailable = true;
}

const producto2 = new objectConstructor("Tablet", 300);
console.log(producto2);

