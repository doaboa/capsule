const express = require('express')
const bodyParser = require('body-parser')
const { join } = require('path')
const Bundler = require('parcel-bundler')
const db = require('./lib/db')

function startServer () {
  const app = express()
  const bundler = new Bundler(join(__dirname, '../app/index.html'))

  app.use(bodyParser.json())

  app.get('/api/users', async (req, res) => {
    res.json(await db.getUsers())
  })

  app.get('/api/users/:username', async (req, res) => {
    res.json(await db.getUser(req.params.username))
  })

  app.use(bundler.middleware())
  app.listen(2244, () => console.log('listening on http://localhost:2244'))
}

startServer()
