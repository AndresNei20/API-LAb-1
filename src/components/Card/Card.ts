
export enum Attribute {
    "name" = "name",
    "number" = "number",
    "imagen" = "imagen",
}

class AppCard extends HTMLElement {
    name?: string;
    number?: string;
    imagen?: string;



    static get observedAttributes() {
        const attributes: Record<Attribute, null> = {
            name: null,
            number: null,
            imagen: null,
        };
        return Object.keys(attributes)
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }
    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(
        propName: Attribute,
        _:string | undefined,
        newValue: string | undefined,
        
        ){
            switch (propName) {
                default:
                this[propName] = newValue;
                break;}
        
            this.render();
        
        }

    render() {

        if(this.shadowRoot) {
            this.shadowRoot.innerHTML=``
    
            this.shadowRoot.innerHTML+= `
            <link rel="stylesheet" href="../src/components/Card/Card.css">
            <section id="section">
            <ul>
            
            <h1>Name: ${this.name}</h1>
            <h2>#  ${this.number}</h2>
            <img src="${this.imagen}"></img>
            
            </ul>
            
            
            </section>
            `;
        }

    }
}

customElements.define('app-card', AppCard)
export default AppCard