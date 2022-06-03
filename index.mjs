import { parseArgs } from 'node:util';

const options = {
    say: {
        type: "string",
        short: 's'
    }
}

const { values } = parseArgs({
    options
})

console.log(values)
