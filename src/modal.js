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
                left: 0;
                align-items: center;
                justify-content: center;
                display: none;
            }

            :host([open]) .backdrop{
                display: flex;
            }

            .modal{
                background-color: white;
                height: 90%;
                width: 70%;
                border-radius: 12px;
            }
            
            .container-button{
                display: flex;
                justify-content: flex-end;
                padding: 16px 10px 0;
            }

            #close-button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                

                svg{
                    width: 30px;
                    height: 30px;
                }
            }

            #close-button:hover svg path{
                fill: #7D7D7D;
            }
        </style>
        <section class="backdrop" id="backdrop">
            <div class="modal" id="container">
                <div class="container-button">
                  <button id="close-button">
                    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M208.49 191.51C210.744 193.764 212.011 196.822 212.011 200.01C212.011 203.198 210.744 206.256 208.49 208.51C206.236 210.764 203.178 212.031 199.99 212.031C196.802 212.031 193.744 210.764 191.49 208.51L128 145L64.4901 208.49C62.2357 210.744 59.1782 212.011 55.9901 212.011C52.8019 212.011 49.7444 210.744 47.4901 208.49C45.2357 206.236 43.9692 203.178 43.9692 199.99C43.9692 196.802 45.2357 193.744 47.4901 191.49L111 128L47.5101 64.49C45.2557 62.2357 43.9892 59.1781 43.9892 55.99C43.9892 52.8019 45.2557 49.7443 47.5101 47.49C49.7644 45.2357 52.8219 43.9692 56.0101 43.9692C59.1982 43.9692 62.2557 45.2357 64.5101 47.49L128 111L191.51 47.48C193.764 45.2257 196.822 43.9592 200.01 43.9592C203.198 43.9592 206.256 45.2257 208.51 47.48C210.764 49.7343 212.031 52.7919 212.031 55.98C212.031 59.1681 210.764 62.2257 208.51 64.48L145 128L208.49 191.51Z" fill="black"/>
                    </svg>
                  </button>
                </div>

                <slot name="container"></slot>
            </div>
        </section>
        `

        const closeButton = this.shadowRoot.getElementById('close-button');
        const backdrop = this.shadowRoot.getElementById('backdrop');
        const container = this.shadowRoot.getElementById('container');

        if (closeButton && backdrop) {
            // close modal with close button
            closeButton.addEventListener('click', this.close.bind(this));
            // close modal with overlay
            backdrop.addEventListener('click', this.close.bind(this));
            // prevent clicks inside the modal content from propagating to the overlay
            container.addEventListener('click', e => e.stopPropagation());
            // close modal when press ESC key
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