var express = require("express")
var http = require("http"), app
app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded())

var port = process.env.PORT || 3000

http.createServer(app).listen(port)

var mongoose = require("mongoose")
mongoose.connect("mongodb+srv://user:v1i2t3o4r5i6o7@cluster0.bcsyl.mongodb.net/user?retryWrites=true&w=majority")

var schema = mongoose.Schema({"user":String,"pass":String})
var user = mongoose.model("user", schema)

app.get("/get", function (req,res) {
	res.json({"alert":"Requisição feita com sucesso"})
	var new_user = new user({"user":"vitorio","pass":"12345"})
	new_user.save(function (err) {
		if (err!=null) {
			console.log(err)
		}
	})
})

