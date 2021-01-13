import dom from "../../core/dom";
import RenderComponent from "../../core/render";
import total from "../total";
import props from "./props";


class WrapOptions extends RenderComponent{
    constructor(c){
        super(c);
        this.container = dom.create('ul', c.container);
        this.component = c.component;
    }

    toHtml = () => {
        
        dom.json().then(res => {
            const html = res.map(el => {
                return `
                    <li data-id=${el.id} data-price=${el.price}>
                        <div class="radio"></div>
                        <div class="radio-box">
                            <h3 class="title">License plan #${el.id}</h3>
                            <div class="price">$${el.price} per license</div>
                        </div>
                        
                    </li>
                `
            })
            this.container.innerHTML = html.join(' ');
        })
    }

    onClick = e => {
        const parent = e.target.closest('li');
        const radio = parent.querySelector('.radio');
        const children = e.target.closest('.'+this.container.classList[0]).querySelectorAll('li');

        console.log();

        const state = dom.stateEdit({
            id: +parent.dataset.id,
            priceSelected: +parent.dataset.price,
        })

        

        children.forEach(el => el.querySelector('.radio').classList.remove('active'))
        if(radio) radio.classList.add('active');

        total.toHtml(state)
        
    }
}

export default createComponent(WrapOptions, props)