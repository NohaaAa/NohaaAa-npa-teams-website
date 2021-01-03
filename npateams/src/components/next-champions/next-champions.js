import './next-champions.css';
import warriors from '../../assets/teams/warriors.png';
import cavaliers from '../../assets/teams/cavaliers.png';
import knicks from '../../assets/teams/knicks.png';
const NextChampion = () => {




    return (
        <div className='next-container'>
            <h1>Who will be the next champion ?</h1>
            <div className='teams'>
                <div className='team-item-1'>
                    <img src={warriors} alt='team-logo' />
                    <p className='order'>1ST</p>
                    <p className='votes'>2,456 votes</p>
                </div>
                <div className='team-item-2'>
                    <img src={cavaliers} alt='team-logo' />
                    <p className='order'>2ND </p>
                    <p className='votes'>2,234 votes</p>
                </div>
                <div className='team-item-3'>
                    <img src={knicks} alt='team-logo' />
                    <p className='order'>3ND</p>
                    <p className='votes'>2 votes</p>
                </div>
            </div>
        </div>
    )
}

export default NextChampion;