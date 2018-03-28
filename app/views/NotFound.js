import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NotFound extends Component {
  render () {
    return (<section className='Not Found'>
      No page here. SAD!
    </section>)
  }
}

NotFound.contextTypes = {
  atom: PropTypes.object,
  split: PropTypes.func
}

export default NotFound
