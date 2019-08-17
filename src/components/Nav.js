import React, {Component} from 'react'
import {Navbar} from 'reactstrap'
import classnames from 'classnames'
import {HashRouter, Link} from 'react-router-dom'


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
                    {/* <HashRouter basename='/'> */}
                        <Link className={classnames({active: this.state.activeTab === '1'})} to='/profile'>
                            Profile
                        </Link>

                        <Link className={classnames({active: this.state.activeTab === '2'})} to='/scorecards'>
                            Scorecards
                        </Link>

                        <Link className={classnames({active: this.state.activeTab === '3'})} to='/scorecardform'>
                            Scorecard Form
                        </Link>
                    {/* </HashRouter> */}
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