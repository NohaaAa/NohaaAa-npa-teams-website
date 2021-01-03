import mainLogo from '../../assets/logo.png'
import './footer.css'

const Footer = () => {

    return (
        <div className='footer-container'>
            <div className='footer-brand'>
                <img src={mainLogo} alt='footer-logo' />
            </div>
        </div>
    )
}

export default Footer;