export class Model {
    constructor() {
        this.characters= [];
        this.spells= [];
        this.houses= [];
    }

    getCharacters = () => {
        return this.characters;
    }

    setCharacters = (characters) => {
        this.characters = characters
    }

    setHouses = (houses) => {
        this.houses = houses;

    }

    setSpells = (spells) => {
        this.spells = spells;
    }

    getSortedData = (sort, type) => {
        let data = [];

        if(type === 'characters') {
            data = this.characters;
        }

        if(type === 'spells') {
            data = this.spells;
        }

        if(type === 'houses') {
            data = this.houses;
        }

        data.sort((a,b) => {
            const sortMulti = sort === 'up' ? 1 : -1;
            const aa = a.house || a.spell || a.fullName;
            const bb = b.house || b.spell || b.fullName;

            return aa > bb ? sortMulti : -1 * sortMulti;
        })

        return data;
    }
}