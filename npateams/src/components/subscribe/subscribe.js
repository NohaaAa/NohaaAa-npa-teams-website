import './subscribe.css'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Subscribe = (props) => {

    const [mail, setMail] = useState('');
    const [validate, setValidate] = useState('');




    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleChange = (e) => {
        if (validateEmail(e.target.value)) {
            setMail(e.target.value);
            props.addSubscription(e.target.value)
            if (props.msg) {
                if (props.msg.message === "new mail added!") {
                    setValidate('success');
                }
            }

        } else {
            setValidate('fail');
        }
    }
    return (
        <div className='subscribe-container'>

            <h1 className='main-title'>
                Subscribe to us
            </h1>
            <input placeholder='YOUREMAIL@DOMAIN.COM' type='email' name='mail' className='input-div' onChange={handleChange} />
            {(validate === 'success') ?
                <p className='success'>Thank You</p> :
                (validate === 'fail') ?
                    <p className='fail'>Check Email</p> :
                    ""
            }

            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log("STATE SUB", state.teams.sub)
    return {
        msg: state.teams.sub
    }
}
export default connect(mapStateToProps, actions)(Subscribe);
