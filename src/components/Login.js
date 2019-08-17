import React, {Component} from 'react'
// import {Redirect} from 'react-router-dom'
import {Container, Form, Input, Card, Row, Col} from 'reactstrap'


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/trackstat-client/users/login`, {
            method: "POST",
            body: JSON.stringify(
                {
                    user: {
                        username: this.state.username,
                        password: this.state.password
                    }
                } 
            ),
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(resJson => {
              this.setState({
                  username: '',
                  password: ''
              })
              this.props.getUser(resJson)
              console.log('User logged in')
          })
          .catch(error => console.error(error))
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