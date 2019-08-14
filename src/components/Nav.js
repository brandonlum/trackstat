import React, {Component} from 'react'
import {Navbar} from 'reactstrap'
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
                    <Link className={classnames({active: this.state.activeTab === '1'})} to='/trackstat-client/profile'>
                        Profile
                    </Link>

                    <Link className={classnames({active: this.state.activeTab === '2'})} to='/trackstat-client/scorecards'>
                        Scorecards
                    </Link>

                    <Link className={classnames({active: this.state.activeTab === '3'})} to='/trackstat-client/scorecardform'>
                        Scorecard Form
                    </Link>
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