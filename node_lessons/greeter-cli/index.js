import { parseArgs } from 'node:util';
function parseOptions(args) {
    const { values } = parseArgs({
        args,
        options: {
            name: {type: 'string', short: 'n', default: 'stranger'},
            shout: {type: 'boolean', short: 's', default: false}
        },
    })
    return values;
}

function buildGreeting(name, shout) {
    const text = `Hello, ${name} `;
    return shout ? text.toUpperCase() : text;
}

const options = parseOptions(process.argv.slice(2));
console.log(options);
console.log(buildGreeting(options.name, options.shout));
console.log('-------------------------');
console.log(process.env.PORT, typeof process.env.PORT);
console.log(process.env.DEBUG, typeof process.env.DEBUG);
console.log(process.env.MISSING);