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

/////////////////////////////

// // Mengimport modul events
// var events = require('events');

// // Membuat objek eventEmitter
// var eventEmitter = new events.EventEmitter();

// // Membuat event handler
// var connectHandler = function connected() {
// 	// Munculkan pesan pada console
// 	console.log('Koneksi sukses.');

// 	// Emit event data_received
// 	eventEmitter.emit('data_received');
// }

// // Menghubungkan connection event dengan handlernya
// eventEmitter.on('connection', connectHandler);

// // Menghubungkan event data_received dengan fungsi anonim
// eventEmitter.on('data_received', function() {
// 	console.log('Data sukses diterima.');
// });

// // Emit connection event
// eventEmitter.emit('connection');

// console.log("Selesai.");

///////////////////////////

// //Deklarasi modul dan variable untuk EventEmitter
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // Listener 1
// var listener1 = function listener1() {
// 	console.log('Listener1 aktif');
// }

// // Listener 2
// var listener2 = function listener2() {
// 	console.log('Listener2 aktif');
// }

// // Menghubungkan connection event dengan fungsi listener1
// console.log('Menyalakan Listener1...');
// eventEmitter.addListener('connection', listener1);

// // Menghubungkan connection event dengan fungsi listener2
// console.log('Menyalakan Listener2...');
// eventEmitter.on('connection', listener2);

// // Melakukan emit pada connection event
// eventEmitter.emit('connection');

// // Menghitung jumlah listeners
// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log("Ada " + eventListeners + " Listener yang melakukan listening pada connection event.");

// // Melepas listener1 dari eventEmitter
// console.log('Mematikan Listener1...')
// eventEmitter.removeListener('connection', listener1);
// console.log('Listener1 sudah tidak melakukan listening lagi.');

// // Melakukan emit pada connection event
// eventEmitter.emit('connection');

// // Menghitung kembali jumlah listeners
// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log("Ada " + eventListeners + " Listener yang melakukan listening pada connection event.");

// console.log("Selesai");

////////////////////////////////