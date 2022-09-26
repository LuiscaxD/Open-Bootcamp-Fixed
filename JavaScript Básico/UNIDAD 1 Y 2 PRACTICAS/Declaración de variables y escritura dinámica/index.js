var variable;
let variableLet;


//Las const no cambian de valor
const varConst = "Hola soy una constante";
console.log(varConst)



//La diferencia entre var y let es que "var" afecta a todo el código y "let" solo afecta al bloque donde esté siendo declarada la variable
var a = 1;
console.log(a);

a = 5;
console.log(a)



// Ejemplo 1 de diferencias entre var y let
var variableVAR = "Hola1"

for (var i = 0; i < 3; i++){
    var variableVAR = "Hola2"
}
console.log(variableVAR); //Si cambia su valor a "Hola2" ya que var si tiene influencia en todo el codigo

// Ejemplo 2 de diferencias entre var y let
var variableVAR = "Hola1"

for (var i = 0; i < 3; i++){
    let variableVAR = "Hola2"
}
console.log(variableVAR); //Sigue siendo "Hola1" porque let no modifica su valor ya que esta dentro de un bloque aparte de codigo



// typeof nos dice el tipo de variable que nosotros estemos pasando (en este caso "number")
console.log(typeof 1)