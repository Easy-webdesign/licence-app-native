import dom from '../../core/dom';
import RenderComponent from '../../core/render';
import props from './props';

class AppComponent extends RenderComponent{
    constructor(c){
        super(c);
        this.container = dom.create('div', c.container, 1, 2);
        this.component = c.components;
    }
}

export default createComponent(AppComponent, props);