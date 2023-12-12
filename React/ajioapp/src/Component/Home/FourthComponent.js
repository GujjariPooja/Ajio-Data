import React from "react";
import './FourthComponent.css';

const FourthComponent = ()=> {
    return (
        
        <div className="component wal">
            <div id="walCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators buttons">
                    <li data-target="#walCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#walCarousel" data-slide-to="1" ></li>
                </ol>
                
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="https://i.ibb.co/yPcGzJ3/wallet1.jpg" alt="one" className="imgSlider wallet" />
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/8N2VHhs/wallet2.webp" alt="two" className="imgSlider wallet"/>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default FourthComponent;