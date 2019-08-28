import React, {Component} from 'react'
import {BASE_URL} from '../constants.js'
// import {Redirect} from 'react-router-dom'
import {Container, Form, Input, Card, CardBody, Row, Col} from 'reactstrap'


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
        fetch(BASE_URL+`/users/login`, {
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
                {this.props.userInfo.id? 
                    <CardBody>
                        <Row>
                            <Col>
                                {this.props.userInfo.name}
                            </Col>
                            <Col>
                                {this.props.userInfo.status}
                            </Col>
                        </Row>
                        <Form onSubmit={this.props.handleLogout}>
                            <Row>
                                <Input
                                    value="Logout"
                                    type="submit"
                                />
                            </Row>
                        </Form>
                    </CardBody> 
                    :
                    <Form onSubmit={this.handleSubmit}>
                        <Row>{this.props.userInfo.name}</Row>
                        <Row>
                            <Col className="p-0">
                                <Input
                                    className="text-center"
                                    name="username"
                                    placeholder="Username"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.username}
                                />
                            </Col>
                            <Col className="p-0">
                                <Input
                                    className="text-center"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-0">
                                <Input
                                    value="Login"
                                    type="submit"
                                />
                            </Col>
                        </Row>
                    </Form>
                    // <Form onSubmit={this.props.handleLogout}>
                    //     <Row>
                    //         <Input
                    //             value="Logout"
                    //             type="submit"
                    //         />
                    //     </Row>
                    // </Form>

                }
                <Row>
                    <Col className="p-0">
                        <Input
                            value="Register"
                            type="submit"
                        />
                    </Col>
                </Row>
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