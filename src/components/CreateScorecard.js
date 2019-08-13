import React, {Component} from 'react'
import {Card, CardBody, CardTitle, Form, FormGroup, Label, Input} from 'reactstrap'


class CreateScorecard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course_name: '',
            date_played: '',
            front_par: 0,
            back_par: 0,
            total_par: 0,
            front_nine_score: 0,
            back_nine_score: 0,
            combined_score: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const scorecard = {
            course_name: this.state.course_name,
            date_played: this.state.date_played,
            front_par: this.state.front_par,
            back_par: this.state.back_par,
            total_par: this.state.total_par,
            front_nine_score: this.state.front_nine_score,
            back_nine_score: this.state.back_nine_score,
            combined_score: this.state.combined_score
        }
        if (this.props.scorecard) scorecard.id = this.props.scorecard.id
        this.props.handleSubmit(
            event,
            scorecard
        )
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.course_name, this.state.date_played,this.state.front_par,
    //     this.state.back_par,
    //     this.state.total_par,
    //     this.state.front_nine_score,
    //     this.state.back_nine_score,
    //     this.state.combined_score)
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     // this.state.combined_score = this.state.front_nine_score + this.state.back_nine_score;
    //     // this.state.total_par = this.state.front_par + this.state.back_par;
    //     fetch('/scorecards', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             course_name: this.state.course_name,
    //             date_played: this.state.date_dplayed,
    //             front_par: this.state.front_par,
    //             back_par: this.state.back_par,
    //             total_par: this.state.total_par,
    //             front_nine_score: this.state.front_nine_score,
    //             back_nine_score: this.state.back_nine_score,
    //             combined_score: this.state.combined_score
    //         }),
    //         headers: {
    //             'Accept':'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(resJson => {
    //         this.setState({
    //             course_name: '',
    //             date_played: '',
    //             front_par: 0,
    //             back_par: 0,
    //             total_par: 0,
    //             front_nine_score: 0,
    //             back_nine_score: 0,
    //             combined_score: 0
    //         })
    //         this.props.addScorecard(resJson)
    //     })
    //     .catch(error => console.error(error))
    // }


    render () {
        return (
            <Card className="m-5">
                <CardBody>
                    <CardTitle><h2>Create new Scorecard!</h2></CardTitle>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="course_name">Course Name</Label>
                            <Input type="text" name="course_name" onChange={this.handleChange} placeholder={this.state.course_name}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="date_played">Date Played</Label>
                            <Input type="date" name="date_played" onChange={this.handleChange} placeholder={this.state.date_played}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="front_par">Front Nine Par Rating</Label>
                            <Input type="number" name="front_par" onChange={this.handleChange} placeholder={this.state.front_par}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="back_par">Back Nine Par Rating</Label>
                            <Input type="number" name="back_par" onChange={this.handleChange} placeholder={this.state.back_par}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="front_nine">Front Nine Score</Label>
                            <Input type="number" name="front_nine_score" onChange={this.handleChange} placeholder={this.state.front_nine_score}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="back_nine">Back Nine Score</Label>
                            <Input type="number" name="back_nine_score" onChange={this.handleChange} placeholder={this.state.back_nine_score}/>
                        </FormGroup>

                        <Input type="submit" value="Submit new Scorecard!"/>
                    </Form>

                </CardBody>
            </Card>
        )
    }
}

export default CreateScorecard