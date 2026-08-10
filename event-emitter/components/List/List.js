export class List {
    constructor(list, items, renderItem) {
        this.list = list;
        this.items = items;
        this.renderItem = renderItem;
    }


    render() {
        this.list.innerHTML = '';

        this.items.forEach(item => {
            const li = document.createElement('li');
            
            this.renderItem(li, item);

            this.list.appendChild(li);
        })
    }
}