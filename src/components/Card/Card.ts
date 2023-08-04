class AppCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const figure = this.ownerDocument.createElement('figure')

        const name = this.ownerDocument.createElement('h2');
        name.textContent = "waiting name"
        figure.appendChild(name)
        const pokeDex = this.ownerDocument.createElement('h3')
        figure.appendChild(pokeDex)
        pokeDex.textContent = "waiting number of pokeDex"
        const pokeImg = this.ownerDocument.createElement('img')
        
        figure.appendChild(pokeImg)

        this.shadowRoot?.appendChild(figure)

    }
}

customElements.define('app-card', AppCard)