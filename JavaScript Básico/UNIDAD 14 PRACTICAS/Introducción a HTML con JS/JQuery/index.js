// $(selector).acción();
// $("h1").hide();

// Se realiza primero esto para que nos corra el jquery al momento en que nuestro archivo html esté completamente cargado y no surjan problemas de "undefined" y derivados.
$(document).ready(() => {
    // Selectores:
    // id="el-1" => "#el-1"
    // class="el-1" => ".el-1"
    
    $(".hide-btn").click(() => {
        console.log("Ocultando");
        // $("h1").hide();  //Para ocultar rapido sin animacion
        $("h1").fadeOut();  //Para ocultar con animacion de fade
    })

    $(".show-btn").click(() => {
        console.log("Mostrando");
        // $("h1").show();  //Para mostrar rapido sin animacion 
        $("h1").fadeIn();   //Para mostrar con animacion de fade
    })

    // Seleccionando algun elemento de la lista desordenada (ul) con click ("dblclick" sirve para lo mismo pero con doble click) nos cambiara de color segun la opcion seleccionada.
    $("#el-1").click(() => {
        $("h1").css({color: "red"})
    })
    $("#el-2").click(() => {
        $("h1").css({color: "blue"})
    })
    $("#el-3").click(() => {
        $("h1").css({color: "green"})
    })
    $("#el-4").click(() => {
        $("h1").css({color: "black"})
    })

    $(".new-element").click(() => {
        /* 
        Para añadir un nuevo elemento a la lista desordenada (ul)

        $("ul").append("<li>New Element</li>")
        */

        // Para añadir un nuevo elemento a la lista desordenada (ul) al principio de la lista
        $("ul").prepend("<li>New Element</li>")
    })


    // Para que los elementos de la lista desordenada (ul) cambien de color a segun su opcion si el mouse esta encima de ellos y cuando no este encima vuelvan al color negro

    // Rojo
    $("#el-1").mouseenter((elem) => {
        elem.target.style.color = "red"
    })

    $("#el-1").mouseleave((elem) => {
        elem.target.style.color = "black"
    })

    // Azul
    $("#el-2").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $("#el-2").mouseleave((elem) => {
        elem.target.style.color = "black"
    })

    // Verde
    $("#el-3").mouseenter((elem) => {
        elem.target.style.color = "green"
    })

    $("#el-3").mouseleave((elem) => {
        elem.target.style.color = "black"
    })

})