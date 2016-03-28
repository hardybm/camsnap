var MjpegCamera = require('mjpeg-camera');
var fs = require('fs');
var express = require('express');

var app = express();
//app.use(express.static(__dirname + '/snapshot'));

app.listen(8083, function () {
	console.log('Server running on port 8083');
});

var camera = new MjpegCamera( { url: 'http://127.0.0.1:8082/' } );

app.get(	'/snap.jpg', 
			function (req, res) {
				console.log('GET \'/snap.jpg\'');
				camera.getScreenshot( function (err,
												frame ) {	
													//res.writeHead(200, {'Content-Type': 'text/plain' });
													res.send( frame )
													}
									);
	

});

