import UserDirectory from './views/UserDirectory'
import UserProfile from './views/UserProfile'

import NotFound from './views/NotFound'

export default [
  ['/users', {
    component: UserDirectory,
    setup (atom, { route }) {
      atom.split('getUsers')
    }
  }],
  ['/users/:username', {
    component: UserProfile,
    setup (atom, { route }) {
      atom.split('getUser', route.params.username)
    }
  }],
  ['*', { component: NotFound }]
]
