import React, {Component} from 'react'
import {Card, CardText, CardBody, CardTitle, Form, FormGroup, Label, Input, Button} from 'reactstrap'


class CreateScorecard extends Component {
    // state = {

    // }
    // handlechange = (event) => {

    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     
    //     fetch('/scorecards', {
    //         method: "POST",
    //         body: JSON.stringify
    //     })
    // }


    render () {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Create new Scorecard!</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label for="coursename">Course Name</Label>
                            <Input type="text" name="course_name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date_played">Date Played</Label>
                            <Input type="date" name="date_played" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="front_par">Front Nine Par Rating</Label>
                            <Input type="number" name="front_par" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="back_par">Back Nine Par Rating</Label>
                            <Input type="number" name="back_par" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="front_nine">Front Nine Score</Label>
                            <Input type="number" name="front_nine_score" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="back_nine">Back Nine Score</Label>
                            <Input type="number" name="back_nine_score" />
                        </FormGroup>

                        <Input type="submit" value="Submit new Scorecard!"/>
                    </Form>

                </CardBody>
            </Card>
        )
    }
}

export default CreateScorecard