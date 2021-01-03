import './subscribe.css'

const Subscribe = () => {

    return (
        <div className='subscribe-container'>

            <h1 className='main-title'>
            Subscribe to us
            </h1>
            <input placeholder='YOUREMAIL@DOMAIN.COM' type='email' name='mail' className='input-div'/>
            {/* <p className='success'>Looks Good!</p> */}
            {/* <p className='fail'>Check Email</p> */}
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        </div>
    )
}

export default Subscribe;