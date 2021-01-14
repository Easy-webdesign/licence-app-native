import dom from "../../core/dom";
import RenderComponent from "../../core/render";
import props from "./props";

class Total extends RenderComponent{
    constructor(c){
        super(c);
        this.container = dom.create('div', c.container)
    }

    toHtml = (state = dom.stateEdit()) => {
        const html = `
            <div class="price-box">
                <h3 class="title">Total:</h3>
                <h3 class="price">$${state.priceTotal}</h3>
                <span>us</span>
            </div>
            <button class="buy-now">Buy now</button>
            <div class="subtitle">${!state.id ? 'Please choose a plan' : 'Selected plan: #' + state.id}</div>
        `
        this.container.innerHTML = html;
    }
}

export default createComponent(Total, props);