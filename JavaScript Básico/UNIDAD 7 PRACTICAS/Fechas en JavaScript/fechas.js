// Trabajando con fechas
const fecha = new Date();

console.log(fecha);

// Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(2003, 3, 12);
console.log(fecha2);

const fecha3 = new Date(1);
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:14");
console.log(fecha4);

console.log(fecha > fecha2);

const fecha5 = new Date(2003, 3, 12);
console.log(fecha5);

console.log(fecha2 === fecha5); // ERROR - No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); // OK - Esta es la forma de comparar la igualdad entre fechas

////////// Obtener el dia, el mes y el año de una fecha
// Obtener el dia -getDate()
console.log(fecha2.getDate());

// Obtener el mes -getMonth()
console.log(fecha2.getMonth() + 1);

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear());

// .toLocalDateString
console.log(fecha2.toLocaleDateString("en-GB"));