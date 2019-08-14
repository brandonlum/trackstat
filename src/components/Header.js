import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import Login from './Login.js'

class Header extends Component {
    render () {
        return (
            <Container className="border-bottom">
                <Row>
                    <Col xs="7">
                        <Button color="light" href="/">
                            <h1>ScoreTracker</h1>Track all your scoring in one convenient location!
                        </Button>
                    </Col>
                    <Col xs="5">
                        <Login
                            handleLogin={this.props.handleLogin}
                        />
                    </Col>

                </Row>
            </Container>
        )
    }
}


export default Header