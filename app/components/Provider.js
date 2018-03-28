import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Provider extends Component {
  getChildContext () {
    return {
      atom: this.props.atom,
      split: this.props.split
    }
  }

  render () {
    return this.props.children
  }
}

Provider.childContextTypes = {
  atom: PropTypes.object,
  split: PropTypes.func
}
