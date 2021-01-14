import dom from "../../core/dom";
import RenderComponent from "../../core/render";
import total from "../total";
import props from "./props";

class LengthLicenses extends RenderComponent{
    constructor(c = {}){
        super(c);
        this.container = dom.create('div', c.container);
        this.components = c.component;
    }

    toHtml = () => {
        const html = `
            <div class="descr">Number of licenses</div>
            <select name="number" id="number-licenses">
                <option value="10" selected>10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
            </select>
        `
        this.container.innerHTML = html;
    }

    onClick = e => {
        if(e.target.tagName === 'SELECT'){
            const state = dom.stateEdit({
                length: +e.target.value
            })


            total.toHtml(state);
        }
        
    }
}

export default createComponent(LengthLicenses, props);