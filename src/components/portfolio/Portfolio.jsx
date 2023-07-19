import React, { useState } from 'react';
import './portfolio.scss';
import PortfolioList from './../portfolioList/portfolioList';

function Portfolio() {

    const [selected, setSelected] = useState("featured");

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ];

    return (
        <div className="portfolio" id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                { list.map((item) => (
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected} 
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/LinkedIn.jpg" alt="LinkedIn" />
                    <h3>LinkedIn Clone App</h3>
                </div>
                <div className="item">
                    <img src="assets/LinkedIn.jpg" alt="LinkedIn" />
                    <h3>LinkedIn Clone App</h3>
                </div>
                <div className="item">
                    <img src="assets/LinkedIn.jpg" alt="LinkedIn" />
                    <h3>LinkedIn Clone App</h3>
                </div>
                <div className="item">
                    <img src="assets/LinkedIn.jpg" alt="LinkedIn" />
                    <h3>LinkedIn Clone App</h3>
                </div>
                <div className="item">
                    <img src="assets/LinkedIn.jpg" alt="LinkedIn" />
                    <h3>LinkedIn Clone App</h3>
                </div>
                <div className="item">
                    <img src="assets/LinkedIn.jpg" alt="LinkedIn" />
                    <h3>LinkedIn Clone App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;