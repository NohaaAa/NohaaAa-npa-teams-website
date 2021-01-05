import React, { useEffect, Component } from 'react';
import './highlights.css';
import AOS from 'aos';

class Highlights extends Component {


    renderBlocks = (highlights) => {
        if (highlights) {
            return highlights.map((block, index) => {
                let d = ['1000', '600', '900', '500', '700', '900']
                return (
                    <div className={'block-' + index} data-aos='fade-up' data-aos-duration={d[index]} data-aos-anchor-placement="top-center" key={block._id} style={{ background: `black url('../../assets/blocks/${block.image}') no-repeat` }}>
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
                {this.renderBlocks(this.props.blocks)}
            </div>
        )
    }

    componentDidMount() {
        console.log("PROPS", this.props.blocks)
        AOS.init();
    }
}
export default Highlights;