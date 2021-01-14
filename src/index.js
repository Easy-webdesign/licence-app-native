import './scss/index.scss';
import './scss/fonts.scss';
import './js/core/utils';
import RenderComponent from './js/core/render';
import { AppComponent } from './js/components';

const app = new RenderComponent({
    container: '#root',
    component: [AppComponent]
});

app.render();
