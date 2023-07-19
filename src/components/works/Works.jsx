import React from 'react';
import './works.scss';

function Works() {
    return (
        <div className="works" id='works'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="mobile" />
                                </div>
                                <h2>LinkedIn Clone</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid est porro culpa, accusantium consectetur unde esse exercitationem nisi nihil!</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/LinkedIn.jpg" alt="LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/arrow.png" className='arrow left' />
            <img src="assets/arrow.png" className='arrow right' />
        </div>
    )
}

export default Works;