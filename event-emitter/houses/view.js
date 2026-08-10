import { List } from "../components/List/List.js";
export class View {
    constructor(onChooseHouse) {
        this.app = document.querySelector('#root');
        this.housesList = this.app.querySelector('.houses-list');

        this.onChooseHouse = onChooseHouse;
    }

    renderHouseItem = (li, house) => {
            const houseButton = document.createElement('button');
            houseButton.innerText = `${house.emoji} - ${house.house}`;
            houseButton.addEventListener('click', () => {
                this.onChooseHouse(house.house);
            })
            li.appendChild(houseButton);
            
            const houseDescription = document.createElement('span');
            houseDescription.textContent = ` - ${house.founder}`
            
            li.appendChild(houseDescription);
        }

    renderHouses = (houses) => {
        const list = new List(this.housesList, houses, this.renderHouseItem);

        list.render();
    }
}

