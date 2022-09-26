//Tipos primitivos

//number
4;

//String
"Hola Mundo";

//Boolean
true;
false;

//nuul y undefined
null;
undefined;

//null, undefined, false, 0 ==> Todas son falsy (lo unico comun entre ellas porque todas son de diferente tipo)
//No cumple
if(null, 0, undefined, false){
    console.log("Cumple")
}else{
    console.log("No cumple")
}