import React, {Component} from 'react'
import {Card, CardTitle, CardBody} from 'reactstrap'

class Profile extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }
    render () {
        return (
            <Card>
                <CardTitle>
                    <h1>{this.props.userInfo.name}</h1>
                </CardTitle>
                <CardBody>
                    <h3>Username: <small>{this.props.userInfo.username}</small></h3>
                    <h3>Age: <small>{this.props.userInfo.age}</small></h3>
                    <h3>Handicap: <small>{this.props.userInfo.handicap}</small></h3>
                    <h3>Status: <small>{this.props.userInfo.status}</small></h3>
                    
                </CardBody>

            </Card>
        )
    }
}

export default Profile