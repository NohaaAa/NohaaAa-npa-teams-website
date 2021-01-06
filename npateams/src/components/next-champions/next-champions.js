import './next-champions.css';
import warriors from '../../assets/teams/warriors.png';
import cavaliers from '../../assets/teams/cavaliers.png';
import knicks from '../../assets/teams/knicks.png';
import { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class NextChampion extends Component {
    constructor() {
        super();
        this.state = {
            poll: []
        }
    }
    // updatePolls = async ({ listOfTeams }) => {
    //     if (listOfTeams) {
    //         let arrCounts = []
    //         let arrIds = []
    //         await listOfTeams.map((team) => {
    //             arrCounts.push(team.count);
    //         })

    //         arrCounts.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);


    //         let pollArr = arrCounts.slice(0, 3);
    //         pollArr.map((count) => {
    //             listOfTeams.map((team) => {
    //                 if (team.count === count) {
    //                     arrIds.push(team._id);
    //                 }
    //             })
    //         })

    //         let f_team = await this.props.getDetails(arrIds[0]);
    //         let s_team = await this.props.getDetails(arrIds[1]);
    //         let t_team = await this.props.getDetails(arrIds[2]);
    //         let poll = this.state.poll;
    //         poll = [
    //             {
    //                 "id": 'p1',
    //                 "team": f_team.payload.name,
    //                 "thumg": f_team.payload.logo,
    //                 "count": f_team.payload.count
    //             },
    //             {
    //                 "id": 'p2',
    //                 "team": s_team.payload.name,
    //                 "thumg": s_team.payload.logo,
    //                 "count": s_team.payload.count
    //             },
    //             {
    //                 "id": 'p3',
    //                 "team": t_team.payload.name,
    //                 "thumg": t_team.payload.logo,
    //                 "count": t_team.payload.count
    //             },

    //         ]
    //         this.setState(poll);
    //         //updatePoll
    //         this.props.getHomeUnits(poll, '5ff227c14c7a97600c8834a1');
    //     }
    // }

    increaseCount = async (count, id) => {
        let newCount = count + 1;
        this.props.updateTeam({ "count": newCount }, id);
    }

    renderResults = ({ pollList }) => {
        if (pollList) {
            return pollList.map((p, i) => {
                return (<div className={'team-item-' + (i + 1)} key={p._id + i + 4} onClick={() => this.increaseCount(p.count, p._id)} style={{ cursor: 'pointer' }}>
                    <img src={`../../assets/teams/${p.logo}`} alt='team-logo' />
                    <p className='order'>{i + 1}ST</p>
                    <p className='votes'>{p.count} votes</p>
                </div>)
            })
        }
    }
    render() {
        return (
            <div className='next-container'>
                <h1>Who will be the next champion?</h1>
                <p className='vote'>Vote for your team!</p>
                <div className='teams'>

                    {this.renderResults(this.props)}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getTeamsInPoll();

    }

    componentDidUpdate() {
        this.props.getTeamsInPoll();

    }
}

const mapStateToProps = (state) => {
    // console.log('NEXT', state);

    return {
        pollList: state.teams.polls,
    }

}
export default connect(mapStateToProps, actions)(NextChampion);