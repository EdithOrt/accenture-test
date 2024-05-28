class Button extends HTMLElement { 
    constructor() {
        super()
        const type = this.getAttribute('type')
        console.log(type)
    }

    connectedCallback(){
        this.querySelector("card");
        this.innerHTML = `
        <button> 
        Ver más
        </button>
        `
    }
}

window.customElements.define("button-component", Button)