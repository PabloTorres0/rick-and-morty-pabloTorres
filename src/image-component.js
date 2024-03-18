import { LitElement, html, css } from 'lit-element';

export class ImageComponent extends LitElement {

    static styles = css`
    :host {
        display: block;
       
    }
    button{
        display:block;
        background: #006EC1;
        color:white;
        border-radius: 5px;
        border: transparent;
        padding: 5px;
        font-size:25px;
        width:100%;
        margin-top:2    rem;
    }
    button:hover{
        background:#52BCEC;;
        color:white;
        transition: all 400ms ease;
    }
    img{
        border-radius: 2rem;
        margin-bottom: 1rem;
        width: 20rem;
    }
    h3{
        color:#006EC1; 
        text-align:center;
        text-transform: uppercase;
    }
    section {
        border: solid 2px #52BCEC;
        border-radius: 3rem;
        padding: 3rem;
    }
    .img-container{
        display:flex;
        justify-content:center;
    }
    `;

    static get properties(){
        return{
            characterData:{
                type: String
            },
        }
    }


    dispatchCloseModal() {
        this.dispatchEvent(new CustomEvent("modal-event", { 
        bubbles: true,
        detail: 'cerrar modal'}));
    }

    constructor(){
        super()
        this.characterData={}
    }
    render() {
        return html`
        <section>
            <h3>
                ${this.characterData?.name}
            </h3>
            <div class='img-container'>
                <img src=${this.characterData?.image}>
            </div>
            <button @click = ${this.dispatchCloseModal} >REGRESAR</button>
        </section>
        `;
    }
}
customElements.define('image-component', ImageComponent);