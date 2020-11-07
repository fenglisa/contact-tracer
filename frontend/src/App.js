import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CheckInsContainer from './containers/CheckInsContainer';
import SymptomsContainer from './containers/SymptomsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Welcome to your
          <h1>Contact Tracing App</h1>
          <h4>Please pick an option</h4>
          <Router>
            <>
              <NavLink
                to="/checkins"
                exact
              >Check-ins</NavLink>
              <NavLink
                to="/symptoms"
                exact
              >Symptoms</NavLink>
              <Route exact path="/checkins" component={CheckInsContainer} />
              <Route exact path="/symptoms" component={SymptomsContainer} />
            </>
          </Router>
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
