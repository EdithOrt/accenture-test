import "./button.js"
class Card extends HTMLElement {
    
    constructor() {
        super()
    }

    connectedCallback(){
        const type = "open"

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
        <style>
            .card{
                background-color: #EEEEEE;
                border-radius: 8px;
                display: flex;
                width: 400px;
                padding: 16px;
            }
        </style>
        <article class="card">
            <img alt="Edith's photography" /> 
            <section> 
                <div> social media icons </div> 
                <div>
                    <p>Edith Ortiz</p>
                    <p> Front End developer</p> 
                </div>

                <button-component type=${type} id="open-button"></button-component>
            </section> 
        </article>
        `
        this.shadowRoot.getElementById('open-button').addEventListener('click', this.openModal.bind(this))
    }

    openModal() {
        const modal = document.querySelector('modal-component');
        if (modal) {
          modal.open();
        }
      }
}

window.customElements.define("card-component", Card)