import "./components/export"
import { pokeApi } from "./components/utils/fetch";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        this.render()
        await pokeApi();
    }

    render() {
        const appCard = this.ownerDocument.createElement('app-card');
        this.shadowRoot?.appendChild(appCard);
    }
}


customElements.define('app-container', AppContainer)