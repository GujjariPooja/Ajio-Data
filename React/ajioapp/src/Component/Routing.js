import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Home from './Home/Home';
import SecondPage from './SecondPage/SecondLogic';
import ThirdPage from './ThirdPage/ThirdLogic';
import FourthPage from './FourthPage/FourthLogic';
import FifthPage from './FifthPage/FifthLogic';
import Details from './Details/detailsLogic';
import PlaceOrder from './Order/PlaceOrder';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path = "/" element = {<Main/>}>
                            <Route index element = {<Home/>}/>
                            <Route path="SecondPage" element={<SecondPage/>}/>
                            <Route path="ThirdPage" element={<ThirdPage/>}/>
                            <Route path="FourthPage" element={<FourthPage/>}/>
                            <Route path="FifthPage" element={<FifthPage/>}/>
                            <Route path="details" element={<Details/>}/>
                            <Route path="placeOrder" element={<PlaceOrder/>}/>
                        </Route>
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;