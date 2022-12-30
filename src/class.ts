// --------------------------------------------------------------------//
// ---------------------------- CLASES --------------------------------//
// --------------------------------------------------------------------//
(() => {
  class Avenger {
    static nombre: string; // Propiedad estática
    public nombreReal: string; // Propiedad pública
    private puedePelear: boolean; // Propiedad privada
    protected test: string; // Propiedad protegida

    constructor(nombre: string, nombreReal: string, puedePelear: boolean, test?: string) {
      Avenger.nombre = nombre; // Asignar una propiedad estática
      this.nombreReal = nombreReal; // Asignar una propiedad pública
      this.puedePelear = puedePelear; // Asignar una propiedad privada
      this.test = test || 'test'; // Asignar una propiedad protegida, propiedad opcional
    }

    // Métodos estáticos, solo pueden apuntar a otras propiedades estáticas
    static staticMethod(): string {
      return Avenger.nombre;
    }

    // Getters: retorna el nombre de la propiedad pública
    get getName(): string {
      return this.nombreReal;
    }

    // Setters: asigna un valor a la propiedad pública
    set setName(nombreReal: string) {
      // El this apunta a la instancia de la clase
      this.nombreReal = nombreReal;
    }

    // Los propiedades / métodos protegidos pueden ser usadas desde clases heredadas
    protected getFullName(): string {
      return `${this.nombreReal} - ${this.test}`;
    }
  }

  // Instancia de la clase Avenger
  const antman: Avenger = new Avenger('Antman C', 'Scott Lang', true, 'protegida');
  // Modificar una propiedad pública
  antman.nombreReal = 'Antman';
  // Mostrar en pantalla los valores de las propiedades de la instancia antman
  console.log(antman);
  // Obtener el nombre estático de la clase
  console.log(Avenger.staticMethod());
  // Definir el nombre privado
  antman.setName = 'Antman C';
  // Obtener el nombre por medio de un método getter, no van los ()
  console.log(antman.getName);

  // --------------------------------------------------------------------//
  // --------------------------- HERENCIA -------------------------------//
  // --------------------------------------------------------------------//
  class Xmen extends Avenger {
    constructor(nombre: string, nombreReal: string, puedePelear: boolean, test: string) {
      // En el súper se traen las propiedades que se heredan y también se pasan en el constructor
      super(nombre, nombreReal, puedePelear, test);
    }

    // Sobreescribir un método de la clase padre
    getFullName(): string {
      return `${this.nombreReal} - ${this.test} - Xmen`;
    }

    // Usar el mismo método de la clase padre: void porque no retorna nada, solo muestra
    public getFullNameXmen(): void {
      console.log(super.getFullName());
    }
  }

  // Instancia de la clase Xmen
  const newXmen: Xmen = new Xmen('Wolverine', 'Logan', true, 'protegida');
  newXmen.getFullNameXmen();
})();
