let arrayCartas = [];
var pagina = 1;


document.addEventListener("DOMContentLoaded", () => {


    cargarCartas();

    let botonSiguiente = document.getElementById("siguiente");
    botonSiguiente.addEventListener("click", paginaSiguiente);

    let botonAnterior = document.getElementById("anterior");
    botonAnterior.addEventListener("click", paginaAnterior);

});

async function cargarCartas(){
    let contenedor = document.getElementById("cartas");
    contenedor.innerHTML = "";

    let inicio = 1;
    let fin = 6;

    if (pagina == 2) {
        inicio = 7;
        fin = 12;
    }
    else if (pagina == 3) {
        inicio = 13;
        fin = 18;
    }

    try{


        if(arrayCartas.length == 0)
        {
            let respuesta = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=18");
            
            let datos = await respuesta.json();

            arrayCartas = datos.cards.map(carta => {

                return new Carta(
                    carta.code,
                    carta.value,
                    carta.suit,
                    carta.image
                );
    
            });
        }
        
        console.log(arrayCartas);


        for (let i = inicio; i <= fin; i++) {
        
            contenedor.appendChild(arrayCartas[i].createHtmlElement())
        }

        // arrayCartas.forEach(carta => {

        //     contenedor.appendChild(
        //         carta.createHtmlElement()
        //     );

        // });

    }catch(error){

        console.log(error);

    }


  
}

function paginaSiguiente(){

    if(pagina < 3){
        pagina++;
        cargarCartas();
    }
}

function paginaAnterior() {

    if(pagina > 1){
        pagina--;
        cargarCartas();
    }

}