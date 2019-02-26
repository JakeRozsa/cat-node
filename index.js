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
let dogRoutes = require('./server-assets/routes/dog-routes')
let mouseRoutes = require('./server-assets/routes/mouse-routes')
server.use('/api/cats', catRoutes)
server.use('/api/dogs', dogRoutes)
server.use('/api/mice', mouseRoutes)

//Catchall
server.use('*', (request, response, next) => {
    response.status(400).send('No Matching Routes')
})


//start server
server.listen(port, () => {
    console.log('Server is running on port:' + port)
})