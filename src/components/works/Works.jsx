import React from 'react';
import './works.scss';
import { useState } from 'react';

function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "ECommerce Application",
            desc: "The objective of this project is to create a portal which would allow product information to be updated securely using a mobile device and will allow users to buy goods form the merchant.",
            img: "./assets/LinkedIn.jpg"
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "EdTech Application",
            desc: "EdTech software (i.e., education technology) are applications that support, facilitate and enhance education by incorporating technology into the learning process.",
            img: "./assets/education.jpeg"
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Music Player Application",
            desc: " The music player with the interactive UI for the easy access for user and used to play mp3 songs.",
            img: "./assets/music.jpeg"
        }
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0);
    }
    return (
        <div className="works" id='works'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                { data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                 ))}
            </div>
            <img src="assets/arrow.png" className='arrow left' onClick={() => handleClick("left")}/>
            <img src="assets/arrow.png" className='arrow right' onClick={() => handleClick("right")}/>
        </div>
    )
}

export default Works;