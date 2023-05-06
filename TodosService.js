const { pool } = require('./db')

class TodosService {
  async getAll() {
    const result = await pool.query('SELECT * FROM todos')
    return result.rows
  }

  async getOne(id) {

      if(!id) {
        throw new Error('Укажите ID')
      }
      const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id])
      return result.rows[0]
  }

  async create(todoBody) {
    const {title} = todoBody

    const todo = await pool.query(`INSERT INTO todos (title) VALUES ($1) RETURNING *`, [title])
    return todo
  }

  async update(todo) {
    const {id, completed} = todo
    
    if(!id) {
      throw new Error('Укажите ID')
    }
    const result = await pool.query(`UPDATE todos SET completed = ${completed} WHERE id = ${id} RETURNING *`)
    
    return result
  }

  async delete(id) {
    if(!id) {
      throw new Error('Укажите ID')
    }

    const result = await pool.query(`DELETE FROM todos WHERE id = ${id} RETURNING *`)
    return result
  }
}

module.exports = new TodosService()