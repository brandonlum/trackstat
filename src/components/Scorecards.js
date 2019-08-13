import React, {Component} from 'react'
import {Card, CardBody, CardTitle} from 'reactstrap'


class Scorecards extends Component {

    render () {
        return (
            <React.Fragment>
                {
                    this.props.scorecards.map(scorecard => 
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
                        </Card>
                    )
                }
            </React.Fragment>
        )
    }
}


export default Scorecards