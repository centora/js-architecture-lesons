import { Model } from './model.js';
import { View } from './view.js';
export class Controller {
    constructor () {
        this.view = new View(
            this.onLoadSpellsButton,
            this.onHideSpellsButton,
            this.onSearchFormSubmit);
        this.model = new Model()
    }

    onLoadSpellsButton = async () => {
        let spells = this.model.getSpells();
        if(spells.length === 0) {
            await this.model.loadSpells();
            spells = this.model.getSpells();
        }

        this.view.renderSpells(spells)
    }
    onHideSpellsButton = () => {
        this.view.hideSpells()
    }

    onSearchFormSubmit = async (value) => {
        let characters = await this.model.searchCharactersByValue(value);
        this.view.renderCharacters(characters);

    }}