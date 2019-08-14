import React, {Component} from 'react'
import {Card, CardBody, CardTitle, Button} from 'reactstrap'
import ScorecardForm from './ScorecardForm.js'


class Scorecards extends Component {
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
        const {handleDelete, handleUpdate} = this.props
        return (
            <React.Fragment>
                {
                    this.props.scorecards.map(scorecard => 
                        this.state.formVisibile ? 
                        <ScorecardForm 
                            key={scorecard.id}
                            scorecard={scorecard} 
                            handleSubmit={this.props.handleUpdate} 
                        />
                        :
                        <Card key={scorecard.id} className="m-5">
                            <CardTitle className="m-2">
                                <h3>{scorecard.course_name}</h3>
                            </CardTitle>
                            <CardBody className="container border mb-5">
                                <h5>Front Nine: {scorecard.front_nine_score}</h5>
                                <p>Front Nine Par: {scorecard.front_par}</p>
                                <h5>Back Nine: {scorecard.back_nine_score}</h5>
                                <p>Back Nine Par: {scorecard.back_par}</p>

                                <h5>Combined Score: {scorecard.combined_score}</h5>
                                <p>Total Par: {scorecard.total_par}</p>
                            </CardBody>
                            <Button className="mr-5 ml-5" outline color="warning" onClick={this.toggleForm}>Edit</Button>
                            <Button className="mr-5 ml-5" outline color="danger" onClick={() => handleDelete(scorecard)}>Delete</Button>
                        </Card>
                    )
                }
            </React.Fragment>
        )
    }
}


export default Scorecards