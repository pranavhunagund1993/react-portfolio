import React from 'react';
import './topbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

function Topbar({ menuOpen,setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>PORTFOLIO</a>
                    <div className="itemContainer">
                        <PersonIcon className='icon'/>
                        <span>+91-7411133826</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className='icon'/>
                        <span>pranavhunagund@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <GitHubIcon className='icon'/>
                        <span>pranavhunagund1993</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;