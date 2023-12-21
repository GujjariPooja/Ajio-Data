import React, {useState, useEffect} from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './details.css';
import { Link } from 'react-router-dom';
import Header from '../Header';


const apiUrl = process.env.REACT_APP_URL


const HomeDetails = ()=> {
    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let [homeDetails,sethomeDetails] = useState();
    // let [size] = useState(sessionStorage.getItem('size'));

    let id = searchParams.getAll('id');

    const homeDetail = async() => {
        const hdata = await axios.get(`${apiUrl}/homedetails/${id}`);
        sethomeDetails(hdata.data[0])
    }

    useEffect(() => {
        homeDetail()
    });

    const proceed = () => {
        navigate(`/placeOrder`)
    }


    const renderDetails = () => {
        if(homeDetails){
            return(
                <>
                   <div className='tileImage'>
                    <div className='imageClass'>
                        <img src={homeDetails.image}
                        alt={homeDetails.brand}/>
                    </div>
                    </div>
                    <div className='tileContent'>
                        <div className='content'>
                            <h1 style ={{color:"#337ab7"}}>{homeDetails.brand}</h1>
                            <h1 style = {{fontSize:"18px", marginBottom:"4%", color:"green"}}>{homeDetails.info}</h1>
                            <span id="cfeedback" style={{border:"2px solid green", padding:"2px 5px", backgroundColor:"lightgreen"}}>{homeDetails.average_rating}&#9733;|380</span>
                            <h3 style={{fontSize:"20px"}}> &#8377;{homeDetails.price}</h3>
                            <h3 style={{fontSize:"20px"}}>MRP &#8377;<del>3000</del>, 50% off</h3>
                            <h5 style={{fontWeight:"normal"}}>Price inclusive of all taxes.</h5>
                            <hr/>
                                <div className="col-md-12">
                                    <Link className='btn btn-danger'
                                    to={`/FifthPage`}>
                                        Back
                                    </Link> &nbsp;&nbsp;
                                    <button className="btn btn-success"
                                    onClick={proceed}>
                                        Proceed
                                    </button>
                                    
                                </div>
                        </div>

                    </div>
                    </>
                )
                }
            }

 
return (
    <>
     <Header/>
    <div className="main">
        {renderDetails()}
    </div>
    </>
)
}

export default HomeDetails;