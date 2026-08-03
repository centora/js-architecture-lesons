export class Model {
    API_URL= 'https://potterapi-fedeperin.vercel.app/uk/';
    constructor () {
        this.spells = []
    }

    getSpells  = () =>  {
        return this.spells;
    }

    loadSpells = async () => {
        const response = await fetch(`${this.API_URL}spells`);
        const data = await response.json();
        this.spells = data;
    }

    searchCharactersByValue = async (value) => {
        const response = await fetch(`${this.API_URL}characters?search=${value}`);
        const data = await response.json();
        return data;
    }
}