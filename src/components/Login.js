import React, {Component} from 'react'
// import {Redirect} from 'react-router-dom'
import {Container, Form, Input, Card, Row, Col} from 'reactstrap'


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            username: '',
            password: '',
            token: ''
            // ,
            // redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log('User from Loginjs',user)
        console.log('Props User', this.props.user)
        if (this.props.user) user.id = this.props.user.id
        this.props.handleLogin(
            event,
            user
        )
    }



    render() {
        // const {from} = this.props.location.state || '/';
        // const {redirect} = this.state;
        return (
            <Container>
                <Card>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col className="p-0">
                                <Input
                                    className="text-center"
                                    name="username"
                                    placeholder="Username"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col className="p-0">
                                <Input
                                    className="text-center"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Input
                                value="Login"
                                type="submit"
                            />
                        </Row>
                        
                        
                    </Form>
                    <Row>
                        <Input
                            value="Register"
                            type="submit"
                        />
                    </Row>
                </Card>
                {/* {redirect && (
                    <Redirect to={from || `/user/{#this.state.id}`} />
                )} */}
            </Container>
        );
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
}

export default Login