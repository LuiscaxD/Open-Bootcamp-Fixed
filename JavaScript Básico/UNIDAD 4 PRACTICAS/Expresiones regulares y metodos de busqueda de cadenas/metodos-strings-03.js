// Métodos de cadenas de texto parte 3
// https://regexr.com
let texto_largo = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

console.log(texto_largo.match(/dummy/g));

// ¿Existe la palabra dentro del texto?
console.log(texto_largo.includes("dummy"));

// Si un texto empieza con una palabra
console.log(texto_largo.startsWith("is"));

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("1500s"));

