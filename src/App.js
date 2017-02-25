import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('haider');
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.add = this.add.bind(this);
  }
  increment() {
    console.log('inside function');
    this.setState({
      count: this.state.count + 1
    });
  }
  add(ev) {
    ev.preventDefault();
    console.log('*******************************');
    console.log(this.refs.addcount.value);
    let addCount = this.refs.addcount.value;
    addCount = parseInt(addCount);
    
    this.setState({
      count: this.state.count + addCount
    });

    this.refs.addcount.value = "";
  }
  render() {
    console.log('Ali', this.props.surname);
    return (
      <div>
        <h1>Hello World</h1>
        <h2>{this.state.count}</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sunt, impedit consequatur magni eum, molestias autem inventore ullam. Atque culpa, perferendis aperiam! Perferendis voluptate cupiditate officia incidunt adipisci ab nemo!</p>
        <button onClick={this.increment}>Increment</button>

        <form onSubmit={this.add}>
          <input type="text" ref='addcount' />
          <button>Add</button>

        </form>



      </div>
    )
  }
}

export default App;
