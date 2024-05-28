class Modal extends HTMLElement {
    type
    constructor() {
        super()
        this.type = "open"
    }



    connectedCallback(){
        this.innerHTML = `
        <style>
            .overlay {
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

            .modal{
                background-color: white;
                height: 80%;
                width: 70%;
                border-radius: 12px;
            }
        </style>
        <section class="overlay">
            <div class="modal">
                <button>
                    <img alt="Close icon" src=""/>
                </button>
                <embed src="" type="application/pdf" width=100% height=100%/>
                <p>Modal</p>
            </div>
        </section>
        `
    }
}

window.customElements.define("modal-component", Modal)