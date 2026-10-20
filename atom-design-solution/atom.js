export class AtomStore{
    constructor() {
        this. values = new WeakMap();
        this. subscribers = new WeakMap();
        this.deps = new WeakMap();
    }

    get (atom) {  
        if (!this. values.has(atom)) {
            // Check for derived atom
            // TODO: SHOW AND EXPLAIN HOW TO USE DERIVED ATOMS (IN IMAGES)
            if (typeof atom.init === 'function') {
                const getter = (depAtom) => {
                    if(!this.deps.has(depAtom)) {
                        this.deps.set(depAtom, new Set());
                    }
                    this.deps.get(depAtom). add ( atom);
                    return this.get(depAtom);
                }
            } else {
                // Create derived atom with getter function
                this. values.set(atom, atom.init(getter));
                // Create simple atom with initial value
                this.values.set(atom, atom.init);
            }
        }   
        return this. values.get(atom);
    }

    // Set the value of an atom and notify subscribers
    set (atom, newValue) {
        this. values. set(atom, newValue);
    } 

    subscribe(atom, callback) {
        if(!this. subscribers.has(atom)) {
            this. subscribers. set(atom, new Set())
        }
        this. subscribers.get(atom). add (callback);
        // Return an unsubscribe function
        return () => this.subscribers.get(atom) .delete (callback);
    }

    _notify(atom) {
        // Notify subscribers of the atom
        const subs = this.subscribers.get(atom);
        if (subs) {
            subs.forEach(callback => callback(this-get(atom)));
        }

        // Notify derived atoms that depend on this atom
        const derivedAtoms = this.deps.get(atom);
        if (derivedAtoms) {
            // TODO: add recalculation logic for derived atoms if needed
            derivedAtoms. forEach(derivedAtom => this._notify(derivedAtom))
        }
    }    
}   

// Fabricate a new atom
export const atom = (init) => ({ init });