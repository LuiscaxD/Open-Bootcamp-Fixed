// Comparaciones

/* */

// Igualdad
// == solo compara el valor
// === comparan el valor y el tipo
let a = 5;
let b = 5;

if(a==b){
    console.log("A es igual a B - Débil");
}

if(a===b){
    console.log("A es igual a B - Fuerte");
}

/* */

// Desigualdad
let c = 4;
let d = "4";

if(c != d){
    console.log("No son iguales - Débil");
}

if(c !== d){
    console.log("No son iguales - FUerte");
}

/* */

// Mayor que y menor que
let max = 10;
let min = 10;

if(max > min){
    console.log("max es mayor que min");
}

if(max >= min){
    console.log("max es mayor o igual a min")
}

if(min < max){
    console.log("min es menor que max");
}

if(min <= max){
    console.log("min es menor o igual a max")
}
