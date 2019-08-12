import React from 'react';
import './App.css';
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
        <Nav />
        <Scorecards 
          scorecards={this.state.scorecards}
        />
        {/* <CreateScorecard /> */}
      </div>
    );
  }
}

export default App;
