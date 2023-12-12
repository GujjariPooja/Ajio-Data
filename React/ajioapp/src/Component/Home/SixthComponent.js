import React from 'react';
import './SixthComponent.css';

const SixthComponent = () => {
    return (
        <div>
        <div className="offer">
            <img src="https://i.ibb.co/7kkLdH3/offer.jpg" alt="off" className="offerimg"/>
        </div>


    <div className="arrival">
        <img src="https://i.ibb.co/y8vqbmb/arrivals.webp" alt="arr"/>
    </div>

    <div className="component last">
        <div id="imgCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#imgCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#imgCarousel" data-slide-to="1"></li>
                <li data-target="#imgCarousel" data-slide-to="2"></li>
                <li data-target="#imgCarousel" data-slide-to="3"></li>
                <li data-target="#imgCarousel" data-slide-to="4"></li>
                <li data-target="#imgCarousel" data-slide-to="5"></li>
                <li data-target="#imgCarousel" data-slide-to="6"></li>
                
            </ol>
            
            <div className="carousel-inner">
                <div className="item active">
                    <img src="https://i.ibb.co/vBsLkr7/img1.webp" alt="one" className="imgSlider pic" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/pyfzXB2/img2.webp" alt="two" className="imgSlider pic"/>
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/2q70pgD/img3.webp" alt="three" className="imgSlider pic"/>
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/YBWGMkR/img4.webp" alt="four" className="imgSlider pic"/>
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/j4NrJ4J/img5.webp" alt="five" className="imgSlider pic"/>
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/QHXYkWQ/img6.webp" alt="six" className="imgSlider pic"/>
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/98mLxtw/img7.webp" alt="six" className="imgSlider pic"/>
                </div>
            </div>
        </div>
    </div>
    </div>

    )
}

export default SixthComponent;