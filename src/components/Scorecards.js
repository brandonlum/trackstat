import React, {Component} from 'react'
import Scorecard from './Scorecard.js'



class Scorecards extends Component {

    render () {
        const {handleDelete, handleUpdate} = this.props
        return (
            <React.Fragment>
                {
                    this.props.scorecards.map(scorecard => 
                        <Scorecard 
                            userInfo={this.props.userInfo}
                            key={scorecard.id}
                            scorecard={scorecard}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />
                    )
                }
            </React.Fragment>
        )
    }
}


export default Scorecards