import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Scorecards from './components/Scorecards.js'
import CreateScorecard from './components/CreateScorecard.js'

class App extends React.Component {
  state = {
    scorecards: [],
    userLogin: {
      username: '',
      password: '',
      token: ''
    }
  }

  getUser = () => {
    fetch('/users')
    .then(response => response.json())
    .then(resJson => console.log(resJson))
    .catch(error => console.error(error))
  }

  handleLogin = (event, userLogin) => {
    event.preventDefault();
    console.log(userLogin)
    // fetch('/users/login', {
    //   method: "POST",
    //   body: JSON.stringify({userLogin}),
    //   headers: {
    //     'Accept':'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(resJson => console.log(resJson))
    // // .then(resJson => {
    // //   this.setState({
    // //     token: resJson.token
    // //   })
    // // })
    // .catch(error => console.error(error))
  }

  getScorecards = () => {
    fetch('/scorecards')
    .then(response => response.json())
    // .then(resJson => console.log(resJson))
    .then(resJson => this.setState({scorecards: resJson}))
    .catch(error => console.error(error))
  }

  addScorecard = (scorecard) => {
    const copyScorecards = [...this.state.scorecards]
    copyScorecards.unshift(scorecard)
    this.setState({
      scorecards: copyScorecards
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event, formInputs) => {
    event.preventDefault();
    // this.state.combined_score = this.state.front_nine_score + this.state.back_nine_score;
    // this.state.total_par = this.state.front_par + this.state.back_par;
    fetch('/scorecards', {
        method: "POST",
        body: JSON.stringify({formInputs}),
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(resJson => {
        this.setState({
          scorecards: [resJson, ...this.state.scorecards]
        })
        // this.props.addScorecard(resJson)
    })
    .catch(error => console.error(error))
}


  componentDidMount = () => {
    this.getScorecards()
  }

  render () {
    return (
      <div className="App">
        
        <Header 
          handleLogin={this.handleLogin}
        />
        <Router>
          <Nav />
          {/* <Route path="/profile" exact component={Profile} /> */}
          <Route path="/scorecards"
          render = {(props) => <Scorecards {...props} scorecards={this.state.scorecards}/>} />
          {/* <Route path="/newscorecard" 
          render = {(props) => <CreateScorecard {...props} addScorecard={this.addScorecard}/>} /> */}

          <Route path="/newscorecard" 
          render = {(props) => <CreateScorecard {...props} handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          />} />
        </Router>
        
      </div>
    );
  }
}

export default App;
