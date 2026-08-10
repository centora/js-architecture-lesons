import { Model } from "./model.js";
import { View } from "./view.js"

export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.model = new Model();
        this.view = new View(this.onLoadCharacters);

        this.emitter.on('FILTER_CHARACTERS', this.onFilterCharacters);
        this.emitter.on('SEARCH_CHARACTERS', this.onSearchCharacters)
    }
    onLoadCharacters = async () => {
        let characters = this.model.getCharacters();
        if(characters.length === 0) {
            await this.model.loadCharacters();
            characters = this.model.getCharacters();
        }

        this.view.renderCharacters(characters);

    }

    onFilterCharacters = async (house) => {
        let characters = this.model.getCharacters();
        if(characters.length === 0) {
            await this.model.loadCharacters();
            characters = this.model.getCharacters();
        }
        const filteredCharacters = characters.filter(character => character.hogwartsHouse === house);

        this.view.renderCharacters(filteredCharacters);
    }

    onSearchCharacters = async(searchValue) => {
        let characters = this.model.getCharacters();
        if(characters.length === 0) {
            await this.model.loadCharacters();
            characters = this.model.getCharacters();
        }

        const searchedCharacters = characters.filter((character) => {
            return character.fullName.toLowerCase().includes(searchValue.toLowerCase())
        })

        this.view.renderCharacters(searchedCharacters);
    }
}


