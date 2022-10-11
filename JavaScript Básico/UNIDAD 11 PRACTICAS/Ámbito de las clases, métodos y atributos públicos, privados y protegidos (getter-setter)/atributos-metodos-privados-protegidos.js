class Persona{
    // Private -> #
    // Sólo se puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protected -> _
    // Sólo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }

    obtenNombre(){ // Funcion getter -> Nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre
    }

    obtenEdad(){
        return this.#edad
    }

    getEdad(){
        return this.#edad
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Luisca", 19);
persona.saludo();

console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad());
console.log(persona._isDeveloper);

// Getter -> métodos que nos permiten obtenet atributos/métodos privados o protegidos

const edad = persona.getEdad();
console.log(edad);

// Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(15);
console.log(persona.getEdad());

