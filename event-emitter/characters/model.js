import { API_URL } from "../constsnts.js";
export class Model {
    constructor () {
        this.characters = []
    }

    getCharacters  = () =>  {
        return this.characters;
    }

    loadCharacters = async () => {
        const response = await fetch(`${API_URL}characters`);
        this.characters  = await response.json();
    }

    // searchCharactersByValue = async (value) => {
    //     const response = await fetch(`${this.API_URL}characters?search=${value}`);
    //     const data = await response.json();
    //     return data;
    // }
}