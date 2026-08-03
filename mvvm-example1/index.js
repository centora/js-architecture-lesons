import { ViewModel } from "./viewModel.js";
import { Model } from "./model.js";
import { View } from "./view.js";

const model = new Model();//handles data and API calls.
const viewModel = new ViewModel(model);//exposes state and operations.
const view = new View(viewModel);//renders the UI and interacts with the ViewModel.