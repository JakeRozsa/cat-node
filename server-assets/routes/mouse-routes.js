const router = require('express').Router()

let mice = [{
  name: 'tom',
  age: 3
}, {
  name: 'Ratatouie',
  age: 7
}, {
  name: 'francious',
  age: 10
}]


router.get('', (req, res, next) => {
  res.status(200).send(mice)
})

router.get('/.id', (req, res, nest) => {
  let mouse = mice[req.params.id]
  if (!mouse) {
    return res.status(400).send('<h1> No Mouse at that ID</h1>')
  }
  return res.status(200).send(mouse)
})

router.post('', (req, res, next) => {
  let newMouse = req.body
  mice.push(newMouse)
  res.status(420).send(newMouse)
})

router.delete('/.id', (req, res, next) => {
  if (req.params.id > -1 && req.params.id < DOMStringList.length) {
    mice.splice(req.params.id, 1)
    return res.status(200).send('Delorted Mouse')
  }
  res.status(400).send('No such Mouse at that id')
})

module.exports = router