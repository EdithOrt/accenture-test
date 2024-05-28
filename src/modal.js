class Card extends HTMLElement {
    type
    constructor() {
        super()
        this.type = "open"
    }



    connectedCallback(){
        this.querySelector("card");
        this.innerHTML = `
        <article class="card">
            <img alt='Edith's photography' /> 
            <section> 
                <div> social media icons </div> 
                <div>
                    <p>Edith Ortiz</p>
                    <p> Front End developer</p> 
                </div>

                <button type="${this.type}">Ver más</button>
            </section> 
        </article>
        `
    }
}

window.customElements.define("card-component", Card)