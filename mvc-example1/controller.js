import { Model } from './model.js';
import { View } from './view.js';
export class Controller {
    constructor () {
        this.view = new View();
        this.model = new Model();
        this.view.loadSpellsButton.addEventListener('click', this.onLoadSpellsButton);
        this.view.hideSpellsButton.addEventListener('click', this.onHideSpellsButton);
        this.view.searchCharacterForm.addEventListener('submit', this.onSearchFormSubmit);
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

    onSearchFormSubmit = async (e) => {
        e.preventDefault();
        const value = this.view.searchCharacterInput.value;
        let characters = await this.model.searchCharactersByValue(value);
        this.view.renderCharacters(characters);

    }}