import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <div className="foot">
    <div className="exchange">
        <ul>
            <img src="https://i.ibb.co/Bz0bRtv/exchange-icon.jpg" alt="exchange" className="iconsall"/>
            <span> EASY EXCHANGE </span>

        </ul>
    </div>
    <div className="exchange">
        <ul>
            <img src="https://i.ibb.co/6t4MQWG/handpicked.jpg" alt="exchange" className="iconsall"/>
            <span> 100% HANDPICKED </span>

        </ul>
    </div>
    <div className="exchange">
        <ul>
            <img src="https://i.ibb.co/LC2KHCb/quality-icon.jpg" alt="exchange" className="iconsall"/>
            <span> ASSURED QUALITY </span>

        </ul>
    </div>

    <div className="cares">
        <img src="https://i.ibb.co/4d6mY02/cares.webp"  alt="care"/>
    </div>
</div>
</div>
    )
}

export default Footer;