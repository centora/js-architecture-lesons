import { Model } from "./model.js";
import { View } from "./view.js";
export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.model = new Model();
        this.view = new View(this.onRemoveFavorite);

        this.emitter.on('TOGGLE_CHARACTER_FAVORITE', this.onToggleFavorite);
        this.emitter.on('OPEN_FAVORITES', this.onOpenFavorites)
        this.emitter.on('FAVORITES_UPDATED', this.onFavoritesUpdated);
    
        this.onLoadFavorites();
    }


    onToggleFavorite = (character) => {
        this.model.toggleFavorite(character);
        const updatedFavorites = this.model.getFavorites();
        this.emitter.emit('FAVORITES_UPDATED', updatedFavorites)
    }

    onLoadFavorites = () => {
        const favorites = this.model.getFavorites();
        this.emitter.emit('FAVORITES_UPDATED', favorites);
    }

    onOpenFavorites = () => {
        this.view.openModal();
    }


    onRemoveFavorite = (character) => {
        this.emitter.emit('TOGGLE_CHARACTER_FAVORITE', character);
    }

    onFavoritesUpdated = (favorites) => {
        this.view.renderFavorites(favorites);
    }

}