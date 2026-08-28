export class View {
    constructor(onFavoriteClick) {
        this.app = document.getElementById('root');
        this.favoritesButton = this.app.querySelector('.favorites-button');
        this.favoriteCount = this.app.querySelector('.favorites-count');
        this.favoritesButton.addEventListener('click', onFavoriteClick)
    }

    renderFavoritesCount = (favoritesCount) => {
        this.favoriteCount.textContent = favoritesCount;
    }
}