import React from 'react';
import './App.css';
// import {BASE_URL} from './constants.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Scorecards from './components/Scorecards.js'
import ScorecardForm from './components/ScorecardForm.js'

class App extends React.Component {
  state = {
    scorecards: [],
    userLogin: {
      username: '',
      password: '',
      token: ''
    }
  }

  getUser = (event, userLogin) => {
    event.preventDefault();
    fetch(`trackstat-client/users/${userLogin.id}`, {
      method: "GET",
      body: JSON.stringify(userLogin),
      header: {
        'Accept':'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(resJson => console.log(resJson))
    .catch(error => console.error(error))
  }

  handleLogin = (event, userLogin) => {
    event.preventDefault();
    console.log('Handle Login', userLogin)
    fetch(`trackstat-client/users/login`, {
      method: "POST",
      body: JSON.stringify(userLogin),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(response => console.log(response))
    .then(resJson => console.log('User Info', resJson))
    // .then(resJson => {
    //   this.setState({
    //     userLogin: {
    //       username: '',
    //       password: '',
    //       token: ''
    //      }
    //     // token: resJson.token
    //   })
    // })
    .catch(error => console.error(error))
  }

  getScorecards = () => {
    fetch(`trackstat-client/scorecards`)
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
    fetch(`trackstat-client/scorecards`, {
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

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    // this.state.combined_score = this.state.front_nine_score + this.state.back_nine_score;
    // this.state.total_par = this.state.front_par + this.state.back_par;
    fetch(`trackstat-client/scorecards/${formInputs.id}`, {
        method: "PUT",
        body: JSON.stringify({formInputs}),
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(updateScorecard => this.getScorecards())
    .catch(error => console.error(error))
  }

  handleDelete = (deletedScorecard) => {
    fetch(`trackstat-client/scorecards/${deletedScorecard.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(json => {
      this.setState(state => {
        const scorecards = state.scorecards.filter((scorecard, index) => scorecard.id !== deletedScorecard.id)
        return {
          scorecards
        }
      })
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
          <Route path="trackstat-client/scorecards"
          render = {(props) => 
            <Scorecards 
              {...props} 
              scorecards={this.state.scorecards}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
            />} 
          />
          {/* <Route path="/newscorecard" 
          render = {(props) => <CreateScorecard {...props} addScorecard={this.addScorecard}/>} /> */}

          <Route path="trackstat-client/scorecardform" 
          render = {(props) => <ScorecardForm {...props} handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          />} />
        </Router>
        
      </div>
    );
  }
}

export default App;
