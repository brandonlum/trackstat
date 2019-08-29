import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import Login from './Login.js'

class Header extends Component {
    render () {
        return (
            <Container className="border-bottom">
                {this.props.userInfo.id?
                    <Row>
                        <Col xs="8">
                            <a className="appname-header" href="/trackstat">
                                <h1>
                                    ScoreTracker
                                </h1>
                                <p>Track all your scoring in one convenient location!</p>
                            </a>
                        </Col>
                        <Col xs="4">
                            <Login
                                handleLogin={this.props.handleLogin}
                                handleLogout={this.props.handleLogout}
                                getUser={this.props.getUser}
                                userInfo={this.props.userInfo}
                            />
                        </Col>
                    </Row>
                    :
                    <Row>
                        <Col xs="12">
                            <a className="appname-header" id="appname-header-logged-out" href="/trackstat">
                                <h1>
                                    ScoreTracker
                                </h1>
                                <p>Track all your scoring in one convenient location!</p>
                            </a>
                        </Col>
                    </Row>
                    
                }
            </Container>
        )
    }
}


export default Header