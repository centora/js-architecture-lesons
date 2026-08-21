import { Model } from "./model.js";
import { View } from "./view.js";
export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.model = new Model();
        this.view = new View(this.onSearchFormSubmit, this.onSortList);

        this.emitter.on('SEARCH_CHARACTERS_RESULT', this.onCharactersResult);
        this.emitter.on('SEARCH_HOUSES_RESULT', this.onHousesResult);
        this.emitter.on('SEARCH_SPELLS_RESULT', this.onSpellsResult);

    }


    onSearchFormSubmit = (value) => {
        this.emitter.emit('SEARCH_DATA_BY_VALUE', value);
    }

    onCharactersResult = (characters) => {
        this.view.renderCharacters(characters);
        this.model.setCharacters(characters);
    }

    onHousesResult = (houses) => {
        this.view.renderHouses(houses);
        this.model.setHouses(houses);
    }

    onSpellsResult = (spells) => {
        this.view.renderSpells(spells);
        this.model.setSpells(spells);
    }

    onSortList = (sort, type) => {
        const sortedData = this.model.getSortedData(sort, type);
        if(type === "characters") {
            this.view.renderCharacters(sortedData);
        }
        if(type === "spells") {
            this.view.renderSpells(sortedData);
        }
        if(type === "houses") {
            this.view.renderHouses(sortedData);
        }
            
    }
}