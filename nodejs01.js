// //REPL
// const fs = require('fs').promises;

// async function readFile() {
//     try {
//         const data = await fs.readFile('readme.md' , 'utf-8');
//         console.log('File Context:', data);
//     } catch (err) {
//         console.error('Read File Error', err);
//     }
// }

// readFile();
// console.log("Reading File Request has send already.");

//------------

//const fs = require('fs').promises;

// // 使用 Promise 读取文件
// fs.readFile('readme.md', 'utf8')
//   .then(data => {
//     console.log('文件内容:', data);
//   })
//   .catch(err => {
//     console.error('读取文件出错:', err);
//   });

// console.log('读取文件请求已发送，继续执行其他代码...');


//-------
const fs = require('fs');

// 异步读取文件
fs.readFile('readme.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Errors!:', err);
    return;
  }
  console.log('File Contents:', data);
});

console.log('Reading File Request has send already. Plase Wait');