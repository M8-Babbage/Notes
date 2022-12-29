(() => {
  // --------------------------------------------------------------------//
  // -------------------------- INTERFACES ------------------------------//
  // Permite nuevas propiedades y métodos
  // --------------------------------------------------------------------//
  // Interface base para extender
  interface BaseModel {
    id: string | number;
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface Address extends BaseModel {
    name?: string; // Propiedad opcional
    location: string[]; // Propiedad de tipo array
    getAddress?: () => string; // Método que retorna un string
  }

  // Se puede expandir una interface
  interface Address {
    status: boolean;
  }

  // --------------------------------------------------------------------//
  // ---------------------------- TYPES ---------------------------------//
  // No permite nuevas propiedades y métodos
  // --------------------------------------------------------------------//
  type newUser = {
    readonly id: string; // Propiedad obligatoria que solo se podrá asignar 1 vez y no se podrá editar
    name: string; // Propiedad obligatoria
    address: Address; // Propiedad de tipo interface
    skills: string[]; // Propiedad de tipo array
    age?: number; // Propiedad opcional
    getName?: () => string; // Método que retorna un string
  };

  // Ejemplo de construcción con types y interfaces
  const newUser: newUser = {
    id: "01",
    name: "Laura",
    address: {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "Altamira",
      location: ["Calle", "4", "5-16"],
      status: false
    },
    age: 20,
    skills: ["TypeScript", "JavaScript", "Git"],
    getName() {
      return `${this.name} vive en ${this.address?.name} en ${this.address?.location}, ${this.address?.status}`;
    }
  };

  // newUser.id = "Nuevo ID, no se puede porque es solo lectura"

  // Mostramos el usuario generado
  console.log(`1. Nuevo usuario: ${JSON.stringify(newUser)}`);
  console.log(
    `2. Retorno de la función dentro del objeto: ${newUser.getName!()}`
  );
})();
