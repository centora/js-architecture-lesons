import { Model } from './model.js';
import { View } from './view.js';
export class Presenter {
    constructor (emitter) {
        this.view = new View(
            this.onLoadSpellsButton,
            this.onHideSpellsButton,
            this.onSearchFormSubmit);
        this.model = new Model()

        this.emitter = emitter;
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

    onSearchFormSubmit = (value) => {
        this.emitter.emit('SEARCH_CHARACTERS', value);
    }}