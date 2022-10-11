class Persona {
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const nueva_persona = new Persona("Luis", 19, true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60; // Inicializando una variable
console.log(typeof numero);
let persona_2 = new Persona("Maria", 34, false); // Instanciar
console.log(persona_2 instanceof Persona);

// instanceof -> similar a typeof pero para clases