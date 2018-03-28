const config = require('config')

module.exports = {
  client: 'mysql',
  connection: {
    ...config.db,
    password: process.env.MYSQL_PASSWORD || config.db.password
  }
}
