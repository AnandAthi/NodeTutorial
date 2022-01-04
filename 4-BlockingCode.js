const http = require('http')

const server = http.createServer( (req,res) => {
    if(req.url === '/'){
        res.end("Home Page")
    }
    else if(req.url === "/about"){
        //Write two loops here for blocking code
        res.end("About Page")

    }else{
        res.end("Error Page")
    }
})

server.listen(5000 , () => {
    console.log('server listening on port 5000')
})

