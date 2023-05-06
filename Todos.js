const { client } = require('./db')
const TodosService = require('./TodosService')

class Todos {
  async getAll(req, res) {
    try {
      const todos = await TodosService.getAll()
      res.json(todos)
    } catch (e) {
      res.status(500).json({error: e})
    }
  }

  async getOne(req, res) {
    try {
      const {id} = req.params

      const todo = await TodosService.getOne(id)
      console.log(todo);
      res.json(todo)
    } catch (error) {
      res.status(500).json({error: error})
    }
  }

  async create(req, res) {
    try {
      const todo = await TodosService.create(req.body)
      res.json(todo)
    } catch (error) {
      res.status(500).json({error})
    }
  }

  async update(req, res) {
    try {
      const todo = await TodosService.update(req.body)
      console.log(todo);
      res.json(todo)
    } catch (e) {
      res.status(400).json({error: e})
    }
  }

  async delete(req, res) {
    try {
      const todo = await TodosService.delete(req.params.id)
      res.json(todo)
    } catch (e) {
      res.status(500).json({error: e})
    }
  }
}

module.exports = new Todos()