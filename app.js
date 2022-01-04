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

readTextFile('./content/1.txt').then( (result) => console.log(result) ).catch( (error) => console.log(error))