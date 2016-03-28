// Set the server listen port
var port = '8083';
var camPath = 'http://127.0.0.1:8082/';


// no configuration below here
var MjpegCamera = require('mjpeg-camera');
var fs = require('fs');
var express = require('express');
var app = express();
var util = require('util');

app.listen(port, function () {
	util.log( 'Server running on port ' + port);
});

var camera = new MjpegCamera( { url: camPath } );

app.get( '/snap.jpg', function (req, res) {
	util.log('GET \'/snap.jpg\'');
	camera.getScreenshot( function (err, frame ) {	
		//res.writeHead(200, {'Content-Type': 'text/plain' });
		res.send( frame )
		}
	);

});
