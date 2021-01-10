import React, { useEffect, Component } from 'react';
import './highlights.css';
import AOS from 'aos';
import * as actions from '../../actions'
import { connect } from 'react-redux';
class Highlights extends Component {

    constructor(props) {
        super(props);
        console.log('STATE', props)

    }
    renderBlocks = ({ highlights }) => {
        let baseImagesURL = 'https://npabackendapis.nohaa.repl.co/assets/blocks'
        if (highlights) {
            return highlights[0].blocks.map((block, index) => {
                let d = ['1000', '600', '900', '500', '700', '900']
                return (
                    <div className={'block-' + index} data-aos='fade-up' data-aos-duration={d[index]} data-aos-anchor-placement="top-center" key={block._id} style={{ background: `black url('${baseImagesURL}/${block.image}') no-repeat` }}>
                        <div className="hover-div"></div>
                        <p className='title'>{block.title}</p>
                    </div>
                )
            })
        }

    }

    render() {


        return (

            <div className='blocks-container'>
                {this.renderBlocks(this.props)}
            </div>
        )
    }

    componentDidMount() {

        this.props.getHomeUnits()
        AOS.init();
    }

}
const mapStateToProps = (state) => {
    return {
        highlights: state.teams.homeUnits
    }
}
export default connect(mapStateToProps, actions)(Highlights);