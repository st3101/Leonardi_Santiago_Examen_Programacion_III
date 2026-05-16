document.addEventListener("DOMContentLoaded", () => {

    mostrarCartasGuardadas();

    let ordenar = document.getElementById("ordenar");
    ordenar.addEventListener("click",ordenarPorValor);

});


function mostrarCartasGuardadas() {

    let cartasGuardadas = JSON.parse(
        localStorage.getItem("cartas")
    );

    crearCarta(cartasGuardadas);

}

function ordenarPorValor() {

    let cartas = JSON.parse(localStorage.getItem("cartas"));

    cartas.sort((a, b) => a.value - b.value);

    console.log(cartas);
    crearCarta(cartas);
}

function crearCarta(cartas) {

    let contenedor = document.getElementById("cartas-guardadas");
    contenedor.innerHTML = "";


    if (cartas != null) {
        cartas.forEach(carta => {

            let nuevaCarta = new Carta(
                carta.code,
                carta.value,
                carta.suit,
                carta.imagen
            );

            contenedor.appendChild(nuevaCarta.createHtmlElementGuardado());

        });

    } else {
        console.log("No hay cartas guardadas!");
    }
}