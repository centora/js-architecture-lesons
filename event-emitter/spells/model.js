import { API_URL } from "../constsnts.js";
export class Model {
    constructor () {
        this.spells = []
    }

    getSpells  = () =>  {
        return this.spells;
    }

    loadSpells = async () => {
        const response = await fetch(`${API_URL}spells`);
        this.spells = await response.json();
    }
}