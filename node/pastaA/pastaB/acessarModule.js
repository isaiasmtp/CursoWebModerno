const moduleA = require('../../moduleA')
console.log(moduleA.bemVindo);

const http = require('http')
http.createServer((req, res) => {
    res.write("Ola, mundo!")
    res.end()
}).listen(8080)