import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import FifthComponent from './FifthComponent';
import SixthComponent from './SixthComponent';
import './Home.css';
import Header from '../Header';

const Home = () => {
    return(
        <>
            <Header/>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent/>
            <FifthComponent/>
            <SixthComponent/>
            
        </>
    )
}

export default Home;