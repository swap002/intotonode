//console.log("Hello Node");

var http  = require('http');
var fs  = require('fs');
var url  = require('url');



http.createServer(function(req,res){

var q = url.parse(req.url, true);

var filename = "." + q.pathname;
console.log(filename);
if(filename == './')
{
	filename = './index';
}

filename = filename + ".html";

fs.readFile(filename,function(err,data){
console.log(q,err);
	if(err){
		res.writeHead(404,{'Content-Type': 'text/html'});
		return res.end('404 Not Found');
	}
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write(data);
	// console.log("...Incoming request:" + req.url);
	return res.end();
});
}).listen(8080);

console.log("Server listening on port 8080..");