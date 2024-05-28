class Modal extends HTMLElement {
    constructor() {
        this.isOpen = false;
        super()
    }



    connectedCallback(){
        const display = this.getAttribute('display')
        console.log({display})
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
        <style>
            .backdrop {
                position: absolute;
                height: 100vh;
                width: 100%;
                background: rgba(0,0,0,0.75);
                z-index: 1;
                top: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .backdrop--active{
                display: flex;
            }

            .modal{
                background-color: white;
                height: 80%;
                width: 70%;
                border-radius: 12px;
            }
        </style>
        <section class="backdrop">
            <div class="modal">
                <button>
                    <img alt="Close icon" src=""/>
                </button>

                <slot name="container"></slot>
            </div>
        </section>
        `
    }
}

window.customElements.define("modal-component", Modal)