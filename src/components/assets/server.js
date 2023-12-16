let http = require('http');
let fs = require('fs');
let url = require('url')

http.createServer(function (request, response) {
    let query = url.parse(request.url, true);
    let filename = "." + query.pathname;
    console.log("Le serveur a bien demarre");
    fs.readFile(filename, function (err, data) {
        if (err) {
            response.writeHead(404, {'Content-Type' : 'text/html'})
            return response.end("Erreur, Not Found")
        }
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write(data);
        return response.end();
    });
}).listen(8080);