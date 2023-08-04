import { Attribute } from "./components/Card/Card";
import "./components/export"
import { AppCard } from "./components/export";
import { pokeApi } from "./components/utils/fetch";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }


    async connectedCallback() {
        const action = await pokeApi();
    }

    render(action:any) {
        action.personajes.forEach((data:any)=>{
            const pokeCard = this.ownerDocument.createElement(
                "app-card") as AppCard;
                pokeCard.setAttribute(Attribute.name, data.name);
               pokeCard.setAttribute(Attribute.number, data.number);
                pokeCard.setAttribute(Attribute.imagen, data.image);
                this.shadowRoot?.appendChild(pokeCard);

        })
        
    }
}


customElements.define('app-container', AppContainer)