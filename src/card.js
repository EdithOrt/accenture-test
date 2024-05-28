class Card extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback(){
        this.innerHTML = "<h1>Card</h1>"
    }
}

window.customElements.define("card-component", Card)