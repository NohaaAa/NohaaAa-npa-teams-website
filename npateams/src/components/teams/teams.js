import { Component } from 'react';
import './teams.css'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link, Redirect } from 'react-router-dom';
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
        if (teamsList) {
            return teamsList.map((team) => {
                return (
                    <div className='team-logo' key={team.id}>
                        <a href={`teams/${team.id}`}>
                            <img src={`../../assets/teams/${team.logo}`} alt={team.name} />
                        </a>
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
                </div>
                <div className='all-teams'>
                    {this.renderAllTeams(this.props)}
                </div>
            </div>
        )
    }
    componentDidMount = () => {
        this.props.getAllTeams();
    }
    componentDidUpdate = () => {
        // console.log("Updated", this.props)
        this.props.filterTeams(this.state.keyword)
    }
}

const mapStateToProps = (state) => {
    // console.log('TEAMS STATE', state.teams.teamsList)

    return {
        teamsList: state.teams.teamsList
    }
}
export default connect(mapStateToProps, actions)(Teams);