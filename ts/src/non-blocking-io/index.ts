// Non-blocking IO
import * as fs from 'fs';

// Non-blocking file read operation
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

console.log('Reading file asynchronously...');