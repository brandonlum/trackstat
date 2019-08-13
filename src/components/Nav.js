import React, {Component} from 'react'
import {Navbar, NavItem, NavLink} from 'reactstrap'
import classnames from 'classnames'
import {Link} from 'react-router-dom'


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
                <Navbar>
                    <NavLink className={classnames({active: this.state.activeTab === '1'})}>
                        <Link to='/profile'>Profile</Link>
                    </NavLink>

                    <NavLink className={classnames({active: this.state.activeTab === '2'})}>
                        <Link to='/scorecards'>Scorecards</Link>  
                    </NavLink>

                    <NavLink className={classnames({active: this.state.activeTab === '3'})}>
                        <Link to='/newscorecard'>Create new Scorecard</Link>
                    </NavLink>
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