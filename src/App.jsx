import './App.css';
import HelloWorld from './components/HelloWorld'
import React, {Component} from 'react'

class App extends Component {
  state = {
    count: 1
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({count: this.state.count + 1})}>inc</button>
        <HelloWorld second={this.state.count}/>
      </div>
    );
  }
}

export default App;
