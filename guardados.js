document.addEventListener("DOMContentLoaded", () => {


    mostrarCartas();

});


function mostrarCartas(){

    let cartasGuardadas = JSON.parse(
        localStorage.getItem("cartas")
    );

    let contenedor = document.getElementById("cartas-guardadas");
    contenedor.innerHTML = "";


    if(cartasGuardadas != null){
        cartasGuardadas.forEach(carta => {

            let nuevaCarta = new Carta(
                carta.code,
                carta.value,
                carta.suit,
                carta.imagen
            );
    
            contenedor.appendChild(
                nuevaCarta.createHtmlElement()
            );

        });
    
    }else{
        console.log("No hay cartas guardadas!");
    }

}