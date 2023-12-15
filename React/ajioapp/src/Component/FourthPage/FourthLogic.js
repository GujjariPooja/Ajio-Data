import React, {useState, useEffect} from 'react';
import './Fourth.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FourthDisplay from './FourthDisplay';
import Header from '../Header';

const apiUrl = process.env.REACT_APP_URL

const FourthPage =()=>{
    let params = useParams();

    const[kids, setKids] = useState([]);
    const [kidsList,setKidsList] = useState();


    useEffect(()=>{
        console.log("renderComponent")
        fetch(`${apiUrl}/kids`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data=>{
            setKids(data);
        }))
    }, [])
    
    const renderKids = (data) => {
        if(data){
            return data.map((item)=> {
                console.log(item.brand);
                return (
                    <option key = {item.id} >
                        {item.brand}
                    </option>
                )
            })
        }
    }

    const handleKids = (event) => {
        console.log(event.target.value)
    }

    let size = params.size;

    useEffect(() => {
        sessionStorage.setItem('size',size)
        axios.get(`${apiUrl}/kids?sizes=${size}`)
        .then((res) => {
            setKidsList(res.data)
        })
    });

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
    // }
    return (
        <>
        <Header/>
        <div className="row">
            <div className="leftpart">
            <img src="https://i.ibb.co/3FPsxYT/kid.jpg" alt="kid"/>
                <label> Kids</label>
                <br/>
                    <select onChange = {handleKids} style={{width: "150px", marginTop:"6%"}}> 
                    {renderKids(kids)}
                    </select>        
            </div>
            <FourthDisplay listData={kidsList}/>
        </div>
        </>
    )
}

export default FourthPage;