var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var parse = url.parse(req.url, true);
    var fileName = "static" + parse.pathname + ".html";
    if (fileName == "static/.html") {
        fileName = "static/index.html";
    }
    fs.readFile(fileName, function(err, data) {
        if (err) {
            fs.readFile('static/404.html', function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);