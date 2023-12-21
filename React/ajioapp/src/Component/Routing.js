import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Home from './Home/Home';
import SecondPage from './SecondPage/SecondLogic';
import ThirdPage from './ThirdPage/ThirdLogic';
import FourthPage from './FourthPage/FourthLogic';
import FifthPage from './FifthPage/FifthLogic';
import Details from './Details/detailsLogic';
import PlaceOrder from './Order/PlaceOrder';
import ViewOrder  from './Order/viewOrder';
import Login from './login/loginComponent';
import Register from './login/registerComponent';
import MenDetails from './MenDetails/detailsLogic';
import KidsDetails from './KidsDetails/detailsLogic';
import HomeDetails from './HomeDetails/detailsLogic';


const Routing = () => {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path = "/" element = {<Main/>}>
                            <Route index element = {<Home/>}/>
                            <Route path="SecondPage" element={<SecondPage/>}/>
                            <Route path="ThirdPage" element={<ThirdPage/>}/>
                            <Route path="FourthPage" element={<FourthPage/>}/>
                            <Route path="FifthPage" element={<FifthPage/>}/>
                            <Route path="details" element={<Details/>}/>
                            <Route path="placeOrder" element={<PlaceOrder/>}/>
                            <Route path="viewOrder" element={<ViewOrder/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="register" element={<Register/>}/>
                            <Route path="menDetails" element={<MenDetails/>}/>
                            <Route path="kidsDetails" element={<KidsDetails/>}/>
                            <Route path="homeDetails" element={<HomeDetails/>}/>
                        </Route>
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;