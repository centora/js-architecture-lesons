import { Model } from "./model.js";
import { View } from "./view.js"

export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.model = new Model();
        this.view = new View(this.onLoadCharacters, this.onFavorite);

        this.emitter.on('FILTER_CHARACTERS', this.onFilterCharacters);
        this.emitter.on('SEARCH_DATA_BY_VALUE', this.onSearchCharacters);
        this.emitter.on('FAVORITES_UPDATED', this.onFavoritesUpdated);
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

        this.emitter.emit('SEARCH_CHARACTERS_RESULT', searchedCharacters);
    }

    onFavorite = (character) => {
        this.emitter.emit('TOGGLE_CHARACTER_FAVORITE', character);
    }

    onFavoritesUpdated = (favorites) => {
        let characters = this.model.getCharacters();
        this.view.renderCharacters(characters, favorites);
    }
}


