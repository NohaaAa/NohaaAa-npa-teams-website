import './team.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import UploadModal from './uploadModal';
class Team extends Component {
    constructor() {
        super();
    }

    addAMember = () => {
    }

    renderDetails = ({ teamDetail }) => {
        let baseImagesURL = 'https://npabackendapis.nohaa.repl.co/assets/teams'
        if (teamDetail) {
            return (
                <div className='team-container' key={teamDetail._id + 6}>
                    <div className='logo-side'>
                        <img src={`${baseImagesURL}/${teamDetail.logo}`} alt={teamDetail.name} />
                    </div>
                    <div className='details-side'>
                        <h2>{teamDetail.name}</h2>
                        <p>{teamDetail.description}</p>
                        <UploadModal props={this.props} />

                        <div className='squads'>

                            {teamDetail.squad.map((s, index) => {
                                return (
                                    <div className='squad-item' key={index + 3}>
                                        <img src='../../assets/avatar.png' alt={s.name} />
                                        <h3>{s.name}</h3>
                                        <ul className='num-list'>
                                            <li><span>Number:</span>{s.number}</li>
                                            <li><span>PPG:</span>{s.PPG}</li>
                                            <li><span>APG:</span>{s.APG}</li>
                                            <li><span>RPG:</span>{s.RPG}</li>

                                        </ul>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>

            )
        }
    }
    render() {
        return (
            <div className='teams'>
                <CSSTransitionGroup transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.renderDetails(this.props)}

                </CSSTransitionGroup>
            </div>
        )

    }

    componentDidMount() {
        this.props.getDetails(this.props.match.params.id)
    }

    componentDidUpdate() {
        this.props.getDetails(this.props.match.params.id)

    }
}

const mapStateToProps = (state) => {
    console.log("TEAM DETAILS", state.teams.details)
    return {
        teamDetail: state.teams.details
    }
}

export default connect(mapStateToProps, actions)(Team);