const boton = document.querySelector("#btn");

// console.log(boton);

boton.addEventListener("click", () => {

    // alert("Se ha hecho click");

    // confirm("Estás deacuerdo?") && console.log("Ok");    // SOLO GESTIONA RESPUESTA POSITIVA

    // confirm("Estás deacuerdo?") ? console.log("OK") : console.log("NO");    // GESTIONA RESPUESTA NEGATIVA Y POSITIVA

    // GESTIONA NEGATIVA Y POSITIVA PERO CON MAS CODIGO (if/else)
    const respuesta = confirm("Seguro?")
    if(respuesta){
        console.log("Estas deacuerdo")
    }else{
        console.log("No estas deacuerdo")
    }
})

const botonInfo = document.querySelector("#info")

botonInfo.addEventListener("click", () => {
    nombre = prompt("Cuál es tu nombre?")
    if(nombre){
        alert(`¡Hola ${nombre}!`)
    }else{
        alert("Debes introducir tu nombre correctamente.")
    }
})

const lista = [{
    nombre: "Luis",
    edad: 19,
}, {
    nombre: "Gorka",
    edad: 34
},{
    nombre: "Maria",
    edad: 30
}]

// console.log(lista);
console.table(lista);