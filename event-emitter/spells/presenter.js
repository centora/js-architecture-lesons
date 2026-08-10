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
        this.emitter.on('SEARCH_DATA_BY_VALUE', this.onSearchSpells);
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

    onSearchSpells = async(searchValue) => {
        let spells = this.model.getSpells();
        if(spells.length === 0) {
            await this.model.loadSpells();
            spells = this.model.getSpells();
        }

        const searchedSpells = spells.filter((spell) => {
            return spell.spell.toLowerCase().includes(searchValue.toLowerCase()) ||
            spell.use.toLowerCase().includes(searchValue.toLowerCase()) 
        })

        this.emitter.emit('SEARCH_SPELLS_RESULT', searchedSpells);
    }
}