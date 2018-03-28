import React, {Component, PropTypes} from 'react'

class UserDirectory extends Component {
  render () {
    const users = this.context.atom.users
    if (!users) return <div>loading</div>
    const userComponents = users.map(user => {
      return <div key={user.username} onClick={() => this.handleClickUser(user.username)}>{user.username}</div>
    })
    return <div>{userComponents}</div>
  }
  handleClickUser (username) {
    this.context.split('navigate', `/users/${username}`)
  }
}

UserDirectory.contextTypes = {
  atom: PropTypes.object,
  split: PropTypes.func
}

export default UserDirectory
