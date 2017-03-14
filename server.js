// Belajar bikin web server menggunakan node

// Deklarasi module
var http = require('http');
var fs = require('fs');
var url = require('url');

// Buat server di port 8081
http.createServer(function (request, response) {
	// Parse file name yang di request
	var pathname = url.parse(request.url).pathname;

	// Print nama file yang di request
	console.log("Request buat file " + pathname + " diterima.");

	// Membaca file yang direquest
	fs.readFile(pathname.substr(1), function (err, data){
		// Jika error terjadi...
		if (err) {
			console.log(err);
			// ...tunjukkan HTTP Status 404 (Not found)
			response.writeHead(404, {'Content-Type': 'text/html'
			});
		} 
		// Tapi jika berhasil...
		else {
			// ...tunjukkan HTTP Status 200 (OK)
			response.writeHead(200, {'Content-Type': 'text/html'
			});
			// Tuliskan konten ke response body
			response.write(data.toString());
		}
		// Kirimkan data ke response body
		response.end();
	});
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');