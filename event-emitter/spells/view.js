export class View {
    constructor (onLoadSpellsButton, onHideSpellsButton, onSearchFormSubmit) {
        this.app = document.querySelector('#root');

        this.loadSpellsButton = this.app.querySelector('.load-spells-button');
        this.loadSpellsButton.addEventListener('click', onLoadSpellsButton);

        this.hideSpellsButton = this.app.querySelector('.hide-spells-button');
        this.hideSpellsButton.addEventListener('click', onHideSpellsButton);

        this.spellsList = document.querySelector('.spells-list');
    }

    renderSpells = (spells) => {
        this.spellsList.innerHTML = '';
        spells.forEach(spell => {
            const li = document.createElement('li');

            const spellName = document.createElement('strong');
            spellName.textContent = spell.spell;
            li.appendChild(spellName);

            const spellDescription = document.createElement('span');
            spellDescription.textContent = ` - ${spell.use}`;
            li.appendChild(spellDescription);

            this.spellsList.appendChild(li);
        })
    }

    hideSpells = () => {
        this.spellsList.innerHTML = '';
    }
}