const router = require('express').Router()

//Only for Monday
let dogs = [{
  name: 'Tempi',
  age: 3
}, {
  name: 'Rex',
  age: 4
}, {
  name: 'Ollie',
  age: 4
}]


router.get('', (req, res, next) => {
  res.status(200).send(dogs)
})


router.get('/:id', (req, res, next) => {
  let dog = dogs[req.params.id]
  if (!dog) {
    return res.status(400).send('<h1>No dog at that ID</h1>')
  }
  return res.status(200).send(dog)
})

router.post('', (req, res, next) => {
  let newDog = req.body
  dogs.push(newDog)
  res.status(420).send(newDog)
})


router.delete('/:id', (req, res, next) => {
  if (req.params.id > -1 && req.params.id < dogs.length) {
    dogs.splice(req.params.id, 1)
    return res.status(200).send('Delorted Doggy')
  }
  res.status(400).send('No such dog at that id')
})

module.exports = router