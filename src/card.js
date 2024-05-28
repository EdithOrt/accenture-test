import "./button.js"
class Card extends HTMLElement {
    
    constructor() {
        super()
    }

    connectedCallback(){
        const type = "open"

        const modal = document.querySelector('modal-component');
        console.log({modal})

        this.innerHTML = `
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

                <button-component type=${type}></button-component>
            </section> 
        </article>
        `
    }
}

window.customElements.define("card-component", Card)