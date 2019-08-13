import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Scorecards from './components/Scorecards.js'
import CreateScorecard from './components/CreateScorecard.js'

class App extends React.Component {
  state = {
    scorecards: []
  }

  getScorecards = () => {
    fetch('/scorecards')
    .then(response => response.json())
    // .then(resJson => console.log(resJson))
    .then(resJson => this.setState({scorecards: resJson}))
    .catch(error => console.error(error))
  }

  componentDidMount = () => {
    this.getScorecards()
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Router>
          <Nav />
          {/* <Route path="/profile" exact component={Profile} /> */}
          <Route path="/scorecards"
          render = {(props) => <Scorecards {...props} scorecards={this.state.scorecards}/>} />
          <Route path="/newscorecard" exact component={CreateScorecard} />
        </Router>
        
      </div>
    );
  }
}

export default App;
