import React, {Component} from 'react'
import {Navbar} from 'reactstrap'


class Nav extends Component {
    render () {
        return (
            <React.Fragment>
                <Navbar>
                    <h3>Profile</h3>
                    <h3>Scorecards</h3>
                    <h3>Create new Scorecard</h3>
                </Navbar>


            </React.Fragment>
        )
    }
}


export default Nav