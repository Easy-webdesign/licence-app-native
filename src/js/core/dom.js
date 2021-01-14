const dom = {
    state: {
        id: null,
        length: 10, 
        priceSelected: 0,
        priceTotal: 0,
        descr: ''
    }
}

dom.create = (sel, cls, n1 = '', n2 = '') => {
    if(!sel || !cls) return;
    const classes = cls.split(',');
    const temp =  classes.map(el => {
        const elem = document.createElement(sel)
        elem.classList.add(el.trim().replace(/\./, ''))
        return elem;
    })
    if(n1, n2){
        temp[n1-1].append(temp[n2-1]);
        return temp[n1-1];
    } else {
        return temp[0];
    }
}

dom.json = async (data = 'data.json') => {
    const res = await fetch('./data/' + data)
    return res.json();
}

dom.stateEdit = function(st = null){
    const state = this.state;
    const priceTotal = st ? (st.priceSelected || this.state.priceSelected) * (st.length || this.state.length) : this.state.length * this.state.priceSelected;
    console.log(priceTotal);
    
    this.state = {...state, ...st, priceTotal}
    return this.state
}





export default dom;