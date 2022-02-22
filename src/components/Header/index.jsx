import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from '../../logo.svg'

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.dieSelf()
    }, 2000)
  }

  dieSelf() {
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
  }
}
