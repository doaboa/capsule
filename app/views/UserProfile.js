import React, {Component, PropTypes} from 'react'

class UserProfile extends Component {
  render () {
    const user = this.context.atom.user
    if (!user) return <div>loading</div>
    return <div key={user.username}>{JSON.stringify(user)}</div>
  }
}

UserProfile.contextTypes = {
  atom: PropTypes.object,
  split: PropTypes.func
}

export default UserProfile
