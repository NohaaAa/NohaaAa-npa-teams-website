import { Component } from 'react';
import './teams.css'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link, Redirect } from 'react-router-dom';
import AddTeamModal from './addTeamModal';
class Teams extends Component {
    constructor() {
        super();
        this.state = {
            keyword: ''
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({ keyword: e.target.value })
    }

    renderAllTeams = ({ teamsList }) => {
        let baseImagesURL = 'https://npabackendapis.nohaa.repl.co/assets/teams'
        if (teamsList) {
            return teamsList.map((team) => {
                // console.log(`teams/${team._id}`)
                return (
                    <div className='team-logo' key={team._id}>
                        <Link to={`teams/${team._id}`}>
                            <img src={`${baseImagesURL}/${team.logo}`} alt={team.name} />
                        </Link>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div className='teams-container'>
                <div className='teams-search'>
                    <input type='text' value={this.state.keyword} placeholder='Search for a Team' onChange={this.handleChange} />

                    <AddTeamModal props={this.props} />
                </div>
                <div className='all-teams'>
                    {this.renderAllTeams(this.props)}
                </div>
            </div>
        )
    }
    componentDidMount = () => {
        // console.log("Updated", this.props)
        this.props.getAllTeams();

    }
    componentDidUpdate = () => {
        this.props.filterTeams(this.state.keyword)
    }
}

const mapStateToProps = (state) => {
    // console.log('TEAMS STATE', state)

    return {
        teamsList: state.teams.teamsList
    }
}
export default connect(mapStateToProps, actions)(Teams);