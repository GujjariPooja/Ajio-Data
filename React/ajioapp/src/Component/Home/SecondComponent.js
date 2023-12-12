import React from 'react';
import './SecondComponent.css';

const SecondComponent = () => {
    return (
        <div>
        <div className="delivery">
            <div>
                <img src="https://i.ibb.co/ByVkZc9/delivery.jpg" alt="del" className="del"/>
            </div>
            <div id="order">FREE DELIVERY ON ALL ORDERS ABOVE &#8377;1199*</div>
            <div className="code">USE CODE: FREEDEL</div>
        </div>
        </div>
    )
}

export default SecondComponent;