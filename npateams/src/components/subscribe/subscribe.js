import "./subscribe.css";
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Subscribe extends Component {

    constructor() {
        super()
        this.state = {
            mail: '',
            validate: ''
        }
    }
    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleChange = (e) => {
        if (this.validateEmail(e.target.value)) {
            this.setState({ mail: e.target.value });
            this.props.addSubscription(e.target.value)
            if (this.props.msg) {
                if (this.props.msg.message === "new mail added!") {
                    this.setState({ validate: 'success' });
                }
            }

        } else {
            this.setState({ validate: 'fail' });
        }
    }
    render() {
        return (
            <div className='subscribe-container'>

                <h1 className='main-title'>
                    Subscribe to us
                </h1>
                <input placeholder='YOUREMAIL@DOMAIN.COM' type='email' name='mail' className='input-div' onChange={this.handleChange} />
                {(this.state.validate === 'success') ?
                    <p className='success'>Thank You</p> :
                    (this.state.validate === 'fail') ?
                        <p className='fail'>Check Email</p> :
                        ""
                }

                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log("STATE SUB", state.teams.sub)
    return {
        msg: state.teams.sub
    }
}
export default connect(mapStateToProps, actions)(Subscribe);
