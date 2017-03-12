var http = require("http");

//Buat server di port 8081
http.createServer(function (request, response) {
	//Kirimkan header HTTP-nya
	//HTTP Status: 200 = OK
	//Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	//Mengirim response body nya jadi "Hello World"
	response.end('Hello World\n');
}).listen(8081); 

//Console bakalan ngeprint Hello World
console.log("Hello, World!");
console.log("Coba sekarang buka http://localhost:8081");