// Casos especificos - break, continue
let lista = [1,2,3,4,5,6,7,8];

for(let i = 0; i < lista.length; i++){
    if(lista[i] === 3){
        continue;
    }

    var j = 50;
    console.log(lista[i]);

    if(lista[i] > 5){
        break;
    }
}

// Cuál es el ámbito de un bucle
console.log(j) // Se muestra porque es variable global y no solo let
console.log(i) // Error: no se muestra porque es una vairable let local y no una var global

