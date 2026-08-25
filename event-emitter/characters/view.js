import { List } from "../components/List/List.js";
import { CharacterName } from "../components/CharacterName/CharacterName.js";
export class View {
    constructor(onLoadCharacters, onFavorite) {
        this.app = document.querySelector('#root')
        this.charactersList = this.app.querySelector('.characters-list');
        this.loadCharsButton = this.app.querySelector('.load-characters-button');

        this.loadCharsButton.addEventListener('click', onLoadCharacters);
        this.onFavorite = onFavorite;
        this.favorites = [];

    }

    setListItemContent = (li, character) => {
        const isFavorite = this.favorites.some(char => {
            return char.index === character.index
        });
       
        const characterName = new CharacterName(character, this.onFavorite, 'strong', isFavorite)
        li.appendChild(characterName.render());

        const characterDescription = document.createElement('div');
        characterDescription.textContent = `${character.nickname} - ${character.hogwartsHouse}`;
        
        li.appendChild(characterDescription)
    }

    renderCharacters = (characters, favorites = this.favorites) => {
        this.favorites = favorites;

        const list = new List(this.charactersList, characters, this.setListItemContent);
        list.render();
    }
}