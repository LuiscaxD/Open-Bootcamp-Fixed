// Cómo unir dos listas .concat(lista2)
const lista1 = ["Hola", 2, false, null];
const lista2 = ["Adiós", 8, true, undefined];

console.log(lista1.concat(lista2));
console.log(lista1);

const lista3 = lista1.concat(lista2);
console.log(lista3);

// Cómo unir dos listas con el factor de propagación
console.log(...lista3);

const lista4 =  [...lista1, ...lista2];
console.log(lista4);

// ERROR!! Mal entendido el cooncepto del factor de propagación
const lista5 = [lista1, lista2];
console.log(lista5);