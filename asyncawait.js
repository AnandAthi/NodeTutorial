const {readFile} = require('fs')


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
    const fileContent = await readTextFile(path);
    console.log("FileContent "+fileContent);
}catch(err){
    console.log(`Error ${err}`);
}
}

readFileAsync('./content/1.txt');
