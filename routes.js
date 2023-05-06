const Todos = require('./Todos')

const router = require('express').Router()

router.get('/todos', (req, res) => Todos.getAll(req, res))
router.get('/todos/:id', (req, res) => Todos.getOne(req, res))
router.post('/todos', (req, res) => Todos.create(req, res))
router.put('/todos', (req, res) => Todos.update(req, res))
router.delete('/todos/:id', (req, res) => Todos.delete(req, res))

module.exports = router