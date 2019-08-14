import React, {Component} from 'react'
import {Container, Form, Input, Card} from 'reactstrap'


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            token: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }



    render() {
        return (
            <Container>
                <Card>
                    <h3 className="center">Login</h3>
                    <Form onSubmit={this.props.handleLogin}>
                        <Input
                            name="username"
                            placeholder="Username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <Input
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <Input
                            value="Login"
                            type="submit"
                        />
                    </Form>
                </Card>
            </Container>
        );
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
}

export default Login