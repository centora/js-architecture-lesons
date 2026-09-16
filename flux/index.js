import { TodoActions } from "./src/actions.js";
import { Dispatcher } from "./src/dispatcher.js";
import { Emitter } from "./src/emitter.js";
import { TodoStore } from "./src/store.js";
import { Presenter as ToDoPresenter } from "./todos/presenter.js";

const emitter = new Emitter();
const dispatcher = new Dispatcher();

const store = new TodoStore(dispatcher, emitter);
const todoActions = new TodoActions(dispatcher);

const todo = new ToDoPresenter({emitter, todoActions, store});

