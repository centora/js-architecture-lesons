export class CharacterName {
    constructor(character, onFavorite, characterNameTag = 'span', isFavorite = false) {
        this.character = character;
        this.characterNameTag = characterNameTag;
        this.onFavorite = onFavorite;
        this.isFavorite = isFavorite;
    }

    createElem(elem = 'span', content = '') {
        console.log('create element: ', elem);
        const htmlElem = document.createElement(elem);
        console.log('htmlElem: ', htmlElem);
        htmlElem.textContent = content;
        console.log('htmlElem2: ', htmlElem);
        return htmlElem;
    }

    render() {
        const container = this.createElem('span');
        const name = this.createElem(this.characterNameTag, this.character.fullName);
        const favButton = this.createElem('button', '☆');
        favButton.classList.add('favorite-button');
        favButton.addEventListener('click', () => {
            this.onFavorite(this.character);
        });

        favButton.classList.toggle('active', this.isFavorite);

        container.append(favButton, name);

        return container;

    }

}