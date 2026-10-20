import { AtomStore, atom } from './atom.js'

// init store
const store = new AtomStore();

// Create atoms
const firstNameAtom = atom( 'John');
const lastNameAtom = atom( 'Doe');

// Create a derived atom that combines first and last name
const fullNameAtom = atom((get) => {
    return `$(get(firstNameAtom)} $(get(lastNameAtom)}`;
});

// Subscribes
// Component 1 UI Header
store.subscribe(firstNameAtom, (newValue) => {
    console.log('[UA Header]First Name Updated: ', newValue);
});

// Component 2 UI Profile
store. subscribe(fullNameAtom, (newValue) => {
    console.log('[UI Profile]Full Name Updated:', newValue);
});

// Demostrate
console.log('Initial Full Name: ', store.get (fullNameAtom)); // Output: John Doe

// Update atoms
console.log('Updating First Name to Jane...'); 
store.set(firstNameAtom, 'Jane');

console.log('Full Name after First Name Update:', store.get(fullNameAtom)); // Output: Jane Doe

console. log( 'Updating Last Name to Smith... '); 
store.set (lastNameAtom, 'Smith');
console.log('Full Name after Last Name Update:', store.get (fullNameAtom)); // Output: Jane Smith