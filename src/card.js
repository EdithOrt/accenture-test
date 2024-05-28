import "./button.js"
class Card extends HTMLElement {
    
    constructor() {
        super()
    }

    connectedCallback(){
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
        <style>
            .card {
              background-color: #EEEEEE;
              border-radius: 8px;
              display: flex;
              width: 250px;
              padding: 16px;
              gap: 16px;
            }

            img {
              display: none;
            }

            section{
              display: flex;
              flex-direction: column;
              width: 100%;
            }

            .container-button {
              align-self: flex-end;
              width: 100%;
            }

            .name {
              font-weight: bold;
              margin: 10px 0;
              text-align: center;
            }

            .position {
              margin-top: 0;
              text-align: center;
            }

            .container-buttons {
              display: flex;
              justify-content: flex-end;
              gap: 10px;
            }

            .social-button {
              cursor: pointer;
            }

            .social-button:hover{
              svg path {
                fill: black;
              }
            }

            @media (min-width: 768px) {
              .card {
                gap: 32px;
                width: 400px;
              }

              img {
                display: block;
                width: 150px;
                height: 150px;
                border-radius: 50%;
              }

              .name, .position {
                text-align: left;
              }
            }
        </style>
        <article class="card">
            <img alt="Edith's photography" src="../assets/edith.webp" width=100 height=100/> 
            <section> 
                <div class="container-buttons"> 
                  <a class="social-button" target="_blank" href="https://www.linkedin.com/in/edithort/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1047_253)">
                        <path d="M3 5.21763C3 4.54506 3.55887 4 4.24844 4H18.7516C19.4411 4 20 4.54506 20 5.21763V19.7824C20 20.4549 19.4411 21 18.7516 21H4.24844C3.55887 21 3 20.4549 3 19.7824V5.21763ZM8.25194 18.2311V10.5546H5.70088V18.2311H8.25194ZM6.97694 9.50588C7.86625 9.50588 8.41981 8.91725 8.41981 8.17988C8.40387 7.42656 7.86731 6.85388 6.99394 6.85388C6.12056 6.85388 5.55 7.42763 5.55 8.17988C5.55 8.91725 6.10356 9.50588 6.95994 9.50588H6.97694ZM12.1917 18.2311V13.9439C12.1917 13.7144 12.2087 13.4849 12.2767 13.3213C12.4605 12.8634 12.8802 12.3884 13.5857 12.3884C14.509 12.3884 14.8777 13.0918 14.8777 14.1246V18.2311H17.4287V13.8281C17.4287 11.4694 16.1708 10.3729 14.492 10.3729C13.1384 10.3729 12.5317 11.1166 12.1917 11.6404V11.667H12.1747L12.1917 11.6404V10.5546H9.64169C9.67356 11.2749 9.64169 18.2311 9.64169 18.2311H12.1917Z" fill="#7D7D7D"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1047_253">
                          <rect width="17" height="17" fill="white" transform="translate(3 4)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a> 

                  <a class="social-button" target="_blank" href="https://github.com/EdithOrt">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#7D7D7D"/>
                    </svg>
                  </a>
                </div> 

                <div>
                    <p class="name">Edith Ortiz</p>
                    <p class="position"> Front End developer</p> 
                </div>

                <div class="container-button">
                  <button-component id="open-button"></button-component>
                </div>
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