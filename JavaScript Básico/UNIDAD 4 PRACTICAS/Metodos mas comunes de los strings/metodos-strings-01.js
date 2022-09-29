// Métodos mas utilizados con cadenas de caracteres

// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice(), substring(), substr()
let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5,10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str); //Obsoleto

// Reemplazar parte del contenido de una cadena de texto
let texto_largo1 = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

console.log(texto_largo1.replace("dummy", "tonto")); //Reemplaza dummy por tonto pero solo la primera instancia no todas

let texto_largo2 = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

console.log(texto_largo2.replace(/dummy/g, "tonto")); //Reemplaza dummy por tonto pero en este caso si reemplaza todas las instancias por el /g