import React, { useEffect, useRef } from 'react';
import "./intro.scss";
import { init } from 'ityped';

function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1500,
            strings: ["Web Developer", "React Developer", "MERN Full Stack Developer"],
         })
    }, []);

    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="Profile" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Pranav P Hunagund</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="Down Arrow" />
                </a>
            </div>
        </div>
    )
}

export default Intro;