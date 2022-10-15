const f = document.getElementById("formulario");

console.log(f);

// Para cuando se envie el formulario primero se pase por pantalla la informacion del evento submit y despues evite que se ejecute el comportamiento por defecto
f.addEventListener("submit", evento => {
    console.log(evento);
    evento.preventDefault();
})

