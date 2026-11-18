console.log(__filename);
console.log(__dirname);

//console.log('------>>', globalThis.process)
globalThis.myVariable = "Hello world";
console.log(myVariable)

globalThis.nodeVariable = 'I am a node.js variable';

console.log(global === global.global);