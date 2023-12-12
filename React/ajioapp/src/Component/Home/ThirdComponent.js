import React from 'react';
import './ThirdComponent.css';

const ThirdComponent = () => {
    return (
        <div>
        <div id="hitstate" className="hitstate">
            <img src="https://i.ibb.co/Cw1xn7V/hit.webp" alt="hit"/>
        </div>
        <div className="component hit">
            <div id="hitCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#hitCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#hitCarousel" data-slide-to="1"></li>
                    <li data-target="#hitCarousel" data-slide-to="2"></li>
                    <li data-target="#hitCarousel" data-slide-to="3"></li>
                    <li data-target="#hitCarousel" data-slide-to="4"></li>
                    
                </ol>
                
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="https://i.ibb.co/ZmLQNFj/best-hits.webp" alt="one" className="imgSlider pic" />
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/grMY78F/best-hit2.webp" alt="two" className="imgSlider pic"/>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/RzJSDDF/best-hit-3.webp" alt="three" className="imgSlider pic"/>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/CBptJBG/best-hit4.webp" alt="four" className="imgSlider pic"/>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/yX0SxDp/best-hit-5.webp" alt="five" className="imgSlider pic"/>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default ThirdComponent;