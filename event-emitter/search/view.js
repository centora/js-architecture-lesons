import { List } from "../components/List/List.js";
export class View {
    constructor (onSearchFormSubmit, onSortList) {
        this.app = document.querySelector('#root');
        this.searchCharacterForm = this.app.querySelector('.search-character-form');
        this.searchCharacterInput = this.app.querySelector('#searchCharacterInput');
        this.searchCharacterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            onSearchFormSubmit(this.searchCharacterInput.value);
        });

        this.sortCharactersButtons = this.app.querySelectorAll('.sort-buttons');
        this.sortCharactersButtons.forEach((button) => {
            button.addEventListener('click', () => {
                onSortList(button.dataset.sort, button.dataset.type)
            })
        })

        this.searchedCharactersList = this.app.querySelector('.searched-characters-list');
        this.searchedHousesList = this.app.querySelector('.searched-houses-list');
        this.searchedSpellsList = this.app.querySelector('.searched-spells-list');
    }


    renderCharacters = (characters) => {
        const list = new List(this.searchedCharactersList, characters, (li, character) => {
            const characterName = document.createElement('span');
            characterName.textContent = character.fullName;
            li.appendChild(characterName);
        })

        list.render();

    }

    renderSpells = (spells) => {
        const list = new List(this.searchedSpellsList, spells, (li, spell) => {
            const spellName = document.createElement('strong');
            spellName.textContent = spell.spell;
            li.appendChild(spellName);
            const spellDescr = document.createElement('span');
            spellDescr.textContent = ` - ${spell.use}`;
            li.appendChild(spellDescr);
        })

        list.render();
    }

    renderHouses = (houses) => {
        const list = new List(this.searchedHousesList, houses, (li, house) => {
            const houseName = document.createElement('strong');
            houseName.textContent = house.emoji + ' ' + house.house;
            const houseDescr = document.createElement('span');
            houseDescr.textContent = '(' + house.founder + ')';
            li.appendChild(houseName);
        })

        list.render();
    }
}

