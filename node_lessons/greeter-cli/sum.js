import { parseArgs } from 'node:util';

// const { values } = parseArgs({
//   args: process.argv.slice(2)
// });
// console.log(values);
console.log(Number(process.argv.at(2)) + Number(process.argv.at(3)));