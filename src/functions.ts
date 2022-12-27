// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  // --------------------------------------------------------------------//
  // -------------------------- DECLARATIVE -----------------------------//
  // --------------------------------------------------------------------//
  function getUser(
    name: string, // Parámetro obligatorio
    lastname: string = "Rueda", // Parámetro por defecto
    status?: boolean // Parámetro opcional
  ): string {
    // Retorna un string
    return `1. My name is ${name} ${lastname}, status: ${
      status ? status : "Desconocido"
    }`;
  }
  console.log(getUser("Laura", "Susano", true));

  // --------------------------------------------------------------------//
  // ------------------ ARROW FUNCTIONS - EXPRESION ---------------------//
  // --------------------------------------------------------------------//
  const getOldUser = (
    name: string, // Parámetro obligatorio
    lastname: string = "Rueda", // Parámetro por defecto
    status?: boolean // Parámetro opcional
  ): string => {
    // retorna un string
    return `2. My name is ${name} ${lastname}, status: ${
      status ? status : "Desconocido"
    }
3. ${status ?? "Status null o undefined: Nullish coalescing"}`;
  };
  console.log(getOldUser("Laura", "Susano"));
})();
