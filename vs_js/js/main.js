var http = require('http');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Artist = require('./Artist');
var name;
var location;
var bdate;
var favorit;
var uid;


//Mongoose Connection
mongoose.connect('mongodb://KuKKi:sehrsicher123@ds119788.mlab.com:19788/kukkivs'); 
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection succeeded.");
});


//Handle all request from server
const PORT=8082;







function handleRequest(request, response){
  response.end();
  
  console.log("save");

  var newArtist = new Artist({
      name: "namevar",
  	location: "P.O.B name32145123456",
      bdate: "birth date12121",
      favorit: "boolean",
      uid:0
    });
  
  
  saveArtikel(newArtist);
  
  
  
  
  //How can i show the table through the server and put these bottom functions in my js.js functionality?!?!
  
  
 
  
  
  
/*	  
	  //save function to save data to db
	  newArtist.save(function(error) {
	    if (error) {
	      console.error(error);
	    }
	    
	  });
	  */
  /*
  Artist.find(function (err, artists) {
	  if (err) return console.error(err);
	  console.log(artists);
	});
  Artist.find({ name: /^Lennon/ }, callback);
*/
  
  
}


function saveArtikel(newArtist){
	
console.log("save");
newArtist.save(function(error) {
    if (error) {
      console.error(error);
    }
    })
}
//Create and Start a server
//Must be at the end, first we create our handle functions and than we start the server
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});