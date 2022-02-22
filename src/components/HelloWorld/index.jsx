import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from './index.module.css'

export default class index extends Component {
  static propTypes = {second: PropTypes.number.isRequired}

  render() {
    return (
      <div className={css.div}>Index</div>
    )
  }

  shouldComponentUpdate() {
    console.log('22222')
    return true
  }

  // UNSAFE_componentWillReceiveProps(a, b, c) {
  //   console.log(11111, a, b, c)
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log(33333)
  // }
}
