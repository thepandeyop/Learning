/**
Working with file system in nodejs 
using fs module
.read file
.create file 
.update file
.delete file
.rename file

 */

// Read file
/*
const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Something does not work well')
        }else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong' + error)
    } else {
        console.log('Everything is working fine on port ' + port)
    }   
})
    
*/

//  writting same code using promises

// const { readFile } = require('fs/promises');

// async function readfile() {
//     try {
//         const data = await readFile('text.txt'); // Corrected path to 'text.txt'
//         console.log(data.toString());
//     } catch (err) {
//         console.error(`Error reading file: ${err.message}`); // Changed console.err to console.error
//     }
// }

// readfile(); // Call the function to execute


//....................................................createfile...........................................................

// const {writeFile}  = require('fs/promises');
// async function createfile(){
// try{
//     const content = 'This is the content';
//     await writeFile('textt.txt',content);
// console.log('file is successfully create');
// }catch (err){
// console.error(`error creating file: ${err.message}`)
// }
// }
// createfile();

// rename 

// const {rename} = require('fs/promises');
// async function dito(oldpath, newpath){
// try{

// await rename(oldpath,newpath);
// console.log('success');
// }
// catch (err){
//     console.error(`something is error which is this ${err.message}`);
// } 
// }

// dito('textt.txt','text1.txt');


// delete 

const {unlink} = require('fs/promises');
async function deletefile(filepath){
try{
    await unlink(filepath);
    console.log('success');

}catch(err){
    console.error(`error message${err.message}`);
}
}
deletefile('text.txt');