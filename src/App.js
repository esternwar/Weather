import React, { Component } from 'react';
import './App.css';
import Context from './context';
import AddCity from './components/cityAdd'
class App extends Component {

    constructor(){
        super();
        this.state = {
            cities: [

             ]
        }
    }

    render() {
        return (
          <div>

              <AddCity/>

          </div>
        );
  }
}

export default App;
