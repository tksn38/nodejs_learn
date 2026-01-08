const fs = require('fs');

fs.readFile('readme.md', 'utf-8', (err,data) => {
    if (err) throw err;
    console.log(data);
});

try {
    fs.writeFileSync('output.txt','Hello Nodejs');
    console.log('Write Successfully');
} catch (err) {
    console.error(err);
}