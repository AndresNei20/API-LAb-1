export enum attribute{
    "name" = "name",

}
class card extends HTMLElement{
    name?: string;

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }
    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML=''
    }

}