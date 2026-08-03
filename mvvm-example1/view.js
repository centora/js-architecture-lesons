export class View {
    constructor (viewModel) {
        this.viewModel = viewModel;

        this.viewModel.subscribe(() => {
            console.log('need to render');
            this.render();
        });
        this.app = document.querySelector('#root');

        this.loadSpellsButton = this.app.querySelector('.load-spells-button');
        this.loadSpellsButton.addEventListener('click', this.viewModel.loadSpells);
        
        this.spellsList = document.querySelector('.spells-list');
    }

    render = () => {
        this.renderSpells(this.viewModel.spells)
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
}