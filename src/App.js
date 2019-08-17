import React from 'react';
import './App.css';
// import {BASE_URL} from './constants.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Profile from './components/Profile.js'
import Scorecards from './components/Scorecards.js'
import ScorecardForm from './components/ScorecardForm.js'
import {Container} from 'reactstrap'

class App extends React.Component {
  state = {
    scorecards: [],
    userInfo: {}
  }

  getUser = (userLogin) => {
    // event.preventDefault();
    fetch(`/trackstat-client/users/${userLogin.user.id}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${userLogin.token}`
      }
    })
    .then(response => response.json())
    // .then(resJson => console.log(resJson))
    .then(resJson => {
      this.setState ({
        userInfo : resJson
      })
      console.log('User: ', resJson.name, 'ID: ', resJson.id)
    })
    .catch(error => console.error(error))
  }


  getScorecards = () => {
    fetch(`/trackstat-client/users/${this.state.userInfo.id}/scorecards`)
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
    fetch(`/trackstat-client/users/${this.state.userInfo.id}/scorecards`, {
        method: "POST",
        body: JSON.stringify(formInputs),
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(resJson => {console.log(resJson)})
    // .then(resJson => {
    //     this.setState({
    //       scorecards: [resJson, ...this.state.scorecards]
    //     })
    //     this.props.addScorecard(resJson)
    // })
    .catch(error => console.error(error))
  }

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    fetch(`/trackstat-client/users/${this.state.userInfo.id}/scorecards/${formInputs.id}`, {
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
    fetch(`/trackstat-client/scorecards/${deletedScorecard.id}`, {
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
      <div className="dusty-grass-gradient">
        
        <Header 
          handleLogin={this.handleLogin}
          getUser={this.getUser}
        />
        <Router>
          <Nav 
            userInfo={this.state.userInfo}
          />
          <Container>
            <Route path="/profile"
              render = {(props) => 
              <Profile 
                {...props} 
                userInfo={this.state.userInfo}
                handleUpdate={this.handleUpdate}
              />} 
            />
            <Route path="/scorecards"
              render = {(props) => 
                <Scorecards 
                  {...props}
                  userInfo={this.state.userInfo}
                  scorecards={this.state.scorecards}
                  handleDelete={this.handleDelete}
                  handleUpdate={this.handleUpdate}
                />} 
            />

            <Route path="/scorecardform" 
              render = {(props) => 
              <ScorecardForm {...props} 
                userInfo={this.state.userInfo}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />} 
            />
          </Container>
          
        </Router>
        
      </div>
    );
  }
}

export default App;
