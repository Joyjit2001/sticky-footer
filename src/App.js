import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <body>
            <h2>Fixed/Sticky Footer Example</h2>
            <p>The footer is placed at the bottom of the page.</p>
            <div class="footer">
                <a href="#news">News</a>
                <a href="#news">News</a>
                <a href="#news">News</a>
                <a href="#news">News</a>
                <a href="#news">News</a>
                <input type="text"></input>
                <input type="button" value="search" />
            </div>
        </body>
    );
  }
}

export default App;
