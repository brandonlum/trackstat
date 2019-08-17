import React, {Component} from 'react'
import {Card, CardBody, CardTitle, Button} from 'reactstrap'
import ScorecardForm from './ScorecardForm.js'


class Scorecard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formVisibile: false
        }
    }

    toggleForm = () => {
        this.setState({formVisibile: !this.state.formVisibile})
    }

    render () {
        const {scorecard, handleDelete, handleUpdate} = this.props
        return (
            <React.Fragment>
                {
                    this.state.formVisibile ? 
                    <ScorecardForm 
                        userInfo={this.props.userInfo}
                        key={scorecard.id}
                        scorecard={scorecard} 
                        handleSubmit={this.props.handleUpdate}
                        toggleForm={this.toggleForm} 
                    />
                    :
                    <Card key={scorecard.id} className="m-5">
                        <CardTitle className="m-2 d-flex">
                            <h3>{scorecard.course_name}</h3>
                            <Button className="mr-5 ml-5" outline color="warning" onClick={this.toggleForm}>Edit</Button>
                            <Button className="mr-5 ml-5" outline color="danger" onClick={() => handleDelete(scorecard)}>Delete</Button>
                        </CardTitle>
                        <CardBody className="m-2 border">
                            <h5>Front Nine: {scorecard.front_nine_score}</h5>
                            <p>Front Nine Par: {scorecard.front_par}</p>
                            <h5>Back Nine: {scorecard.back_nine_score}</h5>
                            <p>Back Nine Par: {scorecard.back_par}</p>

                            <h5>Combined Score: {scorecard.combined_score}</h5>
                            <p>Total Par: {scorecard.total_par}</p>
                        </CardBody>

                    </Card>
                }
            </React.Fragment>
        )
    }
}


export default Scorecard