const { Pool } = require('pg')

class Database {
  constructor(pool) {
    if(Database.exists) {
      return Database.instance
    }
    Database.instance = this
    this.pool = pool

    Database.exists = true
  }

  async connect() {
    await this.pool.connect()
  }
}

const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

module.exports = new Database(pool)