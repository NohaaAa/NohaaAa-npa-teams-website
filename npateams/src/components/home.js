import Header from './header/header';
import Subscribe from './subscribe/subscribe';
import Highlights from './highlights/highlights';
import NextChampion from './next-champions/next-champions';
import { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        console.log('this props', props);
    }
    render() {
        if (this.props.units) {
            return (
                <div className="App">
                    <Header />
                    <Subscribe />
                    <Highlights blocks={this.props.units[0].blocks} />
                    <NextChampion poll={this.props.units[0].poll} />
                </div>
            )
        } else {
            return (
                <div class="ui active centered inline loader"></div>
            )

        }
    }

    componentDidMount() {
        this.props.getHomeUnits()
    }
}

const mapStateToProps = (state) => {
    // console.log("HOME STATE", state.teams.homeUnits);
    return {
        units: state.teams.homeUnits
    }
}

export default connect(mapStateToProps, actions)(Home);