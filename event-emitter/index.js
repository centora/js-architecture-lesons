import { Presenter as CharactersPresenter} from "./characters/presenter.js";
import { Presenter as HousesPresenter } from "./houses/presenter.js";
import { Presenter as SpellsPresenter } from "./spells/presenter.js";
import { Presenter as SearchPresenter } from "./search/presenter.js";
import { Emitter } from "./event-emitter.js";

const emitter = new Emitter();

const charactersApp = new CharactersPresenter(emitter);
const housesApp = new HousesPresenter(emitter);
const spellsApp = new SpellsPresenter(emitter);
const searchApp = new SearchPresenter(emitter);