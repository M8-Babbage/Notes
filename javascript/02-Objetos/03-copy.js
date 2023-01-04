const family = {
  name: "Mike Smith",
  family: {
    mother: "Jane Smith",
    father: "Harry Smith",
    sister: "Samantha Smith",
    cousin: {
      firstOne: "Matias Páez Florez",
    },
  },
  age: 35,
};

// Hacer una copia de un objeto
const newFamily = { ...family };

// Unir dos objetos o más
const oldFamily = {
  state: false,
};

// Forma 1 - Copiar todas las propiedades en el nuevo objeto llamado newChain
const newChain = { ...family, ...oldFamily };

// Forma 2 - Crear un nuevo objeto y añadirle otro objeto
const oldChain = { ...family, oldFamily };
