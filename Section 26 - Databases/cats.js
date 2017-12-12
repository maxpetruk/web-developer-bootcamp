var mongoose = require("mongoose");
//connect to db
mongoose.connect("mongodb://localhost/cat_app", { useMongoClient: true });

//added this line after googling
mongoose.Promise = global.Promise;	

//schema (from Mongoose)
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

module.exports = mongoose.model('foobar', catSchema);

//model (mongoose, so you can use Cat.create, Cat.remove)
var Cat = mongoose.model("Cat", catSchema);


//adding a new cat to the DB
// var george = new Cat({
// 	name: "Mrs Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// george.save(function(err, cat){
// 	if(err) {
// 		console.log("SOMETHING WENT WRONG!");
// 	}
// 	else {
// 		console.log("WE JUST SAVED A CAT TO THE DB:");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Nice"
}, function(err, cat){
	if(err){
		console.log(err);
	} else {
		console.log(cat);
	}
});
//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
	if(err){
		console.log("SOMETHING WENT WRONG!")
		console.log(err);
	} else {
		console.log("ALL THE CATS...");
		console.log(cats);
	}
});