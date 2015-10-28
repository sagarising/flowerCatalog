var http=require('http');
var fs=require('fs');
var data="";

var reqHandler=function(req,res){
	if(req.url=="/"||req.url=="/favicon.ico"){
		data=fs.readFileSync("./index.html","utf-8")
	res.write(data);
	}
	else{
		data=fs.readFileSync("."+req.url)
		res.write(data);
	}
	res.end();
}
var server = http.createServer(reqHandler);
server.listen(3000);
console.log("server has started 10.4.20.42:3000 \n =====Press ctrl+D to stop");