class Modal extends HTMLElement {
    constructor() {
        super()
        this.isOpen = false;
    }



    connectedCallback(){
        console.log({isOpen: this.isOpen})
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
        <style>
            :host .backdrop {
                position: absolute;
                height: 100vh;
                width: 100%;
                background: rgba(0,0,0,0.75);
                z-index: 1;
                top: 0;
                align-items: center;
                justify-content: center;
                display: none;
            }

            :host([open]) .backdrop{
                display: flex;
            }

            .modal{
                background-color: white;
                height: 80%;
                width: 70%;
                border-radius: 12px;
            }
        </style>
        <section class="backdrop" id="backdrop">
            <div class="modal" id="container">
                <button id="close-button">
                    <img alt="Close icon" src=""/>
                </button>

                <slot name="container"></slot>
            </div>
        </section>
        `

        const closeButton = this.shadowRoot.getElementById('close-button');
        const backdrop = this.shadowRoot.getElementById('backdrop');
        const container = this.shadowRoot.getElementById('container');

        if (closeButton && backdrop) {
            closeButton.addEventListener('click', this.close.bind(this));
            backdrop.addEventListener('click', this.close.bind(this))
            container.addEventListener('click', e => e.stopPropagation());
            document.addEventListener('keydown', this.handleKeydown.bind(this));
          }
    }    

    open() {
      this.setAttribute('open', '');
    }

    close() {
        this.removeAttribute('open');
        this.dispatchEvent(new Event('close'));
      }

    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.close();
      }
    }
}

window.customElements.define("modal-component", Modal)