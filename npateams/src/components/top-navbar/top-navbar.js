import mainLogo from '../../assets/logo.png'
import './top-navbar.css';
import { Link } from 'react-router-dom'

const TopNavbar = () => {

    return (

        <div className='navbar-container'>
            <Link to='/'><img src={mainLogo} alt='main-logo' /></Link>

            <ul className="nav-menu">
                <li className='nav-link' ><Link to="/teams" >TEAMS</Link></li>
                <li className='nav-link' ><Link to=''>TOP SCORES</Link></li>
            </ul>

        </div>
    )
}

export default TopNavbar;