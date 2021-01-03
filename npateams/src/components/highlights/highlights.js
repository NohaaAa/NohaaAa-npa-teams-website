import React, { useEffect } from 'react';
import './highlights.css';
import AOS from 'aos';

const Highlights = () => {
    useEffect(() => {

        AOS.init();

    }, [])
    return (
        <div className='blocks-container'>
            <div className='block-1' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement="top-center">
                <div className="hover-div"></div>
                <p className='title'>Milwaukee highlights</p>
            </div>
            <div className='block-2' data-aos='fade-up' data-aos-duration='900' data-aos-anchor-placement="top-center">
                <div className="hover-div"></div>
                <p className='title'>Milwaukee highlights</p>
            </div>
            <div className='block-3' data-aos='fade-up' data-aos-duration='700' data-aos-anchor-placement="top-center">
                <div className="hover-div"></div>
                <p className='title'>Milwaukee highlights</p>
            </div>
            <div className='block-4' data-aos='fade-up' data-aos-duration='500' data-aos-anchor-placement="top-center">
                <div className="hover-div"></div>
                <p className='title'>Milwaukee highlights</p>
            </div>
            <div className='block-5' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement="top-center">
                <div className="hover-div"></div>
                <p className='title'>Milwaukee highlights</p>
            </div>
            <div className='block-6' data-aos='fade-up' data-aos-duration='2000' data-aos-anchor-placement="top-center">
                <div className="hover-div"></div>
                <p className='title'>Milwaukee highlights</p>
            </div>
        </div>
    )
}
export default Highlights;