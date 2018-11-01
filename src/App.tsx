import React, { Component } from "react";
import SpringLoader from "react-spring-loaders";
import { Hello } from "./components/Hello";
import "./App.css";

const settings = {
  rebound: {
    tension: 14,
    friction: 10
  },
  spinner: {
    id: "spinner",
    radius: 90,
    sides: 6,
    depth: 8,
    colors: {
      background: "#00272C",
      stroke: null,
      base: null,
      child: "#02C39A"
    },
    alwaysForward: true, // When false the spring will reverse normally.
    restAt: null, // A number from 0.1 to 0.9 || null for full rotation
    renderBase: false
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpringLoader settings={settings} />
        <Hello compiler="TypeScript" framework="React" />
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
      </div>
    );
  }
}

export default App;
