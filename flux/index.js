import { Emitter } from "./src/emitter.js";
import { Presenter as ToDoPresenter } from "./todos/presenter.js";

const emitter = new Emitter();

const todo = new ToDoPresenter(emitter);