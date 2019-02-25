const router = require('express').Router()



//Only for Monday
let cats = [{
    name: 'Garfield',
    age: 35
}, {
    name: 'Mr. Snibbley',
    age: 91984
}, {
    name: 'Tom',
    age: 6
}]


//GetAllCats
router.get('', (request, response, next) => {
    response.status(200).send(cats)
})

//get one by Id (index)
router.get('/:id', (request, response, next) => {
    let cat = cats[request.params.id]
    if (!cat) {
        return response.status(400).send('<h1>No cat at that ID</h1>')
    }
    response.status(200).send(cat)
})


router.post('', (request, response, next) => {
    //request.body is the object sent from the client
    let newCat = request.body
    cats.push(newCat)
    response.status(201).send(newCat)
})


router.delete('/:id', (req, res, next) => {
    if (req.params.id > -1 && req.params.id < cats.length) {
        cats.splice(req.params.id, 1)
        return res.status(200).send('DELORTED CAT')
    }
    res.status(400).send('No such cat at that id')
})


//DO NOT FORGET THIS LINE
module.exports = router


