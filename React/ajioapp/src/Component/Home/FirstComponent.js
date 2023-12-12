import React from 'react';
import './FirstComponent.css';

const FirstComponent = () => {
    return (
        <>
        <div className="statement">
            {/* <i class="fa-solid fa-moon" onClick = "changeMode()"></i> */}
            NEW: Put all your faves in wishlist and CREATE YOUR LOOK
        </div>

        <div className="component">
    
            <div id="devCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#devCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#devCarousel" data-slide-to="1"></li>
                    <li data-target="#devCarousel" data-slide-to="2"></li>
                    <li data-target="#devCarousel" data-slide-to="3"></li>
                    <li data-target="#devCarousel" data-slide-to="4"></li>
                    <li data-target="#devCarousel" data-slide-to="5"></li>
                    
                </ol>
                
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="https://i.ibb.co/NySgw7q/one.jpg" alt="one" className="imgSlider pic" />
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/vd78xXr/two.jpg" alt="two" className="imgSlider pic"/>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/MG5DRLv/three.jpg" alt="three" className="imgSlider pic"/>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/YQD3yny/four.jpg" alt="four" className="imgSlider pic"/>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/w4DLpyC/five.jpg" alt="five" className="imgSlider pic"/>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/KN6gJQz/six.jpg" alt="six" className="imgSlider pic"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FirstComponent;