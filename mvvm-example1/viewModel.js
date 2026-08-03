import { Model } from './model.js';
import { View } from './view.js';
export class ViewModel {
    constructor (model) {
        this.model = model;
        this.spells = [];
        this.characters = [];

        this.listeners = [];

    }
    subscribe = (listener) => {
        this.listeners.push(listener);
        console.log('subscribe')
    }

    notify = () => {
        this.listeners.forEach(listener => listener())
        console.log('notify');
    }

    loadSpells = async() => {
        console.log('Load Spells')
        if (this.spells.length === 0) {
            await this.model.loadSpells();
            this.spells = this.model.getSpells();
        }

        this.notify();
    }
    onHideSpellsButton = () => {
        this.view.hideSpells()
    }

    onSearchFormSubmit = async (value) => {
        let characters = await this.model.searchCharactersByValue(value);
        this.view.renderCharacters(characters);

    }}