export default function createReducer ({ router }) {
  const actions = {
    navigated (get, split, { route, data }) {
      console.log('routing', { route, data })
      const View = data[0].component
      const setup = data[0].setup || (() => {})
      split({ route: Object.assign({ View }, route) })
      setup({ get, split }, { route })
    },
    navigate (get, split, href) {
      router.push(href)
    },
    async getUsers (get, split) {
      const users = await fetch.getUsers()
      split({users})
    },
    async getUser (get, split, username) {
      const user = await fetch.getUser(username)
      split({user})
    }
  }

  const fetch = {
    getUsers () {
      return get('/api/users')
    },
    getUser (username) {
      return get(`/api/users/${username}`)
    }
  }

  return function reducer (get, split, { type, payload }) {
    return actions[type](get, split, payload)
  }
}

async function get (url) {
  const response = await window.fetch(url)
  return response.json()
}
