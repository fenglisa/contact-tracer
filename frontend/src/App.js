import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to your Contact Tracing App
          </p>
          <h1>Please pick an option</h1>
          <p>Log Check-In</p>
          <p>Log Symptoms</p>
        </header>
      </div>
    );
  }
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to your Contact Tracing App
//         </p>
//       </header>
//       <p>Please pick an option</p>
//     </div>
//   );
// }
//
// export default App;
