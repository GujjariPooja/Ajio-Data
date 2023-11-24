let http = require('http');
let server = http.createServer((req,res) => {
    res.write('Hi from Http server code hello');
    res.end()
})
server.listen(3435)