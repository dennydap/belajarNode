// var http = require("http");

// //Buat server di port 8081
// http.createServer(function (request, response) {
// 	//Kirimkan header HTTP-nya
// 	//HTTP Status: 200 = OK
// 	//Content Type: text/plain
// 	response.writeHead(200, {'Content-Type': 'text/plain'});
	
// 	//Mengirim response body nya jadi "Hello World"
// 	response.end('Hello World\n');
// }).listen(8081); 

// //Console bakalan ngeprint Hello World
// console.log("Hello, World!");
// console.log("Coba sekarang buka http://localhost:8081");

// Mengimport modul events
var events = require('events');

// Membuat objek eventEmitter
var eventEmitter = new events.EventEmitter();

// Membuat event handler
var connectHandler = function connected() {
	// Munculkan pesan pada console
	console.log('Koneksi sukses.');

	// Emit event data_received
	eventEmitter.emit('data_received');
}

// Menghubungkan event connection dengan handlernya
eventEmitter.on('connection', connectHandler);

// Menghubungkan event data_received dengan fungsi anonim
eventEmitter.on('data_received', function() {
	console.log('Data sukses diterima.');
});

// Emit event connection
eventEmitter.emit('connection');

console.log("Selesai.");