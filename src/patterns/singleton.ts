// --------------------------------------------------------------------//
// -------------------------- SINGLETON -------------------------------//
// --------------------------------------------------------------------//
(() => {
  // No importa las veces que se instancie, siempre habrá una única instancia
  class User {
    // Generamos una propiedad estática del mismo tipo de la clase
    static instance: User;

    // Generamos el constructor privado
    private constructor(public name: string) {}

    // Método estático
    static callUser(name: string): User {
      if (!User.instance) {
        User.instance = new User(name);
      }
      return User.instance;
    }

    set setName(name: string) {
      this.name = name;
    }
  }

  const newUser: User = User.callUser("Edwin");
  const sameUser: User = User.callUser("Laura"); // esto retornará la primera instancia del objeto
  console.log(sameUser);
})();
