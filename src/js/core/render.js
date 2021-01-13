import dom from "./dom";


export default class RenderComponent{
    constructor(c){
        this.container = document.querySelector(c.container);
        this.component = c.component;
        this.events = c.events;
    }

    toHtml = (arr = '') => {
        
    }

    initDOMListeners = () => {
        if(!this.events) return;

        this.events.forEach(event => {
            this.container.addEventListener(event, this[this.renameEvent(event)])
        })
    }

    renameEvent = (event) => {
        return 'on' + event[0].toUpperCase() + event.slice(1);
    }
    

    render = () => {
        this.initDOMListeners();

        if(this.component){
            if(this.container.children.length){
                this.component.forEach(component => {
                    component.toHtml();
                    this.container.children[0].append(component.render());
                });
            } else {
                this.component.forEach(component => {
                    component.toHtml();
                    this.container.append(component.render());
                });
            }
            
            return this.container;
        } else {
            return this.container;
        }
        
    }
}

