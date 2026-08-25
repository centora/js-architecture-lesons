import { Presenter } from "./presenter.js";
import { List } from "../components/List/List.js";
import { CharacterName } from "../components/CharacterName/CharacterName.js";
export class View {
    constructor(onLoadCharacters) {
        this.app = document.querySelector('#root')
        this.charactersList = this.app.querySelector('.characters-list');
        this.loadCharsButton = this.app.querySelector('.load-characters-button');

        this.loadCharsButton.addEventListener('click', onLoadCharacters);



    }

    setListItemContent = (li, character) => {
        const characterName = new CharacterName(character, this.onFavorite, 'strong')
        li.appendChild(characterName.render());

        const characterDescription = document.createElement('div');
        characterDescription.textContent = `${character.nickname} - ${character.hogwartsHouse}`;
        
        li.appendChild(characterDescription)
    }

    renderCharacters = (characters) => {
        const list = new List(this.charactersList, characters, this.setListItemContent);
        list.render();
    }
}