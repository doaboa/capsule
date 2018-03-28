import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Wrapper.css'

export default class Wrapper extends Component {
  render () {
    console.log('this.props.children', this.props.children)
    return <div className='Wrapper'>
      <div className='Wrapper-sidebar'>
        {/* <Navbar /> */}
      </div>
      <div className='Wrapper-view'>
        {this.props.children}
      </div>
    </div>
  }
}

Wrapper.contextTypes = {
  atom: PropTypes.object,
  split: PropTypes.func
}
