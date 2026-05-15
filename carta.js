class Carta{

    constructor(code, value, suit, imagen){
        if(!code || !value || !suit || !imagen){
            throw Error("Datos invalidos");
        }
        this.code = code;
        this.value = value;
        this.suit = suit;
        this.imagen = imagen;
    }

    toJsonString(){
        return JSON.stringify(this);
    }
    
    static createFromJsonString(json){
    
        let objeto = JSON.parse(json);
    
        return new Carta(
            objeto.code,
            objeto.value,
            objeto.suit,
            objeto.imagen
        );
    }

    createHtmlElement(){

        let div = document.createElement("div");

        div.innerHTML = `
            <h2>${this.code}</h2>
            <img src="${this.imagen}" alt="${this.code}">
            <p>${this.suit}</p>
            <p>${this.value}</p>
        `;

        return div;
    }
}

