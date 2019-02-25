//THIS IS THE SAME EVERY TIME
let express = require('express')
let bp = require('body-parser')
//creates express application
let server = express()
let port = 3000


//Middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


//Routes
let catRoutes = require('./server-assets/routes/cat-routes')

server.use('/api/cats', catRoutes)


//Catchall
server.use('*', (request, response, next) => {
    response.status(400).send('No Matching Routes')
})


//start server
server.listen(port, () => {
    console.log('Server is running on port:' + port)
})