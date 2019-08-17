import React, {Component} from 'react'
import {Navbar} from 'reactstrap'
import classnames from 'classnames'
import {HashRouter, Route, Link} from 'react-router-dom'
import Profile from './Profile.js'
import Scorecards from './Scorecards.js'
import ScorecardForm from './ScorecardForm.js'

class Nav extends Component {
    state = {
        activeTab: '1'
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }

    render () {
        return (
            <React.Fragment>
                <Navbar className="container">
                    <HashRouter basename='/trackstat-client'>
                        <Link className={classnames({active: this.state.activeTab === '1'})} to='/profile'>
                            Profile
                        </Link>

                        <Link className={classnames({active: this.state.activeTab === '2'})} to='/scorecards'>
                            Scorecards
                        </Link>

                        <Link className={classnames({active: this.state.activeTab === '3'})} to='/scorecardform'>
                            Scorecard Form
                        </Link>
                        {/* <Route path="/profile"
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
                        /> */}
                    </HashRouter>
                </Navbar>
                {/* <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">

                            </Col>
                        </Row>
                    </TabPane>
                </TabContent> */}


            </React.Fragment>
        )
    }
}


export default Nav