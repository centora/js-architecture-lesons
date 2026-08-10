import { Model } from "./model.js";
import { View } from "./view.js";
export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.model = new Model();
        this.view = new View(this.onSearchFormSubmit);

        this.emitter.on('SEARCH_CHARACTERS_RESULT', this.onCharactersResult);
        this.emitter.on('SEARCH_HOUSES_RESULT', this.onHousesResult);
        this.emitter.on('SEARCH_SPELLS_RESULT', this.onSpellsResult);

    }


    onSearchFormSubmit = (value) => {
        this.emitter.emit('SEARCH_DATA_BY_VALUE', value);
    }

    onCharactersResult = (characters) => {
        this.view.renderCharacters(characters);
    }

    onHousesResult = (houses) => {
        this.view.renderHouses(houses);
    }

    onSpellsResult = (spells) => {
        this.view.renderSpells(spells);
    }
}