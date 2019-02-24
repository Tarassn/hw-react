import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import CartApp from "./components/CartApp";

class App extends Component {
    state = {

    };

  render() {
    return (
      <div className="App">
        <Counter
            name={'Counter A '}
            max={15}
            min={-20}
        />
        <Counter
            name={'Counter B '}
            max={3}
            min={-3}
        />
          <br/>
        <CartApp/>
      </div>
    );
  }
}

export default App;
