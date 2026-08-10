import { API_URL } from "../constsnts.js";
export class Model {
    constructor() {
        this.houses = [];
    }

    getHouses = () => {
        return this.houses;
    }

    loadHouses = async() => {
        const response = await fetch(`${API_URL}houses`);
        this.houses = await response.json();
    }
}