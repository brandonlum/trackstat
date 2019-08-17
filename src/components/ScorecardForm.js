import React, {Component} from 'react'
import {Card, CardBody, CardTitle, Form, FormGroup, Label, Input} from 'reactstrap'


class ScorecardForm extends Component {
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
            combined_score: 0
        
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {
        if (this.props.scorecard) {
          this.setState({
            course_name: this.props.scorecard.course_name,
            date_played: this.props.scorecard.date_played,
            front_par: this.props.scorecard.front_par,
            back_par: this.props.scorecard.back_par,
            total_par: this.props.scorecard.total_par,
            front_nine_score: this.props.scorecard.front_nine_score,
            back_nine_score: this.props.scorecard.back_nine_score,
            combined_score: this.props.scorecard.combined_score
          })
        }
      }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.userInfo);
        let total_par = (Number(this.state.front_par) + Number(this.state.back_par)).toString()
        let combined_score = (Number(this.state.front_nine_score) + Number(this.state.back_nine_score)).toString()
        const scorecard = {
            course_name: this.state.course_name,
            date_played: this.state.date_played,
            front_par: this.state.front_par,
            back_par: this.state.back_par,
            total_par: total_par,
            front_nine_score: this.state.front_nine_score,
            back_nine_score: this.state.back_nine_score,
            combined_score: combined_score,
            user_id: this.props.userInfo.id
        }

        console.log('Scorecard', scorecard)
        console.log('Props Scorecard', this.props.scorecard)
        if (this.props.scorecard) {
            scorecard.id = this.props.scorecard.id
            this.props.toggleForm();
        }
        this.props.handleSubmit(
            event,
            scorecard
        )
    }


    render () {
        return (
            <Card className="m-5">
                <CardBody>
                    <CardTitle><h2>Scorecard Form</h2></CardTitle>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="course_name">Course Name</Label>
                            <Input 
                                type="text" name="course_name"
                                onChange={this.handleChange} 
                                placeholder={this.state.course_name}
                                value={this.state.course_name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date_played">Date Played</Label>
                            <Input 
                                type="date" 
                                name="date_played" 
                                onChange={this.handleChange} placeholder={this.state.date_played}
                                value={this.state.date_played}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="front_par">Front Nine Par Rating</Label>
                            <Input 
                                type="number" 
                                name="front_par" 
                                onChange={this.handleChange} 
                                placeholder={this.state.front_par}
                                value={this.state.front_par}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="back_par">Back Nine Par Rating</Label>
                            <Input 
                                type="number" 
                                name="back_par" 
                                onChange={this.handleChange} 
                                placeholder={this.state.back_par}
                                value={this.state.back_par}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="front_nine">Front Nine Score</Label>
                            <Input 
                                type="number" name="front_nine_score" 
                                onChange={this.handleChange} 
                                placeholder={this.state.front_nine_score}
                                value={this.state.front_nine_score}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="back_nine">Back Nine Score</Label>
                            <Input 
                                type="number" 
                                name="back_nine_score" 
                                onChange={this.handleChange} 
                                placeholder={this.state.back_nine_score}
                                value={this.state.back_nine_score}
                                />
                        </FormGroup>

                        <Input type="submit" value={this.props.scorecard ? "Update Scorecard":"Submit new Scorecard!"}/>
                    </Form>

                </CardBody>
            </Card>
        )
    }
}

export default ScorecardForm