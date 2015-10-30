var http=require('http');
var fs=require('fs');
var data="";

var listOfGuest=function(data){
	var date=new Date();
	var string=[date.toLocaleDateString(),date.toLocaleTimeString()].join("_"); 
	console.log(data);
	var guestData=data.replace(",","_");
	return string+"_"+guestData+"<br>";
}





var reqHandler=function(req,res){
	console.log(req.url);
	if(req.url[1]=="?"){
		 var matched=req.url.match(/=[^&]*/g).map(function(ele){return ele.slice(1)});
		 data=matched.toString().replace(/\+/g," ");
		 var dataWithDate=listOfGuest(data);
		 var dataAsArray=fs.readFileSync("./guest.htm","utf-8").split("\n");
		 dataAsArray.splice(21,0,dataWithDate);
		 datatowrite=dataAsArray.join("\n");
		 fs.writeFileSync("./guest.htm",datatowrite);
		 var datafromfile = fs.readFileSync("./guest.htm");
		 res.write(datafromfile);
		 res.end()
	}


	else if(req.url=="/"||req.url=="/favicon.ico"){
		data=fs.readFileSync("./index.html","utf-8")
	res.write(data);
	res.end();
	}
	else{
		data=fs.readFileSync("."+req.url)
		res.write(data);
		res.end();
	}
}
var server = http.createServer(reqHandler);
server.listen(3000);
console.log("server has started 10.4.20.42:3000 \n =====Press ctrl+C to stop");