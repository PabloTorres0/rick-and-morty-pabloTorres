import { LitElement, html, css } from 'lit-element';

export class IndexComponent extends LitElement {

    static styles = css`
    :host {
        display: block;
        font-family: sans-serif;
        font-size: 30px;
    }
    *{
        color:white;
    }
    nav{
        height: 5vh;
    }
    footer{
        height: 5vh;
        text-align:right;
        padding: 20px 5rem;;
    }
    section{
        height: 85vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background:white;
    }  
    `; 


    static get properties() {
        return{
            characterData :{
                type: Object
            },
            isModalOpen: {
                type:Boolean
            },
            returnData:{
                type: Function
            },
        }
    }

    constructor(){
        super()
        this.characterData=[]
        this.isModalOpen = false
        this.returnData = (data)=> {
            this.isModalOpen = !this.isModalOpen 
            this.characterData=data
        }
    }

    modalClose = () => {
        this.isModalOpen=false
    }
    
    render() {
        return html`
        <nav>
            BBVA
        </nav>
        <section>
            ${
                this.isModalOpen ? 
                    html`<image-component 
                            .characterData = ${this.characterData} 
                            @modal-event = ${this.modalClose}
                        ></image-component>`:
                    html`<table-component 
                            class='container'  
                            .sendData=${this.returnData}
                        ></table-component>`
            }
        </section>
        <footer>
            <div class='footer-name'>Pablo Torres</div>
        </footer>
        `;
    }
}
customElements.define('index-component', IndexComponent);