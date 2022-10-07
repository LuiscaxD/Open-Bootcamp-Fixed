const miFuncion = val => {
    if(typeof val === "number"){
        return val * 2;
    }
    // return false
    throw new Error("El valor debe ser de tipo número.");
};

// const elDoble = (miFuncion("xd"));
const numero = "8";

try{
    // Código que puede fallar
    console.log("Está ejecutandose de manera correcta.");
    const doble = miFuncion(numero);
    console.log(doble);
}catch(e){
    // En caso de fallar, quiero que ejecutes
    console.error("ERROR!");
    console.error(`El valor de e es: ${e}`);
}finally{
    console.log("Esto se va a ejecutar haya un error o no");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError

