let express = require('express')
//added for models folder
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
//config for dist
let path = require('path')

//app config
let app = express()
//added for models folder
app.use(bodyParser.json())
app.use('/api', api_routes)
// added for dist
app.use(express.static(path.join(__dirname, 'student-sign-in-client', 'dist')))


// error handlers for routes not found
app.use(function (req,res,next) {
    res.status(404).send('Not found')
})

//error handler for server error
app.use(function (err,req,res,next) {
    console.error(err.stack)
    res.status(500).send('Server error')

})



//start server running
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server running on port ', server.address().port)

})