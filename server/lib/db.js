const knex = require('knex')(require('../../knexfile'))

module.exports = {
  async getUsers () {
    const users = await knex('users').select('*')
    return users.map(user => {
      const tags = JSON.parse(user.tags)
      return {...user, tags}
    })
  },
  async getUser (username) {
    const [user] = await knex('users').select('*').where({username})
    const tags = JSON.parse(user.tags)
    return {...user, tags}
  }
}
