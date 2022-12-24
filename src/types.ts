// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  // No usar: [String, Boolean, Number] (se usan en JS),
  // Usar: [string, boolean, number] (types en typescript)

  // --------------------------------------------------------------------//
  // --------------------------- ESTRUCTURE -----------------------------//
  // [let, const] = let variable, const constante                        //
  // declaración: tipo = valor
  // --------------------------------------------------------------------//
  let defineType: number; // número
  let noDefineType; // defecto es any

  // --------------------------------------------------------------------//
  // ---------------------------- NUMBERS -------------------------------//
  // [int, float, octal: "0o0771234", hex: "0xfff", binary: "ob1010", NaN//
  // Infinity]                                                           //
  // --------------------------------------------------------------------//
  let productPrice: number = 100;
  let hexNumber: number = 0xfff;
  let binNumber: number = 0b1010;
  console.log(
    `1. Numbers: ${productPrice}, Hex: ${hexNumber}, Bin: ${binNumber}`
  );

  // --------------------------------------------------------------------//
  // ---------------------------- BOOLEANS ------------------------------//
  // [true, false]                                                       //
  // --------------------------------------------------------------------//
  let isOpen: boolean = Math.random() > 0.5;
  console.log(`2. Boolean: ${isOpen}`);

  // --------------------------------------------------------------------//
  // ---------------------------- STRINGS -------------------------------//
  // ["iPhone12", 'iPhone12', `iPhone12`] las comillas                   //
  // --------------------------------------------------------------------//
  const productName: string = `Fernandez`;
  const otherProductName: string = "Susano " + productName;
  const anotherProductName: string = `Laura ${otherProductName}`;
  console.log(`3. String: ${anotherProductName}`);

  // --------------------------------------------------------------------//
  // -------------------------- UNION TYPES------------------------------//
  // para poder soportar más de un tipo de dato                          //
  // --------------------------------------------------------------------//
  let myUnionType: number | string | boolean | symbol = 16;
  console.log(
    `4. Union types: ${myUnionType} ( let myUnionType: number | string | boolean | symbol = 16; )`
  );

  // --------------------------------------------------------------------//
  // ---------------------------- TYPES ---------------------------------//
  // [alias], crear tipos propios                                        //
  // --------------------------------------------------------------------//
  type Ids = string | number | boolean;
  // La variable userID solo puede ser de un tipo del type Ids
  const userId: Ids = "Laura";
  console.log(
    `5. Alias or Types: ${userId}, ( type Ids = string | number | boolean; )`
  );

  // --------------------------------------------------------------------//
  // -------------------------- LITERAL TYPES ---------------------------//
  // --------------------------------------------------------------------//
  type Sizes = "S" | "M" | "L" | "XL";
  // La variable productID solo puede tener valores del type Sizes
  const productID: Sizes = "L";
  console.log(
    `6. Literal Types: ${productID}, ( type Sizes = "S" | "M" | "L" | "XL"; )`
  );

  // --------------------------------------------------------------------//
  // ------------------------------ ARRAYS ------------------------------//
  // [number[], string[], Date[], any[]], cualquier tipo de dato         //
  // --------------------------------------------------------------------//
  const myArray: number[] = [1, 2, 3, 4, 5]; // Arreglo de números
  const myNewArray: Array<number> = [1, 2, 3, 4]; // Arreglo de números
  let prices: (number | string | boolean)[] = ["hola", 2, true]; // Varios
  console.log(`7. Array: ${JSON.stringify(myArray)}`);

  // --------------------------------------------------------------------//
  // ------------------------------ TUPLES ------------------------------//
  // [number, string, boolean, Date, any], cualquier tipo de dato        //
  // Es un arreglo con una dimensión fija, y con más rendimiento
  // --------------------------------------------------------------------//
  let person: [edad: number, nombre: string, estado: boolean] = [
    1,
    "Steve",
    true
  ];
  let newPerson: [number, string, boolean] = [1, "Steve", true];
  console.log(
    `8. Tuples: ${newPerson} ( let person: [edad: number, nombre: string, estado: boolean] )`
  );

  // --------------------------------------------------------------------//
  // -------------------------------- ANY -------------------------------//
  // puede ir cualquier cosa, mal uso, pero puede ser usado en migración //
  // --------------------------------------------------------------------//
  let myDinamicVar: any;
  // Casteo: tipar el any, pero no es recomendable
  myDinamicVar = "Laura Susano";
  myDinamicVar = (myDinamicVar as string).toUpperCase(); // Casteo: string
  console.log(`9 A. Any as string: ${myDinamicVar}`);
  // Usando genéricos
  myDinamicVar = 2.2333;
  myDinamicVar = (<number>myDinamicVar).toFixed(2); // Casteo: number
  console.log(`9 B. Any as number: ${myDinamicVar}`);

  // --------------------------------------------------------------------//
  // ----------------------------- UNKNOWN ------------------------------//
  // Podemos usarlo cuando no tenemos un tipo definido pero,
  // el objeto no podrá ser usado hasta no definirle un tipo
  // --------------------------------------------------------------------//
  const jsonUnknown = (string: string): unknown => JSON.parse(string);
  const unknownObject = jsonUnknown(`{ "name": "Samuel" }`);
  console.log(
    `10. Unknown: ${JSON.stringify(
      unknownObject
    )}, no puede llamar propiedades del objeto directamente`
  );

  // --------------------------------------------------------------------//
  // ------------------------------ VOID --------------------------------//
  // Sirve para decir que una función no retorna nada                    //
  // --------------------------------------------------------------------//
  const returnVoid = (name?: string): void => {
    console.log(`11. Void : ${name ? name : "Unknown"}`);
  };
  returnVoid("Laura");

  // --------------------------------------------------------------------//
  // -------------------------- NULL & UNDEFINED-------------------------//
  // epende el caso de uso para asignar estos valores con union types    //
  // --------------------------------------------------------------------//
  const myName: string | null = "Edwin";
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  console.log(`12. Null: ${myName}`);
  console.log(`13. Undefined: ${myUndefined}`);

  // Optional chaining, puede ser usado en types, parámetros, interfaces, para decir que es opcional, si myName llegase a ser falsy, asignaría 'Sin nombre'
  console.log(`14. Optional chaining ${myName?.length || "Sin nombre"}`);

  // --------------------------------------------------------------------//
  // ------------------------------ NEVER -------------------------------//
  // Significa que el valor nunca va a existir, se usa en funciones que  //
  // que lanzan excepciones                                              //
  // --------------------------------------------------------------------//
  function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
  }
  console.log(
    `15. Never: ${throwError("Error generado por el desarrollador")}`
  );
})();
