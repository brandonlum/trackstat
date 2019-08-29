import React from 'react';
import './App.css';
import {BASE_URL} from './constants.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Login from './components/Login.js'
import Profile from './components/Profile.js'
import Scorecards from './components/Scorecards.js'
import ScorecardForm from './components/ScorecardForm.js'
import {Container, Card} from 'reactstrap'

class App extends React.Component {
  state = {
    scorecards: [],
    userInfo: {}
  }

  getUser = (userLogin) => {
    // event.preventDefault();
    fetch(BASE_URL+`/users/${userLogin.user.id}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${userLogin.token}`
      }
    })
    .then(response => response.json())
    // .then(resJson => console.log(resJson))
    .then(resJson => {
      this.setState ({
        userInfo: resJson
      })
      console.log('User: ', resJson.name, 'ID: ', resJson.id)
    })
    .catch(error => console.error(error))
  }


  getScorecards = () => {
    fetch(BASE_URL+`/users/${this.state.userInfo.id}/scorecards`)
    .then(response => response.json())
    // .then(resJson => console.log('Adding scorecard info', resJson))
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
    console.log('Form Inputs: ', formInputs);
    fetch(BASE_URL+`/users/${this.state.userInfo.id}/scorecards`, {
        method: "POST",
        body: JSON.stringify(formInputs),
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    // .then(resJson => {console.log(resJson)})
    .then(resJson => {
        this.setState({
          scorecards: [resJson, ...this.state.scorecards]
        })
        this.addScorecard(resJson)
    })
    .catch(error => console.error(error))
  }

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    fetch(BASE_URL+`/users/${this.state.userInfo.id}/scorecards/${formInputs.id}`, {
        method: "PUT",
        body: JSON.stringify({formInputs}),
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(updateScorecard => {this.getScorecards()})
    .catch(error => console.error(error))
  }

  handleDelete = (deletedScorecard) => {
    fetch(BASE_URL+`/scorecards/${deletedScorecard.id}`, {
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

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({
        userInfo: {}
    })
    console.log('User logged out')
  }


  componentDidMount = () => {
    this.getScorecards()
  }

  render () {
    return (
      <div className="body">
        <Container className="mt-2 mb-2">
          <Header
            handleLogin={this.handleLogin}
            getUser={this.getUser}
            userInfo={this.state.userInfo}
            handleLogout={this.handleLogout}
          />
          {this.state.userInfo.id ? 
            <Router>
              <Nav 
                userInfo={this.state.userInfo}
                
                // scorecards={this.state.scorecards}
                // handleDelete={this.handleDelete}
                // handleUpdate={this.handleUpdate}
                // handleSubmit={this.handleSubmit}
                // handleChange={this.handleChange}
              />
                <Container>
                  <Route path="/trackstat/user/1//profile"
                    render = {(props) => 
                    <Profile 
                      {...props} 
                      userInfo={this.state.userInfo}
                      handleUpdate={this.handleUpdate}
                    />} 
                  />
                  <Route path="/trackstat/user/1/scorecards"
                    render = {(props) => 
                      <Scorecards 
                        {...props}
                        userInfo={this.state.userInfo}
                        scorecards={this.state.scorecards}
                        handleDelete={this.handleDelete}
                        handleUpdate={this.handleUpdate}
                      />} 
                  />

                  <Route path="/trackstat/user/1/scorecardform" 
                    render = {(props) => 
                    <ScorecardForm {...props} 
                      userInfo={this.state.userInfo}
                      handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                    />} 
                  />
                </Container>
              
            </Router>
          :
            <Container id="login-container">
              <h3>Welcome! Please Sign In!</h3>
              <Card className="login-card">
                <Login 
                  handleLogin={this.handleLogin}
                  getUser={this.getUser}
                  userInfo={this.state.userInfo}
                  handleLogout={this.handleLogout}
                />
              </Card>
            </Container>
          }
        </Container>
        
        
      </div>
    );
  }
}

export default App;
