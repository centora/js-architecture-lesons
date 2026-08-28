import { View } from './view.js'
export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.view = new View(this.onFavoriteClick);
        this.emitter.on('FAVORITES_UPDATED', this.onFavoritesUpdated);
    }

    onFavoritesUpdated = (favorites) => {
        this.view.renderFavoritesCount(favorites.length);
    }

    onFavoriteClick = () => {
        this.emitter.emit('OPEN_FAVORITES');
        console.log('open modal');
    }
}