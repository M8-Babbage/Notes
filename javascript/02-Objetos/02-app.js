// Le decimos a JS que será escrito de modo estricto
"use strict";

// Congelar un objeto
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

// Con la propiedad freeze del object method podemos blquear el objeto
Object.freeze(family);
console.log(Object.isFrozen(family));

// Con la propiedad seal podemos sellar el objeto, sólo se permite modificar las llaves existentes
Object.seal(family);
console.log(Object.isSealed(family));
