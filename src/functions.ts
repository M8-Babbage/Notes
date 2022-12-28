(() => {
  // --------------------------------------------------------------------//
  // -------------------------- DECLARATIVE -----------------------------//
  // --------------------------------------------------------------------//
  function getUser(
    name: string, // Parámetro obligatorio
    lastname: string = "Susano", // Parámetro por defecto
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
    lastname: string = "Susano", // Parámetro por defecto
    status?: boolean // Parámetro opcional
  ): string => {
    // retorna un string
    return `2. My name is ${name} ${lastname}, status: ${
      status ? status : "Desconocido"
    }
3. ${status ?? "Status null o undefined: Nullish coalescing"}`;
  };
  console.log(getOldUser("Laura"));

  // --------------------------------------------------------------------//
  // ---------------------------- OVERLOAD ------------------------------//
  // --------------------------------------------------------------------//
  // Buenas practicas, si hay un any o un unkown en el overload se deja al final
  function parseStr(input: string): string[];
  function parseStr(input: string[]): string;
  function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
      return input.join(""); // string
    } else if (typeof input === "string") {
      return input.split(""); // string[]
    }
  }
  console.log(
    `4. Overload: Array to String ${parseStr(["L", "a", "u", "r", "a"])}`
  );
  console.log(`5. Overload: String to Array ${parseStr("Laura")}`);
})();
