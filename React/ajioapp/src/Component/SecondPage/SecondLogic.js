import React, {useState, useEffect} from 'react';
import './Second.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SecondDisplay from './SecondDisplay';
import Header from '../Header';

const apiUrl = process.env.REACT_APP_URL

const SecondPage =()=>{
    let params = useParams();

    const[women, setWomen] = useState([]);
    const [womenList,setWomenList] = useState();
//     const[men, setMen] = useState([]);

    useEffect(()=>{
        console.log("renderComponent")
        fetch(`${apiUrl}/women`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data=>{
            setWomen(data);
        }))
    }, [])
    
    const renderWomen = (data) => {
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

    const handleWomen = (event) => {
        console.log(event.target.value)
    }

    let size = params.size;

    useEffect(() => {
        sessionStorage.setItem('size',size)
        axios.get(`${apiUrl}/women?sizes=${size}`)
        .then((res) => {
            setWomenList(res.data)
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
                <img src="https://i.ibb.co/8jvqbj6/women-lgo.jpg" alt="women-lgo"/>
                <label> Women</label>
                    <select onChange = {handleWomen}> 
                    {renderWomen(women)}
                    </select>        
            </div>
            <SecondDisplay listData={womenList}/>
        </div>
        </>
    )
}

export default SecondPage;