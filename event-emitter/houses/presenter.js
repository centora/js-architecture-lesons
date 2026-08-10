import { View } from "./view.js";
import { Model } from "./model.js"
import { Emitter } from "../event-emitter.js";
export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.model = new Model();
        this.view = new View(this.onChooseHouse);

        this.onLoadHouses();
        this.emitter.on('SEARCH_DATA_BY_VALUE', this.onSearchHouses);

    }

    onLoadHouses = async () => {
        let houses = this.model.getHouses();
        if(houses.length === 0) {
            await this.model.loadHouses();
            houses = this.model.getHouses();
        }

        this.view.renderHouses(houses);
    }

    onChooseHouse = (house ) => {
        this.emitter.emit('FILTER_CHARACTERS', house);
    }

    onSearchHouses = async(searchValue) => {
        let houses = this.model.getHouses();
        if(houses.length === 0) {
            await this.model.loadHouses();
            houses = this.model.getHouses();
        }

        const searchedCHouses = houses.filter((house) => {
            return house.house.toLowerCase().includes(searchValue.toLowerCase()) || 
            house.founder.toLowerCase().includes(searchValue.toLowerCase()) 
        })

        this.emitter.emit('SEARCH_HOUSES_RESULT', searchedCHouses);
    }
}