export class Model {
    constructor() {
        this.storage = window.localStorage;
        this.favorites = JSON.parse(this.storage.getItem('favorites')) || [];
    }

    getFavorites = () => {
        return this.favorites;
    }

    addFavorite = (character) => {
        this.favorites.push(character)
    }

    removeFavorite = (character) => {
        this.favorites = this.favorites.filter(char => char.index !== character.index);
    }

    isFavorite = (character) => {
        return this.favorites.some(char => char.index === character.index);
    }

    toggleFavorite = (character) => {
        if(!this.isFavorite(character)) {
            this.addFavorite(character)
        } else {
            this.removeFavorite(character);
        }
        console.log('this.favorites', this.favorites);
        this.saveFavorites();
    }

    saveFavorites = () => {
        this.storage.setItem('favorites', JSON.stringify(this.favorites))
    }

}