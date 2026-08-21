export class Model {
    constructor() {
        this.characters= [];
        this.spells= [];
        this.houses= [];
    }

    setCharacters = (characters) => {
        this.characters = characters
        console.log(characters);
    }

    setHouses = (houses) => {
        this.houses = houses;
        console.log(houses);

    }

    setSpells = (spells) => {
        this.spells = spells;
        console.log(spells);
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