class Button extends HTMLElement { 
    constructor() {
        super()
    }

    connectedCallback(){
        this.querySelector("card");
        this.innerHTML = `
        <style>
          button {
              background-color: #7D7D7D;
              color: white;
              border: none;
              padding: 12px 24px;
              cursor: pointer;
              border-radius: 50px;
              font-weight: bold;
              text-transform: uppercase;
              width: 100%;
          }

          button:hover{
            background-color: black;
            color: white;
          }
        </style>
        <button> 
        Ver más
        </button>
        `
    }
}

window.customElements.define("button-component", Button)