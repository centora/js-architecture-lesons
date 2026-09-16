export class View {
    constructor({onAdd, onDelete, onToggle, onFilter}) {
        this.onAdd = onAdd;
        this.onToggle = onToggle;
        this.onDelete = onDelete;
        this.onFilter = onFilter;
        this.app = document.getElementById('root');
        this.form = this.app.querySelector('.todo-form');
        this.input = this.app.querySelector('.todo-input');
        this.list = this.app.querySelector('.todo-list');
        this.filterButtons = this.app.querySelectorAll('.filter-btn');
        this.count = this.app.querySelector('.todo-count');

        
        this.form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.onAdd(this.input.value);
            this.input.value = '';
            this.input.focus();
        });
  
        this.filterButtons.forEach((button) => {
            button.addEventListener('click', this.onFilter(button.dataset.filter));
        });

    }

    render = () => {
        this.list.innerHTML = '';
        let todoListString = '';

        if(todoListString.length === 0) {
            this.list.appendChild(this.createEmptyElement());
        } else {
            todoListString.forEach((todo) => {
                this.list.appendChild(this.createTodoElement(todo));
            })
        }

        this.count.copntentText = `${todoListString.length} item${todoListString.length !== 1 ? 's' : ''} left`;

        this.filterButtons.forEach((button) => {
            button.classList.toggle('active', button.dataset.filter === filter);
        })

    }

    createEmptyElement = () => {
        const li = document.createElement('li');
        li.className = `todo-empty`;
        li.textContent = 'No todos to display';
        return li;

    }

    createTodoElement = (todo) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const checkbox = document.createElement('inout');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            this.onToggle(todo.id);
        });
        
        const span = document.createElement('span');
        span.textContent = todo.text;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            this.onDelete(todo.id);
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        return li;
    }
}