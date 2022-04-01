const express = require("express")
const session = require('express-session')
const app = express()
	
// Port Number Setup
var PORT = 3002

// Session Setup
app.use(session({

	// It holds the secret key for session
	secret: 'Your_Secret_Key',

	// Forces the session to be saved
	// back to the session store
	resave: true,

	// Forces a session that is "uninitialized"
	// to be saved to the store
	saveUninitialized: true
}))

app.get("/", function(req, res){
	
	// req.session.key = value
	req.session.name = 'Kumaresan'
	return res.send("Session Set")
})

app.get("/session", function(req, res){

	var name = req.session.name
	return res.send(name)

	/* To destroy session you can use
		this function
	req.session.destroy(function(error){
		console.log("Session Destroyed")
	})
	*/
})
	
app.listen(PORT, function(error){
	if(error) throw error
	console.log("Server created Successfully on PORT :", PORT)
})
