var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);

var app = express();

app.use('/api/v1', require('./api')(wagner));

app.listen(3000);
console.log('Listening on port 3000!');
/*var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/example');

var User=mongoose.model('User',schema,'users');

var user=new User({
	name:'john smith',
	email:'john@gmail.com'
});

user.save(function(error){
	if(error){
		console.log(error);
		process.exit(1);
	}
	User.find({email:'john@gmail.com'},function(error,docs){
		if(error){
			console.log(error);
			process.exit(1);	
		}
		console.log(require('util').inspect(docs));
		process.exit(0);
	});
});*/
//var uri='mongodb://localhost:27017/example';
/*mongodb.MongoClient.connect(uri,function(error,db){
	if(error){
		console.log(error);
		process.exit(1);
	}
 
 	var doc={
 		title:'jaws',
 		year:1975,
 		director:'Steven spielberg',
 		rating:'PG',
 		ratings:{
 			critics:80,
 			audience:97
 		},
 		screenplay:['Peter Benchley','Carl Gotlieb']
 	};
	db.collection('sample').insert(doc,function(error,result){
		if(error){
		console.log(error);
		process.exit(1);
	}
	
	db.collection('sample').find().toArray(function(error,docs){
		if(error){
		console.log(error);
		process.exit(1);
	}
		console.log('Found docs:');
		docs.forEach(function(doc){
			console.log(JSON.stringify(doc));
		});
	process.exit(0);
	});		
	});

});
 */