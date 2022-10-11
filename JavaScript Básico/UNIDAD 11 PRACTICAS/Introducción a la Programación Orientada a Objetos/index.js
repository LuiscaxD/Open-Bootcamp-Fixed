// Se repite demasiado el codigo para crear varias personas con caracteristicas parecidas

const persona = {
    nombre: "Luis",
    edad: 34,
    isDeveloper: true,
    saludo: function(){
        console.log("Hello");
    }
}

persona.saludo();

const otra_persona = {
    nombre: "Carlos",
    edad: 15,
    isDeveloper: false,
    saludo: function(){
        console.log("Hello");
    }
}

otra_persona.saludo();



// Función factory ahorra repetir codigo
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre (igual en edad y developer)
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hello");
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona);

const nueva_persona_2 = creaPersona("Maria", 44, false);
console.log(nueva_persona_2);