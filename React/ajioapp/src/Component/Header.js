import React  from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

// const apiUrl = process.env.REACT_APP_URL

const Header = () => {
//     const[women, setWomen] = useState([]);
//     const[men, setMen] = useState([]);

//     useEffect(()=>{
//         console.log("renderComponent")
//         fetch(`${apiUrl}/women`,{method: 'GET'})
//         .then((res)=>res.json())
//         .then((data=>{
//             setWomen(data);
//         }))
//     }, [])
    
//     const renderWomen = (data) => {
//         if(data){
//             return data.map((item)=> {
//                 console.log(item.brand);
//                 return (
//                     <option key = {item.id} >
//                         {item.brand}
//                     </option>
//                 )
//             })
//         }
//     }

//     const handleWomen = (event) => {
//         console.log(event.target.value)
//     }

//     useEffect(()=>{
//         console.log("renderComponent")
//         fetch(`${apiUrl}/men`,{method: 'GET'})
//         .then((res)=>res.json())
//         .then((data=>{
//             setMen(data);
//         }))
//     }, [])
    
//     const renderMen = (data) => {
//         if(data){
//             return data.map((item)=> {
//                 console.log(item.brand);
//                 return (
//                     <option key = {item.id} >
//                         {item.brand}
//                     </option>
//                 )
//             })
//         }
//     }

//     const handleMen = (event) => {
//         console.log(event.target.value)
//     }

    return (
        <div>
        <nav className="navbar navbar-inverse content">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target="#devNav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand name"  to="#"> AJIO </Link>
                </div>
                <div id="devNav" className="navbar-collapse collapse coll">
                <ul className="nav navbar-nav fonts">
                    <li><Link to="/SecondPage">Women</Link></li>
                    {/* <select onChange = {handleWomen}> 
                    {renderWomen(women)}
                    </select> */}
                    <li><Link to="/ThirdPage">Men</Link></li>
                    {/* <select onChange = {handleMen}>
                    {renderMen(men)}
                    </select> */}
                    <li><Link to="/FourthPage">Kids</Link></li>
                    <li><Link to="/FifthPage">Home & Living</Link></li>
                     
                </ul>
                <ul className="nav navbar-nav navbar-right font">
                    <li>
                        <Link to="#">
                            <span className="glyphicon glyphicon-user"></span> My Account
                        </Link> 
                    </li>
                    <li>
                        <Link to="#">
                            <span className="glyphicon glyphicon-heart-empty"></span> My Wishlist
                        </Link> 
                    </li>
                    <li>
                        <Link to="#">
                            <span className="glyphicon glyphicon-shopping-cart"></span> My Cart
                        </Link> 
                    </li>
                </ul>
                </div>
                {/* <i className="fa-solid fa-location-dot weather" onClick = "geolocation()"></i> */}
                <div className="search-container searchtext">
                    <input type="text" placeholder="Search AJIO" className="search-input"/>
                    <i className="fa-solid fa-magnifying-glass searchsym"></i>
                    <i className="fa-thin fa-camera camerasym"></i>
                </div>
                
            </div>
        </nav> 

        {/* <div className="statement">
            <i className="fa-solid fa-moon" onClick = "changeMode()"></i>
            NEW: Put all your faves in wishlist and CREATE YOUR LOOK
        </div> */}

        <p id ="out"></p>
        <p id="weather"></p>
        </div>
    )
}


export default Header;