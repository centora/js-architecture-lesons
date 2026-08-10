import { View } from "./view.js";
import { Model } from "./model.js"
import { Emitter } from "../event-emitter.js";
export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.model = new Model();
        this.view = new View(this.onChooseHouse);

        this.onLoadHouses();

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
}