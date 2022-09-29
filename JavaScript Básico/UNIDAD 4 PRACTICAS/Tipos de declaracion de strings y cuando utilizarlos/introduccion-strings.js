// Strings o (cadenas de caracteres)
let str_sng = "Hola soy un texto con comillas dobles";
let str_dbl = 'Hola soy un texto con comillas simples';

console.log(str_sng);
console.log(str_dbl);

let str_comillas_simples = 'El otro dia mi mamá me dijo: "Hola hijo"';
let str_comillas = "El otro dia mi mamá me dijo: \"Hola hijo\"";
let str_comillas_dobles = "El otro dia mi mamá me dijo: 'Hola hijo'";
let str_comillas_simples_2 = 'El otro dia mi mamá me dijo: \'Hola hijo\'';

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_comillas_simples_2);

// Comillas invertidas (backticks)
let nombre = "Luisca";
let str_backticks = `Hola mi nombre es: ${nombre}`;
console.log(str_backticks);

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`
console.log(plantilla);

// Introducción de variables en html
let libros = ["berserk", "Don quijote", "Leyes del poder"];