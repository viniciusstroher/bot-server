var express    = require('express'); 
var app 	   = express();
var path       = require('path');
var bodyParser = require('body-parser');
var http  	   = require('http');
var https  	   = require('https');
var fs 	       = require('fs');
var multer 	   = require('multer');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use(bodyParser.json())

app.post('/contatos',function(req,res){
	console.log(req.body);
});

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './files-static/') //Destination folder
//   }
// });

// upload 	   = multer({storage:storage});
// app.post('/files',function(){

// });
// app.post('/files',upload.single('image'),function(req,res,next){
// 	if(!req.file){
// 		res.json({"status":"arquivo_nao_enviado", 
// 				  msg: "Envie um arquivo"});
// 		res.end();

// 	}else{

// 		var apiError   = "arquivo_nao_processado";
// 		var apiSucc    = "arquivo_processado";
// 		var ip 		   = req.connection.localAddress;
// 		console.log(req.connection);
// 		var urlrecurso = "/files-static/"+req.file.filename;
		

// 		res.json({"status":apiSucc, 
// 				   msg: "Arquivo enviado.",
// 				   msgKey:"ARQUIVO_ENVIADO", 
// 				   url:urlrecurso});

// 	}
// });

http.createServer(app).listen(8093);
