import { Model } from "./model.js";
export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.model = new Model();

        this.emitter.on('TOGGLE_CHARACTER_FAVORITE', this.onToggleFavorite);

        this.onLoadFavorites();
    }


    onToggleFavorite = (character) => {
        this.model.toggleFavorite(character);
        const updatedFavorites = this.model.getFavorites();
        this.emitter.emit('FAVORITES_UPDATED', updatedFavorites)
    }

    onLoadFavorites = () => {
        console.log('onLoadFavorites')
        const favorites = this.model.getFavorites();
        this.emitter.emit('FAVORITES_UPDATED', favorites);
    }
}