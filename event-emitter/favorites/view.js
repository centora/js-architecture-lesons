import { List } from '../components/List/List.js'
export class View {
    constructor (onRemoveFavorite) {
        this.app = document.getElementById('root');
        this.favoritesModal = this.app.querySelector('.favorites-modal');
        this.favoritesList = this.app.querySelector('.favorites-list');
        this.favoritesModalOverlay = this.app.querySelector('.favorites-modal-overlay');
        this.closeButton = this.app.querySelector('.favorites-modal-close');
        this.favoritesModalOverlay.addEventListener('click', this.closeModal);
        this.closeButton.addEventListener('click', this.closeModal)
        this.onRemoveFavorite = onRemoveFavorite;
        document.addEventListener('keydown', this.onKeyDown)
    }

    openModal = () => {
        this.favoritesModal.classList.remove('hidden');
    }

    closeModal = () => {
        this.favoritesModal.classList.add('hidden')
    }

    renderFavoriteItem = (li, character) => {
            const name = document.createElement('strong');
            name.textContent = character.fullName;
            li.appendChild(name)

            const avatar = document.createElement('img');
            avatar.setAttribute('alt', character.fullName);
            avatar.src = character.image;
            li.appendChild(avatar);

            const house = document.createElement('div');
            house.textContent = character.hogwartsHouse;

            li.appendChild(house);


            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'x';
            deleteButton.classList.add('delete-favorite-button');

            deleteButton.addEventListener('click', () => {
                this.onRemoveFavorite(character);
            })
            li.appendChild(deleteButton)


        }

    renderFavorites = (favorites) => {
        if (favorites.length === 0) {
            this.favoritesList.textContent = 'У вас поки немає улюблених персонажів';
            return;
        }
        const list = new List(
            this.favoritesList, 
            favorites, 
            this.renderFavoriteItem);
        list.render();
    }

    onKeyDown = (event) => {
        if(event.key === 'Escape') {
            this.closeModal();
        }

    }
    
}