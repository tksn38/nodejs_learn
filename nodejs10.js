var fs = require('fs');
fs.readFile('readme.md', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asychonize reading " + data.toString());
});

// fs.readFile('',(err,data) => { 
//     if (err) {
//         return console.error(err);
//     }
// });

var data = fs.readFileSync('readme.md');
console.log("Synchonize read " + data.toString());

console.log("Program excecution done.");

fs.appendFile('readme.md', '\nAppending from fs.appendFile', (err) =>{
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Text append successfully by fs.appendFile');
})

fs.appendFileSync('readme.md', '\nAppending from fs.appendFileSync');
console.log('Text append successfully by fs.appendFileSync');
