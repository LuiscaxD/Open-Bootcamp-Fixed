// localStorage.setItem("nombre", "Luisca");

// console.log(localStorage.getItem("nombre"));

// localStorage.setItem("persona", JSON.stringify({nombre: "Luiscaxd", edad: 19}));

// console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify -> convierte un objeto/array en string
// JSON.parse -> convierte un objeto/array convertido a traves de stringify en un objeto de JavaScript

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesion", "Luisca");

/* Cookies */

document.cookie = "nombreCookie=LuiscaCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString();

console.log(document.cookie)
