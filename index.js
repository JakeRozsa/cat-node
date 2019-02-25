//THIS IS THE SAME EVERY TIME
import express from 'express'
import bp from 'body-parser'
//creates express application
let server = express()



//Middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


//Routes




//Catchall
server.use('*', (request, response, next) => {
    response.status(404).send('No Matching Routes')
})


//start server
server.listen(3000, () => {
    console.log('Server is running on port: 3000')
})