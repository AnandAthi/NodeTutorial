const {readFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)


const readTextFile = (path) => {
    return new Promise( (resolve,reject) => {
        readFile(path,'utf8', (err,data) => {
            if(err)
            reject(err)
            if(data)
            resolve(data)
        })  
    })
}

const readFileAsync = async (path) =>{
try{
    const fileContent = await readFilePromise(path,{encoding:'utf-8'});
    console.log("FileContent "+fileContent);
}catch(err){
    console.log(`Error ${err}`);
}
}

readFileAsync('./content/1.txt');
