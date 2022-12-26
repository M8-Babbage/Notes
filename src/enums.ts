(() => {
  // --------------------------------------------------------------------//
  // ------------------------------ ENUMS -------------------------------//
  // Constantes estáticas con valores específicos al negocio             //
  // --------------------------------------------------------------------//

  // Creación de un nuevo enum que contiene roles
  enum Roles {
    Admin = "admin",
    Seller = "seller",
    Customer = "customer"
  }

  // Cuando no se asigna un value, se toma desde 0 en adelante, y si se asignan números
  // el siguiente valor tendrá el valor del número asignado anterior + 1
  enum Size {
    Undefined = "undefined",
    Small = 2,
    Medium
  }

  // Generar un type que contiene enums
  type User = {
    name: string;
    age: number;
    rol: Roles;
    size: Size;
  };

  // Estructura del enum
  console.log(`1. Enum: Roles ${JSON.stringify(Roles)}`); // S

  // Apuntamos al valor de MEMIUM en el enum SIZE
  console.log(`2. Enum: Size: ${Size.Medium}`); // 3

  // Crear un objeto que cumpla con el type User
  const user: User = {
    name: "Laura",
    age: 20,
    rol: Roles.Admin,
    size: Size.Small
  };

  // Mostramos el usuario en la consola
  console.log(`3. Objeto User con Enums: ${JSON.stringify(user)}`);
})();
