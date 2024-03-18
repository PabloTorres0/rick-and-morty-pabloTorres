import { LitElement, html, css } from 'lit-element';
import { getData } from '../utils/handreGetData';
import { ifDefined } from 'lit/directives/if-defined.js';

export class TableComponent extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    *{
        font-family: sans-serif;
        font-size: 16px;
    }
    .table-container{
        width: 100vw;
        background:white; 
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
    }
    
    .container{
        border: solid 1px #B5E5F9;
    }
    table{
        color: #006EC1;
        table-layout:fixed;
        border-collapse:collapse;

    }
    thead{
        background:#006EC1;
        color: white;   
    }
    th{
        padding: 6px 30px;
        font-weight: 700;
        font-size: 20px;
    }
    td{
        padding:4px 2rem;
        border-bottom: solid 1px #B5E5F9;
    }
    tbody tr:hover{
        background:#52BCEC;
        color:white;
        transition: all 200ms ease;
    }
    tbody tr{
        cursor:pointer;
    }
    p{
        color:black;
    }
     
    `;

    static get properties () {
        return {
            data:{
                type:Array
            },   
            
            sendData:{
                type: Function
            },

 }
    }

    constructor(){
        super()
        this.data=[]
        this.spanish={
            Alive: 'Vivo',
            unknown: 'Desconocido',
            Dead: 'Muerto',
            Male:'Masculino',
            Female:'Femenino'
        }
    }

    async firstUpdated(){
        this.data = await getData()
        console.log(this.data)
    }
    render() {
        return html`

    <div class='table-container'>
        <section class='container'>
            
            ${this.data.length !== 0 ? html `
                    <table>
                        <thead>
                            <tr>
                                <th>N</td>
                                <th>NOMBRE  </td>
                                <th>STATUS</td>
                                <th>GENERO</td>
                            </tr>
                            
                        </thead>
                        <tbody>
                            ${
                                this.data.map((item,index)=>(
                                    html `
                                    <tr @click=${()=>this.sendData(item)}>
                                        <td>${index+1}</th>
                                        <td>${item.name}</th>
                                        <td>${this.spanish[item.status]}</th>
                                        <td>${this.spanish[item.gender]}</th>
                                    </tr>
                                    `
                                ))
                            }
                        </tbody>
                    </table>` : html `<p>Cargando...</p>`}
        </section>
    </div>
    `;
    }
}
customElements.define('table-component', TableComponent);